import React from 'react'
import config from './config'
import { Link } from 'react-router'

class Post extends React.Component {
  render () {
    return (
      <div>
        <small rel='author'><Link style={{ color: 'inherit' }} to='/'>{config.siteName}</Link></small>
        <article dangerouslySetInnerHTML={{ __html: this.props.route.postContent }} />
      </div>
    )
  }
}

Post.propTypes = {
  route: React.PropTypes.object
}

export default Post
