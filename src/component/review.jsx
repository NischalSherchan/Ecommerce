
import siteReviews from "../data.js/review";
import React from "react";
import Slider from "react-slick";
import ReviewSlide from "./reviewStructure";

const Review = () => {
    const settings = {
    
        infinite: true,
        speed: 2000,              // Your original speed
        slidesToShow: 1,          // Changed from test value
        slidesToScroll: 1,
        autoplay: true,           // Added from your config
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [             // Recommended for mobile
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      };
  return (
    <div className="bg-[#F5F5F5] mt-20 py-12">
    <div className="container mx-auto px-4">
      <Slider {...settings}>
        {siteReviews.map((item, index) => (
          <ReviewSlide key={index} item={item} />
        ))}
      </Slider>
    </div>
  </div>
  );
};

export default Review;
