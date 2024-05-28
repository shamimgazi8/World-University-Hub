import Image from "next/image";
import React, { useState } from "react";

const TempComp = () => {
  const [isHovered, setIsHovered] = useState(false);
  const onMouseEnterHandler = () => {
    setIsHovered(true);
  };
  const onMouseLeaveHandler = () => {
    setIsHovered(false);
  };
  return (
    <a
      rel="nofollow"
      href="#"
      target="_blank"
      // className={`${classes?.link ? classes.link : ""}`}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      {isHovered ? (
        <Image alt="test" src="/temp/ic_youtube.png" width={30} height={30} />
      ) : (
        <Image alt="test" src="/temp/ic_mail.png" width={30} height={30} />
      )}
    </a>
  );
};

export default TempComp;
