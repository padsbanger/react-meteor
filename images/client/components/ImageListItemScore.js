import React from 'react'

const ImageListItemScore = (props) => {
  const {ups, downs} = props

  const upsPercent = `${100 * (ups /(ups + downs))}%`
  const downsPercent = `${100 * (downs /(ups + downs))}%`

  return (
    <div>
      Ups/downs
      <div className="progress">
        <div style={{width: upsPercent}} className="progress-bar progress-bar-success"/>
        <div style={{width: downsPercent}} className="progress-bar progress-bar-danger"/>
      </div>
    </div>
  )
}


export default ImageListItemScore
