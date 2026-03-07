import axios from "axios";
import { useState } from 'react';
import { useParams, useLoaderData } from 'react-router-dom'
import articleContent from '../article-content';
import CommentsList from '../CommentsList';
import AddComments from '../AddComments';
import useUser from '../useUser';

const ArticlePage = () => {
  const { name } = useParams();
  const { upvotes:initialUpvotes, comments:initialComments } = useLoaderData();
  const [upvotes, setUpvotes] = useState(initialUpvotes);  
  const [comments, setComments] = useState(initialComments);

   const { isLoading, user } = useUser();

  const article = articleContent.find(article => article.name === name);

  async function onUpvoteClicked() {
    const token = user && await user.getIdToken();
    const headers = token ? { authtoken: token } : {};
    const response = await axios.post('/api/articles/' + name + '/upvote', null, { headers });
    const updatedArticleData = response.data;
    setUpvotes(updatedArticleData.upvotes);
  }

   async function onAddComment({ postedBy, text }) {
    const token = user && await user.getIdToken();
    const headers = token ? { authtoken: token } : {};
    const response = await axios.post('/api/articles/' + name + '/comments', {
      postedBy: postedBy,
      text: text,
    }, { headers });
    const updatedArticleData = response.data;
    setComments(updatedArticleData.comments);
  }


  return (
    <>
       <h1>{article.title}</h1>
    {user && <button onClick={onUpvoteClicked}>Upvote</button>}
    <p>This article has {upvotes} upvotes</p>
    {article.content.map(p => <p key={p}>{p}</p>)}
    {user
      ? <AddComments onAddComment={onAddComment} />
      : <p>Log in to add a comment</p>}
    <CommentsList comments={comments} />
    </>
  )
}

export default ArticlePage

export async function loader({ params }) {
  const response = await axios.get('/api/articles/' + params.name);
  const { upvotes, comments } = response.data;
  return { upvotes, comments };
}