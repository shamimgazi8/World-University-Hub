"use client";

import useWindowDimensions from "@/hooks/use-window-dimensions";
import Advertisement from "..";
import { getRandomIndex } from "@/helpers/utils";
import addArray from "@/data/ad_array.json";
import addArray2 from "@/data/ad_array_leftside.json";
import { useEffect, useState } from "react";

interface propTypes {
  isSticky?: boolean;
}

const AdvertisementLeftSide = ({ isSticky = true }: propTypes) => {
  const { width } = useWindowDimensions();
  const isMobile = width < 1024;
  const [randomIndex2, setRandomIndex2] = useState(1);
  const [randomIndex, setRandomIndex] = useState(1);

  // const randomIndex2 = getRandomIndex(addArray2);
  const randomElement2 = addArray2[randomIndex2];

  // const randomIndex = getRandomIndex(addArray);
  const randomElement = addArray[randomIndex];

  useEffect(() => {
    setRandomIndex2(getRandomIndex(addArray2));
    setRandomIndex(getRandomIndex(addArray));
  }, []);

  return (
    <div
      className={`${
        isSticky
          ? "lg:sticky lg:top-[72px] lg:self-start overflow-auto scrollbar show_hide max-h-[calc(100vh-72px)]"
          : ""
      } `}
    >
      {!isMobile ? (
        <Advertisement
          width={190}
          height={600}
          src={randomElement2.src}
          url={randomElement2.url}
        />
      ) : (
        <Advertisement
          width={730}
          height={90}
          src={randomElement.src}
          url={randomElement.url}
        />
      )}
    </div>
  );
};

export default AdvertisementLeftSide;
