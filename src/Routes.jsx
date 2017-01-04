import React from 'react'
import { IndexRoute, Route } from 'react-router'
import Main from './Main'
import Home from './Home'
import posts from './posts.json'
import Post from './Post'

export default (
  <Route path='/' component={Main}>
    <IndexRoute component={Home} />
    {posts.filter((post) => !post.isDraft)
      .map((post, idx) => <Route key={idx} path={`${post.slug}`} component={Post} postContent={require(`./posts/${post.slug}.md`)} />)}
  </Route>
)
