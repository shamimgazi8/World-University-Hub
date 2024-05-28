import SectionBlog from "@/modules/@common/section-blog";
import Image from "next/image";
import BlogDetailsSegment from "../@components/blog-details-segment";
import moment from "moment";
import Breadcrumbs from "@/modules/@common/breadcrumbs";
import Link from "next/link";
import { FaUserLarge } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { MdModeComment } from "react-icons/md";
import { IoTimeSharp } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { BsFillCalendarDateFill } from "react-icons/bs";

const BlogDetails = ({ data }: any) => {
  const catName =
    data &&
    data?.categories &&
    data.categories.length > 0 &&
    data?.categories[0]?.name;
  const catSlug =
    data &&
    data?.categories &&
    data.categories.length > 0 &&
    data?.categories[0]?.slug;
  const author = data && data?.author;

  const dataBreadcrumbs = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: `${catName}`,
      link: `/blog/category/${catSlug}`,
    },
    {
      title: `${data?.title}`,
    },
  ];
  return (
    <>
      {!data ? (
        <section>
          <div className="container">
            <div className="text-center my-10">No Data Found</div>
          </div>
        </section>
      ) : (
        <>
          {/* hero */}
          <section className={`py-[80px]  bg-grey`}>
            <div className="container">
              <div className="wrapper-small">
                <div className="max-w-[860px] w-full mx-auto text-center ">
                  <Breadcrumbs
                    data={dataBreadcrumbs}
                    classes={{ root: "lg:justify-center mb-[20px]" }}
                  />
                  <p className=" mb-[10px] text-[#3378FE] text-p3 font-medium">
                    {catName}{" "}
                  </p>
                  <h1 className="h2 lg:leading-[60px] mb-[20px]">
                    {data?.title}
                  </h1>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-[16px] sm:gap-[15px] ">
                    <div className="flex items-center justify-center gap-[10px]">
                      <BsFillCalendarDateFill className=" text-gradiant  text-primary" />
                      {data?.publishedAt && (
                        <div className="mb-0 text-p3 font-medium">
                          <span className="">
                            {moment(data?.publishedAt).format("Do MMMM, YYYY")}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="w-[1px] h-[20px] bg-[#777777] hidden sm:block"></div>
                    {author ? (
                      <>
                        <Link
                          href={`/author/${author?.userName}`}
                          className="flex items-center gap-[10px]"
                        >
                          <FaUserLarge className="text-gradient text-primary" />

                          <p className="mb-0 text-p3 font-medium">
                            <span>
                              {author?.firstName} {author?.lastName}
                            </span>
                          </p>
                        </Link>
                      </>
                    ) : null}
                    <div className="w-[1px] h-[20px] bg-[#777777] hidden sm:block"></div>
                    <div className="flex items-center justify-center gap-[10px]">
                      <MdModeComment className=" text-gradiant text-primary" />
                      {data?.publishedAt && (
                        <div className="mb-0 text-p3 font-medium">
                          <span className="">{data?.commentcount | 0}</span>
                        </div>
                      )}
                    </div>
                    <div className="w-[1px] h-[20px] bg-[#777777] hidden sm:block"></div>
                    <div className="flex items-center justify-center gap-[10px]">
                      <IoMdEye className=" text-gradiant text-[18px] text-primary" />
                      {data?.viewCount && (
                        <div className="mb-0 text-p3 font-medium">
                          <span className="">
                            {data?.viewCount > 1000
                              ? `${data?.viewCount / 1000}K`
                              : data?.viewCount}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="w-[1px] h-[20px] bg-[#777777] hidden sm:block"></div>
                    <div className="flex items-center justify-center gap-[10px]">
                      <IoTimeSharp className=" text-gradiant text-[18px] text-primary" />
                      {data?.publishedAt && (
                        <div className="mb-0 text-p3 font-medium">
                          <span className="">
                            {data?.commentcount | 10} Min Read
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <BlogDetailsSegment data={data} />
          {/* <SectionBlog
            title="More Blogs"
            classes={{ root: "!bg-grey pt-8 lg:pt-[60px]", title: "h3" }}
          /> */}
        </>
      )}
    </>
  );
};

export default BlogDetails;
