import { htmlParse } from "@/helpers/utils";
import { useState } from "react";

interface propTypes {
  data?: any;
  id?: string;
  className?: string;
}

const CourseOverviewDescription = ({ id, className, data }: propTypes) => {
  const [readmore, setReadmore] = useState(false);
  return (
    <>
      {data?.description ? (
        <section id={id} className={`pb-0 ${className ? className : ""}`}>
          <h2 className="h5 pb-4 mb-0">Program Overview</h2>
          <div
            className={`from_texteditor_wrapper ${
              readmore ? "" : "line-clamp-3 "
            }mb-0`}
          >
            {htmlParse(data?.description)}
          </div>
          <span
            onClick={() => {
              setReadmore(!readmore);
            }}
            className=" cursor-pointer text-gradient text-[18px] mt-[10px]"
          >
            {!readmore ? " Read more" : "Show Less"}
          </span>
        </section>
      ) : null}
    </>
  );
};

export default CourseOverviewDescription;
