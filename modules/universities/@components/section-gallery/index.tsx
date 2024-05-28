import { useGetUniversityGalleryQuery } from "@/appstore/university/university-api";
import { generateQueryString, shuffledArray } from "@/helpers/utils";
import Skeleton from "@/modules/@common/skeleton";
import Image from "next/image";
import Slider from "react-slick";

interface propTypes {
  universitySlug: string;
  id?: string;
  className?: string;
}

const SectionUniversityGallery = ({
  id,
  className,
  universitySlug,
}: propTypes) => {
  const queryString = generateQueryString({ uniSlug: universitySlug });
  const { data, isLoading, isError } =
    useGetUniversityGalleryQuery(queryString);
  const dataArr1 = data && data?.data;
  const dataArr = dataArr1 && shuffledArray([...dataArr1]);
  const len = data && dataArr?.length;

  const settings = {
    slidesToShow: len < 3 ? len : 3,
    slidesToScroll: 3,
    dots: false,
    arrow: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrow: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrow: true,
        },
      },
    ],
  };
  return (
    <>
      {!isError && isLoading ? (
        <section>
          <div className="grid grid-cols-3 gap-5">
            {new Array(3).fill(1).map((_, i) => {
              return <Skeleton key={i} className="h-[230px]" />;
            })}
          </div>
        </section>
      ) : (
        <>
          {len > 1 && (
            <section id={id} className={`pb-0 ${className ? className : ""}`}>
              <div className="border-b mb-5">
                <h3 className="h5">Gallery</h3>
              </div>
              <Slider {...settings}>
                {dataArr?.map((glry: any, i: any) => {
                  let src = "";
                  if (glry?.linkType === "YOUTUBE") {
                    src = `https://www.youtube.com/embed/${
                      glry?.link?.split("v=")[1]
                    }`;
                  } else if (glry?.linkType === "VIMEO") {
                    src = `https://player.vimeo.com/video/${
                      glry?.link?.split(".com/")[1]
                    }`;
                  }
                  return (
                    <div key={i} className="px-3">
                      {glry?.type === "VIDEO" ? (
                        <iframe
                          className={`w-full h-[200px] rounded-lg aspect-video ${
                            glry?.linkType == "VIMEO"
                              ? "bg-[rgba(0,0,0,0.8)]"
                              : ""
                          }`}
                          src={src}
                        ></iframe>
                      ) : (
                        <Image
                          src={`${glry?.source}`}
                          width={350}
                          height={200}
                          alt="Testimonial"
                          className="object-cover h-[200px] w-full rounded-md"
                        />
                      )}
                    </div>
                  );
                })}
              </Slider>
            </section>
          )}
        </>
      )}
    </>
  );
};

export default SectionUniversityGallery;
