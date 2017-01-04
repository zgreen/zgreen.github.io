import React from 'react'
import styles from './core.css.json'
import eraserHead from './img/eraserHead.jpeg'
const homepage = { __html: require('./homepage.md') }

if (!IS_PRODUCTION) { // eslint-disable-line no-undef
  const css = require('./core.css') // eslint-disable-line no-unused-vars
}

class Main extends React.Component {
  render () {
    return (
      <div>
        <h1>Zach Green</h1>
        <div className={styles.bioWrap}>
          <div><img src={eraserHead} alt='Eraserhead' /></div>
          <div dangerouslySetInnerHTML={homepage} />
        </div>
      </div>
    )
  }
}

export default Main
