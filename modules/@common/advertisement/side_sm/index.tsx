"use client";
import addArray from "@/data/ad_array_sidesm.json";
import { getRandomIndex } from "@/helpers/utils";
import { useEffect, useState } from "react";
import Advertisement from "..";

interface propTypes {
  className?: string;
}

const AdvertisementSideSm = ({ className }: propTypes) => {
  const [randomIndex, setRandomIndex] = useState(1);

  // const randomIndex = getRandomIndex(addArray);
  const randomElement = addArray[randomIndex];

  useEffect(() => {
    setRandomIndex(getRandomIndex(addArray));
  }, []);

  return (
    <Advertisement
      className={className}
      width={300}
      height={250}
      src={randomElement.src}
      url={randomElement.url}
    />
  );
};

export default AdvertisementSideSm;
