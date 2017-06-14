import React, { Component } from 'react';
import './ArticleLinks.css'
import CommentForm from './CommentForm'

class ArticleLinks extends Component {
    
    constructor() {
      super()
      
      this.state = {
        showComments: false,
      }

      this.onClickFunction = this.onClickFunction.bind(this);
    }

    onClickFunction(ev) {
      ev.preventDefault()
      if (this.state.showComments) {
        this.setState({
          showComponent: false,
        });
      } else {
        this.setState({
          showComponent: true,
        });
      }
    }
    
    render() {
        return (
            <div className="article-links">
              <a onClick={this.onClickFunction} cursor="pointer" className="article-link" href="">
                <i className="fa fa-comments-o"></i>
                <span className="article-link-text">Comments</span>
              </a>
              <a className="article-link" href="#">
                <i className="fa fa-share"></i>
                <span className="article-link-text">Share Post</span>
              </a>
              {this.state.showComponent ?
                <CommentForm /> :
                null
              }
            </div>
        )
    }
}

export default ArticleLinks