import React, { Component } from 'react'
import { Link } from 'react-router'
import { createContainer} from 'meteor/react-meteor-data'
import { Bins } from '../../../imports/collections/bins'

class BinsList extends Component {
  constructor() {
    super()
  }

  onBinRemove(bin) {
    Meteor.call('bins.remove', bin)
  }

  renderList() {
    return this.props.bins.map(bin => {
      return (
        <li className="list-group-item" key={bin._id}>
        <Link to={`/bins/${bin._id}`}>Bin {bin._id}</Link>
        <span className="pull-right">
          <button className="btn btn-danger" onClick={()=>this.onBinRemove(bin)}>X</button>
        </span>
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group">
        {this.renderList()}
      </ul>
    )
  }
}


export default createContainer(() => {
  Meteor.subscribe('bins')
  Meteor.subscribe('sharedBins')
  return {
    bins: Bins.find({}).fetch()
  }
}, BinsList)
