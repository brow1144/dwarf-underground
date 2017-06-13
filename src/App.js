import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import ArticleBody from './ArticleBody'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <ArticleBody />

        <Footer />
      </div>
    );
  }
}

export default App;
