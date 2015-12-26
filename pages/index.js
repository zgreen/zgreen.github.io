import React, { Component } from 'react';

export default class extends Component {

  render() {
    return (
      <div>
        <h1>Zach Green</h1>
        <p>I work at <a href="//www.alleyinteractive.com/">Alley Interactive</a>. I used to work at <a href="//libraries.mit.edu/">MIT</a>.</p>
        <h2>Contact</h2>
        <ul>
          <li><a href="mailto:zhgreen@gmail.com">zhgreen@gmail.com</a></li>
          <li><a href="//twitter.com/zgreen_">@zgreen_</a></li>
          <li><a href="//github.com/zgreen">github.com/zgreen</a></li>
        </ul>
        <h2>I like working with:</h2>
        <ul>
          <li>PostCSS</li>
          <li>Webpack</li>
          <li>ES6, Angular, React</li>
        </ul>
        <h2>I also know:</h2>
        <ul>
          <li>Sass</li>
          <li>PHP, WordPress</li>
          <li>jQuery</li>
          <li>Grunt</li>
        </ul>
        <footer>
          <p>Thanks for stopping by.</p>
        </footer>
      </div>
    );
  }
}
