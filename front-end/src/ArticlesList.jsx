import React from 'react'
import { Link } from 'react-router-dom'

const ArticleList = ({articles}) => {
  return (
    <>
        <h1>Articles List</h1>
        {articles.map(article => (
          <Link key={article.name} to={`/articles/${article.name}`}>
            <h2>{article.title}</h2>
            <p>{article.content[0].substring(0, 150)}...</p>
            </Link>
        ))}
    </>
  )
}

export default ArticleList