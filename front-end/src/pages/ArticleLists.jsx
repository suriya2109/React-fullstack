import React from 'react';
import articleContent from '../article-content';
import ArticlesList from '../ArticlesList';

const ArticleLists = () => {
  return (
    <>
      <ArticlesList articles={articleContent} />
    </>
  )
}

export default ArticleLists;