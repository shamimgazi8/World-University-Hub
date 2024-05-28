import TestimonialCard from "@/modules/@common/testimonial-card";
import React from "react";
import Slider from "react-slick";
const testimonialData = [
  {
    picture: "/images/icons/user-avatar.png",
    name: "Steve Rogers",
    country: "USA",
    message:
      "“Our expert team, checks every application & essay before submitting. We assist you in every step while preparing this documents.”",
    rating: "5",
  },
  {
    picture: "/images/icons/user-avatar.png",
    name: "Steve Rogers",
    country: "USA",
    message:
      "“Our expert team, checks every application & essay before submitting. We assist you in every step while preparing this documents.”",
    rating: "5",
  },
  {
    picture: "/images/icons/user-avatar.png",
    name: "Steve Rogers",
    country: "USA",
    message:
      "“Our expert team, checks every application & essay before submitting. We assist you in every step while preparing this documents.”",
    rating: "5",
  },
  {
    picture: "/images/icons/user-avatar.png",
    name: "Steve Rogers",
    country: "USA",
    message:
      "“Our expert team, checks every application & essay before submitting. We assist you in every step while preparing this documents.”",
    rating: "5",
  },
  {
    picture: "/images/icons/user-avatar.png",
    name: "Steve Rogers",
    country: "USA",
    message:
      "“Our expert team, checks every application & essay before submitting. We assist you in every step while preparing this documents.”",
    rating: "5",
  },
  {
    picture: "/images/icons/user-avatar.png",
    name: "Steve Rogers",
    country: "USA",
    message:
      "“Our expert team, checks every application & essay before submitting. We assist you in every step while preparing this documents.”",
    rating: "5",
  },
  {
    picture: "/images/icons/user-avatar.png",
    name: "Steve Rogers",
    country: "USA",
    message:
      "“Our expert team, checks every application & essay before submitting. We assist you in every step while preparing this documents.”",
    rating: "5",
  },
  {
    picture: "/images/icons/user-avatar.png",
    name: "Steve Rogers",
    country: "USA",
    message:
      "“Our expert team, checks every application & essay before submitting. We assist you in every step while preparing this documents.”",
    rating: "5",
  },
];
const ReviewCarousel = () => {
  const settings = {
    infinite: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    autoplay: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          autoplay: false,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          autoplay: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
        },
      },
    ],
  };
  return (
    <div className="my-4">
      <Slider {...settings}>
        {testimonialData?.map((item: any, i: any) => {
          return (
            <TestimonialCard
              classes={{ root: "mr-3 lg:m-[15px] p-5 lg:p-[50px]" }}
              key={i}
              data={item}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default ReviewCarousel;
