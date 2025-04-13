import React from 'react'
import SmallBanner from '../component/smallBanner'

const Gallery = () => {
  const title= 'Images';
  const subTitle = 'Product Images'
  return (
    <SmallBanner title={title}  subTitle={subTitle}/>
  )
}

export default Gallery