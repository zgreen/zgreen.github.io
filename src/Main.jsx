import React from 'react'
import { Link } from 'react-router'
import styles from './core.css.json'
import eraserHead from './img/eraserHead.jpeg'
const homepage = { __html: require('./homepage.md') }

if (!IS_PRODUCTION) { // eslint-disable-line no-undef
  const css = require('./core.css') // eslint-disable-line no-unused-vars
}

class Main extends React.Component {
  render () {
    return (
      <div className={styles.wrapper}>
        <Link to='/roll-your-own-static-site-generator'>go here</Link>
        <div className={styles.wrapperInner}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Main
