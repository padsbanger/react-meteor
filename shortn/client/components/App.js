import React, { Component } from 'react'

import { Links } from '../../imports/collections/links'
import Header from './Header'
import AddLink from './AddLink'
import LinksList from './LinksList'

class App extends Component {
  constructor() {
    super()
  }



  render() {
    return (
      <div>
        <Header />
        <AddLink />
        <LinksList />
      </div>
    )
  }
}


export default App
