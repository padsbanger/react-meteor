import React, { Component} from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import { Links } from '../../imports/collections/links'

class LinksList extends Component {

  renderRows() {
    return this.props.links.map(link => {
      return (
        <tr key={link.token}>
          <td>{link.url}</td>
          <td><a href={`/${link.token}`}>{link.token}</a></td>
          <td>{link.clicks}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>URL</th>
            <th>Address</th>
            <th>Clicks</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    )
  }
}

export default createContainer(() => {
  Meteor.subscribe('links')
  return {
    links: Links.find({}).fetch()
  }
}, LinksList)
