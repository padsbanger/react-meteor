import React, { Component } from 'react'
import axios from 'axios'

import ImageListItem from './ImageListItem'

const API = 'https://api.imgur.com/3/gallery/hot/viral/0'

class ImageList extends Component {
  constructor() {
    super()
    this.state = {
      images: []
    }
  }

  componentDidMount() {
    axios.get(API).then(images => {
      this.setState({
        images: images.data.data
      })
    })
  }

  renderListItems(images) {
    const validImages = images.filter(image => !image.is_album)

    return validImages.map((image, i) => {
      return <ImageListItem key={i} image={image} />
    })
  }

  render() {
    return (
      <ul className="media-list list-group">
        {
          this.renderListItems(this.state.images)
        }
      </ul>
    )
  }
}


export default ImageList
