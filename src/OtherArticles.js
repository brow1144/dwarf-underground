import React, { Component } from 'react';
import './OtherArticles.css'
import EachArticle from './EachArticle'


class OtherArticles extends Component {    
    constructor() {
        super()

        this.state = {
            articles: [
                'https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif',
                'https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg',
                'http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg',
                'http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg'
            ],
        }

        this.words = {
            sentance: [
                'Single Orcs in Indianapolis',
                'You wont believe whats under this mountain',
                'Mine 20% more gold with One Weird Trick',
                'Surprise for Indiana Hobbits born before 1999',
            ]
        }
    }

    renderArticles(article, i) {
        return <EachArticle key={i} textI={i} article={article}/>
    }
    
    render() {
        return (
            <div className="small-12 columns other-articles">
                <h2>From around the Realm</h2>
                {this.state.articles.map(this.renderArticles)}
            </div>
        )
    }
}

export default OtherArticles