import React, { Component } from 'react'
import './CommentForm.css'
import './Comment.css'

class CommentForm extends Component {
    
    constructor() {
      super()
      
      this.state = {
        comment: '',
        comments: [],
      }

      //this.onSubmitFunction = this.onSubmitFunction.bind(this)
      this.updateComment = this.updateComment.bind(this)
      this.addComment = this.addComment.bind(this)
    }

    updateComment(ev) {
        this.setState({
            comment: ev.target.value
        })
    }

    addComment(ev) {
        const comment = {
            timestamp: new Date(),
            text: this.state.comment
        }
        const state = {...this.state}
        state.comments.push(comment)
        state.comment = ''
        this.setState(state)
    }

    render() {
        return (
            <div className="comments">
                <textarea 
                    value={this.state.comment} 
                    onChange={this.updateComment} 
                    placeholder="Enter Comment">
                </textarea>
                <button 
                    onClick={this.addComment} 
                    className="expanded button">Submit Comment
                </button>
                {this.state.comments.map((comment, i) => <Comment comment={comment} key={i}/>)}
            </div>
        )
    }
}

function Comment (props) {
    return (
        <div className="comment">
            <div>{props.comment.text}</div>
        </div>
    )
}

export default CommentForm