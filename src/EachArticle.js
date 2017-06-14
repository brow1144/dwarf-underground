import React, { Component } from 'react';

class EachArticle extends Component {
    
    renderText(i) {
        this.sentance = [
            'Single Orcs in Indianapolis',
            'You wont believe whats under this mountain',
            'Mine 20% more gold with One Weird Trick',
            'Surprise for Indiana Hobbits born before 1999',
        ]

        return this.sentance[i]
    }

    render() {
        return(
            <div className="small-6 medium-3 columns other-article">
                <a href="#">
                    <img src={this.props.article} alt="orc" />
                    <p>{this.renderText(this.props.textI)}</p>
                </a>  
            </div>
        )
    }
}

export default EachArticle