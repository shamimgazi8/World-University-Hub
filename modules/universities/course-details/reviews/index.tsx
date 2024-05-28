import TestimonialCard from "@/modules/@common/testimonial-card";
import Slider from "react-slick";
import dataReview from "@/data/temp-data-review.json";

interface propTypes {
  universitySlug: string;
}

const ProgramReviews = ({ universitySlug }: propTypes) => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="program_reviews" className="pb-8">
      <div className="border-b mb-5">
        <h3 className="h5">Reviews</h3>
      </div>
      <Slider {...settings}>
        {dataReview?.map((item: any, i: any) => {
          return (
            <TestimonialCard
              key={i}
              data={item}
              classes={{ root: "border m-3" }}
            />
          );
        })}
      </Slider>
    </section>
  );
};

export default ProgramReviews;
