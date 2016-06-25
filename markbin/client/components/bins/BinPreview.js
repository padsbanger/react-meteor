import React, { Component } from 'react'
import { markdown } from 'markdown'

class BinPreview extends Component {
  constructor() {
    super()
  }

  render() {

    const rawHTML = markdown.toHTML(this.props.bin.content)

    return (
      <div classname="col-xs-4">
        <h5>Output</h5>
        <div dangerouslySetInnerHTML={{ __html: rawHTML }}></div>
      </div>
    )
  }
}

export default BinPreview
