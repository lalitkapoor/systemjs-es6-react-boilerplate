/** @jsx React.DOM */
import React from 'react'

class Test extends React.Component {
  render() {
    return (
      <div>Awesome Test!</div>
    )
  }
}

Test.defaultProps = {
  displayName: 'Test'
}

export default Test
