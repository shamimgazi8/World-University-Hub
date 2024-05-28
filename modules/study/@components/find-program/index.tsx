import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

interface propTypes {
  title?: string;
  subTitle?: string;
  link?: string;
  classes?: {
    root?: string;
  };
}

const FindProgram = ({
  title = "Find a Program",
  subTitle = "Want to study in Abroad? Find & compare programs",
  link = "#",
  classes,
}: propTypes) => {
  return (
    <div
      className={`max-w-[640px] w-full mx-auto my-8  px-8 py-4 border border-[1px] border-[#E7E7E7] rounded ${
        classes?.root ? classes?.root : ""
      }`}
    >
      <div className="grid grid-cols-[1fr_auto] gap-2 items-center">
        <div>
          <h4 className="!mb-0 h5">{title}</h4>
          <p className="mb-0">{subTitle}</p>
        </div>
        <Link
          href={link}
          className="text-p1 rounded text-gradient flex items-center gap-3"
        >
          Search <HiArrowRight className="text-primary text-lg" />
        </Link>
      </div>
    </div>
  );
};

export default FindProgram;
