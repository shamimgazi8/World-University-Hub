import { useGetUniversityRankingQuery } from "@/appstore/university/university-api";
import { generateQueryString } from "@/helpers/utils";
import { Tooltip } from "antd";
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

const ShowRanking = ({
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

  // console.log({ bigYear });
  // console.log({ smallYear });

  // const uniRankData = [];
  // for (let index = bi; index <= sma; index++) {
  //   uniRankData.push({ year: bigYear - index });
  // }

  const Detail = ({ data }: any) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 shadow-one p-3 mt-[40px]">
        {data?.name && (
          <a
            rel="nofollow"
            target="_blank"
            href={data?.website}
            className="grid items-center grid-cols-[40px_1fr] gap-2 font-semibold group"
          >
            <Image
              src={data?.logoSource || "/misc/image-placeholder-big.webp"}
              alt={data?.name}
              width={30}
              height={30}
              className="rounded w-[30px] h-[30px] object-contain mr-[6px]"
            />
            <span className="w-max group-hover:text-gradient text-black">
              {data?.name}
            </span>
          </a>
        )}
        <div className="grid grid-cols-3 items-end">
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
              <div className="flex justify-between items-center mt-[40px]">
                <h4 className="h5 mb-0">World University Ranking</h4>
              </div>
              <div className="grid grid-cols-1">
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
              className={`lg:flex grid gap-2 lg:gap-0 grid-cols-2 xsm:grid-cols-4 md:grid-cols-5   ${
                className?.root ? className?.root : ""
              }`}
            >
              {dataArr?.map((item: any, i: number) => {
                const uniRank = item && item?.uniRanking[0];
                console.log(item, "item tooltip");

                return (
                  <Tooltip
                    color={"white"}
                    title={
                      <div className=" text-black font-semibold">
                        {uniRank?.year}
                      </div>
                    }
                  >
                    <div
                      key={i}
                      className={`flex mr-[20px] pr-[20px] cursor-pointer  ${
                        i + 1 < dataArr?.length
                          ? " border-r-[1px]"
                          : "border-r-[1px] lg:border-r-[0px]"
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
                        <span className="lg:text-h6 text-c3 mb-0 block text-white font-medium ">
                          {uniRank?.rankDisplay}
                        </span>
                      </div>
                    </div>
                  </Tooltip>
                );
              })}
            </div>
          ) : null}
        </>
      )}
    </div>
  );
};

export default ShowRanking;
