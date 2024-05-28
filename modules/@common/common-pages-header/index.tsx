import { htmlParse } from "@/helpers/utils";
import React from "react";

interface propsTypes {
  classes?: {
    root?: any;
    title?: any;
    description?: any;
  };
  title?: any;
  description?: any;
}
const CommonPageHeader = ({ classes, description, title }: propsTypes) => {
  return (
    <section
      className={`bg-gradient-to-b from-primary-light to-secondary-light py-[40px] lg:py-[80px] mb-6 lg:mb-[40px] ${
        classes?.root ? classes.root : ""
      }`}
    >
      <div className="container">
        <div className="max-w-[860px] w-full mx-auto">
          <h2 className={`text-center ${classes?.title ? classes.title : ""}`}>
            {title}
          </h2>
          {description && (
            <p className={`${classes?.description ? classes.description : ""}`}>
              {htmlParse(description)}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CommonPageHeader;
