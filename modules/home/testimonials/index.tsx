"use client";

import Slider from "react-slick";
import TestimonialCard from "../../@common/testimonial-card";

const testimonialData = [
  {
    picture: "/misc/avatar-lg.png",
    name: "Steve Rogers",
    country: "USA",
    message:
      "“Our expert team, checks every application & essay before submitting. We assist you in every step while preparing this documents.”",
    rating: "5",
  },
  {
    picture: "/misc/avatar-lg.png",
    name: "Steve Rogers",
    country: "USA",
    message:
      "“Our expert team, checks every application & essay before submitting. We assist you in every step while preparing this documents.”",
    rating: "5",
  },
  {
    picture: "/misc/avatar-lg.png",
    name: "Steve Rogers",
    country: "USA",
    message:
      "“Our expert team, checks every application & essay before submitting. We assist you in every step while preparing this documents.”",
    rating: "5",
  },
  {
    picture: "/misc/avatar-lg.png",
    name: "Steve Rogers",
    country: "USA",
    message:
      "“Our expert team, checks every application & essay before submitting. We assist you in every step while preparing this documents.”",
    rating: "5",
  },
  {
    picture: "/misc/avatar-lg.png",
    name: "Steve Rogers",
    country: "USA",
    message:
      "“Our expert team, checks every application & essay before submitting. We assist you in every step while preparing this documents.”",
    rating: "5",
  },
  {
    picture: "/misc/avatar-lg.png",
    name: "Steve Rogers",
    country: "USA",
    message:
      "“Our expert team, checks every application & essay before submitting. We assist you in every step while preparing this documents. Our expert team, checks every application & essay before submitting. We assist you in every step while preparing this documents.”",
    rating: "5",
  },
];

interface propTypes {
  classes?: any;
}

const Testimonials = ({ classes }: propTypes) => {
  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
        },
      },
    ],
  };
  return (
    <>
      <section
        className={`pt-8 lg:pt-[70px] pb-[80px] lg:pb-[120px] overflow-hidden bg-gradient-to-b from-primary-light to-secondary-light ${
          classes?.root ? classes?.root : ""
        }`}
      >
        <div className="container">
          <div className="wrapper-small">
            <h2 className="text-center">Reviews</h2>
            <Slider {...settings}>
              {testimonialData?.map((item: any, i: any) => {
                return (
                  <TestimonialCard
                    key={i}
                    classes={{ root: "mx-5 sm:mx-4" }}
                    data={item}
                  />
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
