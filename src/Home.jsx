import React from 'react'
import styles from './core.css.json'
import eraserHead from './img/eraserHead.jpeg'
import config from './config'
import posts from './posts.json'
import { Link } from 'react-router'
const homepage = { __html: require('./homepage.md') }

if (!IS_PRODUCTION) { // eslint-disable-line no-undef
  const css = require('./core.css') // eslint-disable-line no-unused-vars
}

const latestPostObj = posts
  .filter((post) => !post.isDraft)
  .sort((a, b) => {
    return new Date(b.postedDate) - new Date(a.postedDate)
  })[0]

class Main extends React.Component {
  render () {
    return (
      <div>
        <h1>{config.siteName}</h1>
        <div className={styles.bioWrap}>
          <div><img src={eraserHead} alt='Eraserhead' /></div>
          <div dangerouslySetInnerHTML={homepage} />
        </div>
        <h2 className={styles.homePostTitleWrapper}><span style={{ fontWeight: '400' }}>Latest post</span>: <Link
          to={latestPostObj.slug}
          className={styles.homePostTitle}
          >"{latestPostObj.title}"</Link>
        </h2>
      </div>
    )
  }
}

export default Main
