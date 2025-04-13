import React from 'react'
import SmallBanner from '../component/smallBanner'

const About = () => {
  const subTitle = 'We sale fresh fruits'
  const title = 'About us'
  return (
    <>
      <SmallBanner subTitle={subTitle} title={title} />
    </>
  )
}

export default About