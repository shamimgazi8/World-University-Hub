import { excerpt } from "@/helpers/utils";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { SlCalender } from "react-icons/sl";

interface propTypes {
  style?: any;
  classes?: {
    root?: string;
    title?: string;
    imageWrapper?: string;
    imageStyle?: string;
    category?: string;
    description?: string;
    descStyle?: string;
    tag?: string;
    date?: string;
    cardBody?: string;
    titleStyle?: string;
    line?: string;
    extraDesc?: string;
  };
  data?: any;
  isExtraDescription?: boolean;
  isDescTopTrue?: boolean;
}

const BlogCardTwo = ({
  style,
  classes,
  data,
  isExtraDescription = false,
}: propTypes) => {
  const link = `/blog/${data?.slug}`;
  const cat = data?.categories?.length > 0 && data?.categories[0];
  const catLink = `/blog/category/${cat?.slug}`;
  const desc = data?.shortDescription
    ? data?.shortDescription
    : data?.description
    ? excerpt(data?.description, 400)
    : "";

  return (
    <>
      {isExtraDescription && (
        <div className="w-full h-[1px] border-b my-[21px]"></div>
      )}
      <>
        <div
          style={style}
          className={`h-full group    ${classes?.root ? classes?.root : ""}`}
        >
          <Link
            href={link}
            className={`block w-full ${
              classes?.imageWrapper ? classes.imageWrapper : ""
            }  `}
          >
            <Image
              src={data?.featuredImage || "/misc/placeholder-blog.webp"}
              width={960}
              height={540}
              alt="Testimonial"
              className={`object-cover w-full  ${
                classes?.imageStyle ? classes.imageStyle : ""
              }`}
            />
          </Link>
          <div className={` ${classes?.cardBody ? classes.cardBody : ""}`}>
            {cat && (
              <Link
                href={catLink}
                className={`inline-block px-1 rounded transition-all ${
                  classes?.category ? classes.category : ""
                }`}
              >
                {cat?.name}
              </Link>
            )}

            {data?.title && (
              <Link href={link}>
                <h3
                  className={`group/blogtitle justify-center items-center  ${
                    classes?.title ? classes.title : ""
                  }`}
                >
                  {cat?.name && (
                    <span
                      className={`hidden text-white bg-tertiary px-1 hover:text-white rounded transition-all mr-2 ${
                        classes?.tag ? classes.tag : ""
                      }`}
                    >
                      {cat?.name}
                    </span>
                  )}
                  <span
                    className={`group-hover:text-gradient transition-all ${
                      classes?.titleStyle ? classes.titleStyle : ""
                    }`}
                  >
                    {data?.title}
                  </span>
                </h3>
              </Link>
            )}

            {desc && (
              <Link
                href={link}
                className={` hover:text-inherit ${
                  classes?.description ? classes.description : ""
                }`}
              >
                <p
                  className={` ${
                    classes?.description ? classes.description : ""
                  }`}
                >
                  <span
                    className={`${classes?.descStyle ? classes.descStyle : ""}`}
                  >
                    {desc}
                  </span>
                </p>
              </Link>
            )}
            <div className="h-full mt-auto">
              {data?.publishedAt && (
                <Link className="hover:text-inherit mt-auto" href={link}>
                  <span
                    className={`font-medium flex items-center gap-2 ${
                      classes?.date ? classes.date : ""
                    }`}
                  >
                    <SlCalender className=" bg-[#22343C] text-white" />
                    {moment(data?.publishedAt).format("LL")}
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>

        {isExtraDescription && (
          <>
            {desc && (
              <Link href={link} className="block hover:text-inherit ">
                <p
                  className={`line-clamp-2 mb-0   ${
                    classes?.extraDesc ? classes.extraDesc : ""
                  }`}
                >
                  {desc}
                </p>
              </Link>
            )}
          </>
        )}
      </>
    </>
  );
};

export default BlogCardTwo;
