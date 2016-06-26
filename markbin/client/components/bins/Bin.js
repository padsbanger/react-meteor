import React, { Component } from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import { Bins } from '../../../imports/collections/bins'

import BinEditor from './BinEditor'
import BinPreview from './BinPreview'
import BinsShare from './BinsShare'

class Bin extends Component {
  constructor() {
    super()
  }

  render() {
    if(!this.props.bin) {
      return <div>Loading ... </div>
    }
    return (
      <div>
        <BinEditor bin={this.props.bin} />
        <BinPreview bin={this.props.bin} />
        <BinsShare bin={this.props.bin} />
      </div>
    )
  }
}

export default createContainer((props)=> {
  const { binId } = props.params
  Meteor.subscribe('bins')
  Meteor.subscribe('sharedBins')

  return {
    bin: Bins.findOne(binId)
  }

}, Bin)
