import axios from "axios";
import { useState } from 'react';
import { useParams, useLoaderData } from 'react-router-dom'
import articleContent from '../article-content';
import CommentsList from '../CommentsList';
import AddComments from '../AddComments';

const ArticlePage = () => {
  const { name } = useParams();
  const { upvotes:initialUpvotes, comments:initialComments } = useLoaderData();
  const [upvotes, setUpvotes] = useState(initialUpvotes);  
  const [comments, setComments] = useState(initialComments);

  const article = articleContent.find(article => article.name === name);
  const onUpvoteClicked = async () => {
    const response = await axios.post('/api/articles/' + name + '/upvote');
    const updatedArticle = response.data;
    setUpvotes(updatedArticle.upvotes);
  };

  const addComment = async (newComment) => {
    const response = await axios.post('/api/articles/' + name + '/comments', newComment);
    const updatedArticle = response.data;
    setUpvotes(updatedArticle.upvotes);
    setComments(updatedArticle.comments);
  };


  return (
    <>
      <h1>{article.title}</h1>
      <div className='upvotes-section'>
        <button onClick={onUpvoteClicked} >Upvote</button>
        <p>This article has {upvotes} upvotes</p>
      </div>
      {article.content.map((para, index)=><p key={index}>{para}</p>)}
      <AddComments onAddComment={addComment} />
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