import React from 'react'
import styles from './core.css.json'

if (!IS_PRODUCTION) { // eslint-disable-line no-undef
  const css = require('./core.css') // eslint-disable-line no-unused-vars
}

class Main extends React.Component {
  render () {
    return (
      <div className={styles.wrapper}>
        <div className={styles.wrapperInner}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

Main.propTypes = {
  children: React.PropTypes.object
}

export default Main
