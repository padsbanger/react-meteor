import React, { Component } from 'react'

import ImageListItemScore from './ImageListItemScore'

class ImageListItem extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <li className="media list-group-item">
        <div className="media-left">
          <img src={this.props.image.link} />
        </div>
        <div className="media-body">
          <h3 className="media-heading ">{this.props.image.title}</h3>
          <p>{this.props.image.description}</p>
          <ImageListItemScore ups={this.props.image.ups} downs={this.props.image.downs} />
        </div>
      </li>
    )
  }
}


export default ImageListItem
