import React, { Component } from 'react';
import './CommentForm.css'

class CommentForm extends Component {
    render() {
        return (
            <form className="form">
                <input type="text" />
                <button className="expanded success button" type="submit">Submit Comment</button>
            </form>    
        )
    }
}

export default CommentForm