import { htmlParse } from "@/helpers/utils";
import Image from "next/image";
import React from "react";

interface propTypes {
  id?: string;
  data?: any;
}

const ProgramAbout = ({ id, data }: propTypes) => {
  return (
    <>
      {data?.description ? (
        <div id={id} className="from_texteditor_wrapper mb-8">
          <h3 className="border-b h5 pb-4">{data?.displayName}</h3>
          <div className="line-clamp-3">{htmlParse(data?.description)}</div>

          {data?.featureImage ? (
            <Image
              src={data?.featureImage}
              alt={data?.displayName}
              width={900}
              height={400}
              className="mt-5"
            />
          ) : null}
        </div>
      ) : null}
    </>
  );
};

export default ProgramAbout;
