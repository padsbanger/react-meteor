import React, { Component } from 'react'

class BinsShare extends Component {
  constructor() {
    super()
  }

  handleClick() {
    const email = this.refs.email.value
    Meteor.call('bins.share', this.props.bin, email)
  }

  renderSharedWith() {
    return this.props.bin.sharedWith.map(email => {
      return <button key={email} className="btn btn-default">
        {email}
      </button>
    })
  }

  render() {
    return (
      <footer className="bin-share">
        <div className="input-group">
          <input className="form-control" ref="email"/>
          <div className="input-group-btn">
          <button className="btn btn-default" onClick={this.handleClick.bind(this)}>Share Bin</button>
          </div>
        </div>
        <div>
          Shared With:
        </div>
        <div className="btn-grup">
          {this.renderSharedWith()}
        </div>
      </footer>
    )
  }
}

export default BinsShare
