import React, { Component } from 'react'

import Header from './Header'

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
}


export default App
