import React, { Component } from 'react'
import CodeMirror from 'react-codemirror'
import 'codemirror/mode/markdown/markdown'

class BinEditor extends Component {
  constructor() {
    super()
  }

  handleChange(content) {
    Meteor.call('bins.update', this.props.bin, content)
  }

  render() {
    return (
      <div classname="col-xs-8">
        <h5>Input</h5>
        <CodeMirror
          value={this.props.bin.content}
          onChange={this.handleChange.bind(this)}
          options={{ mode: 'markdown', lineNumbers: true}} />
      </div>
    )
  }
}

export default BinEditor
