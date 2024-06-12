import BlogCatList from "./cat-list";
import Breadcrumbs from "@/modules/@common/breadcrumbs";
import BlogCardTwo from "../@components/blog-card-two";

const BlogCategory = ({ data, catSlug, total, excludeBlogIds }: any) => {
  const dataSingle = data && data[0];
  const catName = dataSingle?.categories?.find(
    (item: any) => item.slug == catSlug
  );

  const dataBreadcrumbs = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Blog",
      link: "/blog",
    },
    {
      title: `${catName?.name}`,
    },
  ];

  return (
    <>
      {data && data?.length > 0 ? (
        <>
          <section className="pt-6 lg:pt-[42px] pb-[40px] bg-[#F8F9FD]">
            <div className="container">
              <Breadcrumbs
                data={dataBreadcrumbs}
                classes={{ root: " mb-[26px]" }}
              />
              <h1 className="h2 font-semibold capitalize mb-0">
                {catName?.name}
              </h1>
              <div className=" grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-8 grid-rows-2 gap-5 lg:gap-x-[30px] lg:gap-y-[16px] pt-[40px]">
                {data?.map((item: any, i: any) => {
                  const isFeature = i == 0;
                  return (
                    <BlogCardTwo
                      key={i}
                      data={item}
                      classes={{
                        root: `self-start ${
                          isFeature
                            ? " col-span-4 row-span-2 "
                            : "lg:col-span-2 col-span-4 "
                        }`,
                        imageWrapper: isFeature
                          ? "!mb-0 lg:!h-[360px] !h-[210px]"
                          : "!mb-0 lg:!h-[171px] !h-[210px]",
                        imageStyle: "!mb-0 !h-full object-cover",
                        category: ` text-[#3378FE] font-medium  ${
                          isFeature ? "text-c3" : "text-c5"
                        }`,
                        tag: "!hidden",
                        title: `!line-clamp-2 leading-[1.3]    ${
                          isFeature
                            ? "lg:text-h2-sm text-h5 !mb-4 mt-2 "
                            : " lg:text-c2 text-h5  mt-[8px] !mb-0"
                        }`,
                        description: isFeature
                          ? " text-p3 mb-4 !line-clamp-2"
                          : "hidden",
                        date: isFeature
                          ? "text-p3"
                          : "lg:text-p5 text-[8px] mt-2 ",
                        cardBody: `bg-white  border-b-[1px] border-l-[1px] border-r-[1px] border-[#E7E7E7] p-4 rounded-b-[6px] ${
                          isFeature ? "!p-6" : ""
                        }`,
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </section>
          <div className=" pt-[60px]">
            <BlogCatList
              total={total}
              catSlug={catSlug}
              catName={catName?.name}
              excludeBlogIds={excludeBlogIds}
            />
          </div>
        </>
      ) : (
        <section>
          <div className="container">
            <div className="text-center my-10">No Data Found</div>
          </div>
        </section>
      )}
    </>
  );
};

export default BlogCategory;
