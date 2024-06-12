import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

interface propTypes {
  data: any;
  classes?: {
    root?: string;
    link?: string;
    last?: string;
  };
}
const truncateTo20Words = (text: any) => {
  if (!text) return "";
  const words = text.split(" ");
  return words.length > 8 ? words.slice(0, 8).join(" ") + "..." : text;
};

const Breadcrumbs = ({ data, classes }: propTypes) => {
  return (
    <ul
      className={`flex items-center gap-3 text-sm whitespace-nowrap overflow-x-auto	 ${
        classes?.root ? classes?.root : ""
      }`}
    >
      {data?.map((item: any, i: number) => {
        const last = data[data?.length - 1];
        if (data?.length - 1 == i) {
          return (
            <li
              key={i}
              className={`font-medium text-black ${
                item?.elipsis ? item?.elipsis : ""
              } ${classes?.last ? classes.last : ""}`}
            >
              <span>{truncateTo20Words(last?.title)}</span>
            </li>
          );
        } else {
          return (
            <li key={i}>
              <Link
                href={item?.link || "#"}
                className={`inline-flex items-center gap-3 hover:text-gradient ${
                  item?.elipsis ? item?.elipsis : ""
                } ${classes?.link ? classes?.link : ""}`}
              >
                <span>{item?.title}</span>
                <FiChevronRight />
              </Link>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default Breadcrumbs;
