import React, { Component } from 'react'

class AddLink extends Component {
  constructor(props) {
    super(props)

    this.state = {
      err: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    Meteor.call('links.insert', this.refs.link.value, (err) => {
      if(err) {
        this.setState({
          err: 'Enter a valid URL'
        })
      } else {
        this.setState({
          err: ''
        })
        this.refs.link.value = ''
      }
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label>URL</label>
          <input ref="link" className="form-control" />
        </div>
        <div className="text-danger">{this.state.err}</div>
        <button className="btn btn-primary">Shortn</button>
      </form>
    )
  }
}

export default AddLink
