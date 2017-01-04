import React from 'react'

class Test extends React.Component {
  constructor (props) {
    super(props)
    console.log(props)
  }
  render () {
    return (
      <div dangerouslySetInnerHTML={{ __html: this.props.route.postContent }}></div>
    )
  }
}

export default Test
