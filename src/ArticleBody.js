import React, { Component } from 'react';
import './ArticleBody.css'
import AuthorInfo from './AuthorInfo'
import ArticleText from './ArticleText'
import ArticleLinks from './ArticleLinks'
import Aside from './Aside'
import OtherArticles from './OtherArticles'
import ArticleTitle from './ArticleTitle'

class ArticleBody extends Component {
  render() {
    return (
      <main className="expanded row">
          <div className="large-8 medium-12 columns article">
            <ArticleTitle />

            <AuthorInfo />

            <ArticleText />

            <ArticleLinks />

            
            
          </div>
          
          <Aside />

          <OtherArticles />

      </main>
    )
  }
}

export default ArticleBody


