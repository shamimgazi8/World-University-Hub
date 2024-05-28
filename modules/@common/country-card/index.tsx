import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./country_card.module.scss";
import { FiArrowRight } from "react-icons/fi";

interface propTypes {
  data?: any;
  classes?: {
    root?: string;
    overlay?: string;
  };
}

const CountryCard = ({ data, classes }: propTypes) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${
        styles.card
      } relative cursor-pointer flex flex-col rounded-lg overflow-hidden ${
        classes?.root ? classes.root : ""
      }`}
    >
      <div className="h-[380px]">
        <Image
          src={`${data?.featureImage}`}
          alt={data?.name}
          width={350}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className={`absolute z-10 w-full h-full left-0 top-0 ${styles.gradient}`}
        style={{
          background: isHovered ? data?.hoverBackground : "",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`absolute z-20 w-full  p-8 bottom-0 left-0 text-white ${styles.content}`}
        >
          <Image
            src="/images/country/country-pin.png"
            alt="map pin"
            width={28}
            height={28}
            className={`mb-2 ${styles.map_pin}`}
          />
          <span className="block font-medium">Study in</span>
          <span className="block font-semibold h4 text-white mb-2">
            {data?.name}
          </span>

          <div className={`text-white flex flex-col gap-2 ${styles.links}`}>
            <Link
              href={`/study-abroad/${data?.region?.slug}/${data?.slug}`}
              className="flex items-center group/conlink text-lg hover:text-inherit gap-3 border-b-transparent border-b-2 hover:border-b-2 hover:border-inherit transition-all ease-in duration-300"
            >
              <span className="shrink-0">Country Guide</span>
              <div className="w-full h-[30px] relative">
                <FiArrowRight className="left-0 top-[8px] absolute group-hover/conlink:left-[calc(100%-15px)] transition-all duration-300" />
              </div>
            </Link>

            <Link
              href={`/${data?.slug}-top-programs`}
              className="flex items-center group/conlink text-lg hover:text-inherit gap-3 border-b-transparent border-b-2 hover:border-b-2 hover:border-inherit transition-all ease-in duration-300"
            >
              <span className="shrink-0">Find Program</span>
              <div className="w-full h-[30px] relative">
                <FiArrowRight className="left-0 top-[8px] absolute group-hover/conlink:left-[calc(100%-15px)] transition-all duration-300" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
