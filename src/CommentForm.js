/*
    TODO: Make Time Stamps Be the time and not switch all
    TODO: Add some style to the list 
    TODO: 
*/


import React, { Component } from 'react';
import './CommentForm.css'

class CommentForm extends Component {
    
    constructor() {
      super()
      
      this.state = {
        comments: [],
      }

      this.onSubmitFunction = this.onSubmitFunction.bind(this);
    }

    onSubmitFunction(ev) {
        ev.preventDefault()

        const comments = [...this.state.comments]
        comments.push(this.commentInput.value)
        this.setState({ comments })
        ev.currentTarget.reset()
    }

    renderComments(comment, i) {
        return <li key={i}>{comment}<span>{new Date().toJSON().slice(0,10).replace(/-/g,'/')}</span></li>
    }
    
    render() {
        return (
            <form onSubmit={this.onSubmitFunction.bind(this)}>
                <ul className="no-bullet">
                    {this.state.comments.map(this.renderComments)}
                </ul>
                <input type="text" ref={input => this.commentInput = input} />
                <button className="expanded button" type="submit">Submit Comment</button>
            </form>    
        )
    }
}

export default CommentForm