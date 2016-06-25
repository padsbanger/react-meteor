import React, { Component } from 'react'

class Bin extends Component {
  constructor() {
    super()
  }

  render() {
    console.log(this.props.params.binId)
    return (
      <div>Single bin view </div>
    )
  }
}

export default Bin
