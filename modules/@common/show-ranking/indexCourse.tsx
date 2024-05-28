import { useGetUniversityRankingQuery } from "@/appstore/university/university-api";
import { generateQueryString } from "@/helpers/utils";
import Image from "next/image";

interface propTypes {
  universitySlug: string;
  isDetail?: boolean;
  id?: string;
  className?: {
    root?: string;
    rootDetail?: string;
    content_wrapper?: string;
    text_color?: string;
  };
}

const ShowRankingCourse = ({
  id,
  className,
  universitySlug,
  isDetail = false,
}: propTypes) => {
  const queryString = generateQueryString({
    uniSlug: universitySlug,
  });
  const { data, isLoading, isError } =
    useGetUniversityRankingQuery(queryString);
  const dataArr = data && data?.data;
  const len = data && dataArr?.length;

  let rnk: any = [];
  dataArr?.map((d: any) => rnk.push(d.uniRanking));
  const sortData = rnk.flat().sort((a: any, b: any) => b.year - a.year);
  const bigYear = sortData[0]?.year;
  const smallYear = sortData[sortData.length - 1]?.year;

  const Detail = ({ data }: any) => {
    return (
      <div className="grid  gap-2 md:gap-4  p-3 border-b  ">
        <div className="grid grid-cols-3 items-end  ">
          {data?.uniRanking?.slice(0, 3)?.map((rank: any, i: number) => {
            return (
              <div
                key={i}
                className={`gap-1 w-full relative border-r last:border-0 text-center`}
              >
                <span className="block text-[12px]">{rank?.year}</span>
                <span className="block h6 text-gradient font-medium text-lg m-0">
                  {rank.rankDisplay}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div>
      {isDetail ? (
        <>
          {dataArr?.length > 0 ? (
            <section
              id={id}
              className={`pb-8 ${
                className?.rootDetail ? className?.rootDetail : ""
              }`}
            >
              <div className="flex justify-between items-center mb-[20px] mt-[40px]">
                <h4 className="h5 mb-0">Rankings & ratings</h4>
              </div>
              <div className="grid grid-cols-1 border">
                {dataArr?.map((item: any, i: number) => {
                  return <Detail key={i} data={item} />;
                })}
              </div>
            </section>
          ) : null}
        </>
      ) : (
        <>
          {dataArr?.length > 0 ? (
            <div
              className={`lg:flex lg:grid gap-2 lg:gap-0 grid-cols-2 xsm:grid-cols-4 md:grid-cols-5   pt-5 ${
                className?.root ? className?.root : ""
              }`}
            >
              {dataArr?.map((item: any, i: number) => {
                const uniRank = item && item?.uniRanking[0];
                return (
                  <div
                    key={i}
                    className={`flex mr-[20px] pr-[20px]  ${
                      i + 1 < dataArr?.length ? " border-r-[1px]" : ""
                    }  ${
                      className?.content_wrapper
                        ? className?.content_wrapper
                        : ""
                    }`}
                  >
                    <Image
                      src={
                        item?.logoSource || "/misc/image-placeholder-big.webp"
                      }
                      alt={item?.name}
                      width={20}
                      height={20}
                      className="rounded object-cover shrink-0 mr-[6px]"
                    />
                    <div
                      className={` flex gap-[6px] mt-[-3px] text-white ${
                        className?.text_color ? className?.text_color : ""
                      }`}
                    >
                      <span>{item?.shortName}</span>
                      <span className="h6 mb-0 block text-white font-medium text-lg">
                        {uniRank?.rankDisplay}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : null}
        </>
      )}
    </div>
  );
};

export default ShowRankingCourse;
