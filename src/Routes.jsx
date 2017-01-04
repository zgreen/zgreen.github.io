import React from 'react'
import { IndexRoute, Route } from 'react-router'
import Main from './Main'
import Home from './Home'
import posts from './posts.json'
import Test from './Test'

export default (
  <Route path='/' component={Main}>
    <IndexRoute component={Home} />
    {posts.map((post) => <Route path={`${post}`} component={Test} postContent={require(`./posts/${post}.md`)} />)}
  </Route>
)
