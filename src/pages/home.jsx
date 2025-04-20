import React from 'react'
import Banner from '../component/banner'
import Services from '../component/Services'
import OurProduct from '../component/OurProduct'
import TopSeller from '../component/TopSeller'
import Review from '../component/review'
import VideoInfo from '../component/videoInfo'

const Home = () => {
  return (
    <>
      <Banner />
      <Services />
      <OurProduct />
      <TopSeller  />
      <Review />
      <VideoInfo />
    </>
  )
}

export default Home