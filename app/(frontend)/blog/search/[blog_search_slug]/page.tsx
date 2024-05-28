import AdvertisementLeftSide from "@/modules/@common/advertisement/left_side";
import PaginationComponent from "@/modules/@common/pagination";
import BlogCardTwo from "@/modules/blog/@components/blog-card-two";
import BlogRightSideTwo from "@/modules/blog/@components/right-side-two";

const apiUrl = process.env.NEXT_PUBLIC_API_URI;

async function getData(searchSlug: string, limit: number, page: number) {
  try {
    const response = await fetch(
      `${apiUrl}/public/blog?searchKeyword=${searchSlug}&limit=${limit}&page=${page}`,
      {
        method: "GET",
        headers: { Accept: "application/json" },
        cache: "no-store",
      }
    );

    if (response.status >= 200 && response.status <= 299) {
      return response.json();
    }
    if (response.status == 502) {
      const error = response.json();
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

const BlogSearchPage = async ({ params, searchParams }: any) => {
  const limit = 10;
  const page = parseInt(searchParams?.page ?? 1);
  const searchSlug = params.blog_search_slug;
  const data = await getData(searchSlug, limit, page);

  const dataArray = data?.data;
  const total = data && data?.totalCount;
  return (
    <section className="">
      <div className=" bg-[#F8F9FD] py-[40px] flex flex-col justify-center items-center gap-[8px]">
        <h1 className=" text-h2-md mb-0">{searchSlug}</h1>
        <p className=" mb-0 p2">{total} result found</p>
      </div>
      <div>
        <div className="container">
          <div className=" grid lg:grid-cols-[1fr_640px_386px] gap-[30px]  mt-[21px]">
            <div>
              <AdvertisementLeftSide />
            </div>
            <div className="flex flex-col gap-[1px]">
              {dataArray.length > 0 ? (
                dataArray?.map((data: any, i: any) => {
                  return (
                    <>
                      <div key={i}>
                        <BlogCardTwo
                          key={i}
                          data={data}
                          classes={{
                            root: "grid grid-cols-[1fr_1fr] lg:grid-cols-[230px_1fr] gap-[16px] items-center ",
                            imageWrapper: "!mb-0 lg:!h-[130px] lg:!w-[230px] ",
                            imageStyle: "!mb-0 !h-full object-cover ",
                            category:
                              "text-c5 text-[#3378FE]   decoration-1 hover:underline hover:underline-offset-2 hover:text-tertiary ",
                            tag: "hidden",
                            title:
                              " self-start leading-6 lg:text-[20px] text-[16px] line-clamp-2 mt-[6px] lg:mb-3 mb-1 font-semibold line-clamp-2",
                            description:
                              "lg:!block mb-0 text-p3 self-start !leading-[1.3] lg:visible hidden",
                            descStyle: "line-clamp-2 self-start",
                            date: "hidden ",
                          }}
                        />
                      </div>
                      {dataArray?.length > i + 1 && (
                        <div className="w-full h-[1px] border-b my-[24px]"></div>
                      )}
                    </>
                  );
                })
              ) : (
                <div className=" w-full text-center mt-5">
                  <h1>NO DATA FOUND</h1>
                </div>
              )}

              <div className="mt-6 lg:mt-10">
                {total > limit ? (
                  <div className="mt-6 lg:mt-10">
                    <PaginationComponent
                      fromServerSide={true}
                      redirectUrl={`/blog/search/${searchSlug}`}
                      // onChange={onChange}
                      total={total}
                      page={page}
                      limit={limit}
                    />
                  </div>
                ) : null}
              </div>
            </div>
            <div>
              <BlogRightSideTwo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // return <BlogSearch data={dataArray} searchSlug={searchSlug} total={total} />;
};

export default BlogSearchPage;
