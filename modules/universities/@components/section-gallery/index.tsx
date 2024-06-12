import { useGetUniversityGalleryQuery } from "@/appstore/university/university-api";
import { generateQueryString, shuffledArray } from "@/helpers/utils";
import Skeleton from "@/modules/@common/skeleton";
import Image from "next/image";
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
                <h3 className="h5">Videos & media</h3>
              </div>
              <div className=" grid grid-cols-4 gap-5">
                {dataArr?.map((glry: any, i: any) => {
                  let src = "";
                  if (glry?.linkType === "YOUTUBE") {
                    src = `https://www.youtube.com/embed/${glry?.link}`;
                  } else if (glry?.linkType === "VIMEO") {
                    src = `https://player.vimeo.com/video/${
                      glry?.link?.split(".com/")[1]
                    }`;
                  }
                  return (
                    <div
                      key={i}
                      className={` grid  ${
                        i > 0 ? "col-span-1" : "col-span-4"
                      }`}
                    >
                      {glry?.type === "VIDEO" ? (
                        <iframe
                          className={`object-cover ${
                            i != 0 ? "h-[113px]" : "h-[500px]"
                          }  w-full rounded-md`}
                          width="560"
                          height="315"
                          src={`https://www.youtube.com/embed/${glry?.source}`}
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      ) : (
                        <Image
                          src={`${glry?.source}`}
                          width={350}
                          height={500}
                          alt="Testimonial"
                          className={`object-cover ${
                            i != 0 ? "h-[113px]" : "h-[500px]"
                          }  w-full rounded-md`}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
};

export default SectionUniversityGallery;
