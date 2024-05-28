import { useGetJobTypeQuery } from "@/appstore/job/job-api";
import { generateQueryString } from "@/helpers/utils";
import Skeleton from "@/modules/@common/skeleton";
import Link from "next/link";

const JobType = () => {
  const childLimit = 5;
  const queryParams: any = {
    childLimit,
    page: 1,
    limit: 100,
  };
  const queryString = generateQueryString(queryParams);
  const { data, isLoading, isError } = useGetJobTypeQuery(queryString);

  return (
    <>
      {isLoading && !isError ? (
        <div className="bg-white">
          <div className="gap-[15px] p-4 ">
            <div className="mb-[15px] h-[280px]">
              {new Array(11).fill(1).map((_, i) => {
                return (
                  <Skeleton key={i} className={"h-[20px] rounded-lg mb-2"} />
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white">
          <div className="gap-[15px] p-4 columns-3">
            {data?.data?.map((item: any, i: any) => {
              return (
                <div key={i} className="mb-[15px]">
                  <Link
                    href={`/jobs/search?jobtypeSlug=${item?.slug}`}
                    className="mb-0 font-medium text-heading"
                  >
                    {item?.name}
                  </Link>

                  <ul className="flex flex-col gap-1">
                    {item?.children?.map((childItem: any, i: any) => {
                      return (
                        <li key={i}>
                          <Link
                            href={`/jobs/search?jobtypeSlug=${childItem?.slug}`}
                            className="block"
                            key={i}
                          >
                            {childItem?.name}
                          </Link>
                        </li>
                      );
                    })}
                    {item?.children?.length >= childLimit && (
                      <li key={i}>
                        <Link
                          href={`/jobs/search?jobtypeSlug=${item?.slug}`}
                          className="block"
                          key={i}
                        >
                          More...
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default JobType;
