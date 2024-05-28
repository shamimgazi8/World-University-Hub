import Image from "next/image";
import Link from "next/link";
import { FiHeart, FiMapPin } from "react-icons/fi";
import { MdOutlineSwapCalls } from "react-icons/md";

interface propTypes {
  data?: any;
}

const UniCourseCardOld = ({ data }: propTypes) => {
  return (
    <div className="grid grid-cols-[195px_1fr] gap-[30px] border-b pb-4">
      <Link
        href={"#"}
        className="w-full h-[160px] border self-start rounded-md p-4 flex items-center justify-center"
      >
        <Image
          src={data?.universityLogoSrc}
          alt={data?.universityName}
          width={150}
          height={70}
          className="max-h-[70px] object-contain"
        />
      </Link>
      <div>
        <div className="flex justify-between mb-5">
          <div>
            <Link
              href={`/universities/${data?.universitySlug}`}
              className="group/uni block"
            >
              <h3 className="text-[22px] mb-[2px]">
                <span className="group-hover/uni:text-gradient transition-all">
                  {data?.universityName}
                </span>
              </h3>
            </Link>
            <div className="flex items-center gap-2">
              <FiMapPin />
              <span>Cambridge, United States</span>
            </div>
          </div>
          <div className="flex items-center justify-start gap-3">
            <button className="hover:text-primary">
              <div className="relative">
                <MdOutlineSwapCalls className="text-2xl" />
                <span className="absolute block top-[-7px] right-[-5px] text-[10px] bg-gradient-to-r from-primary to-secondary text-white rounded-full py-[1px] px-[3px]">
                  3+
                </span>
              </div>
            </button>
            <button className="hover:text-primary">
              <FiHeart className="text-2xl" />
            </button>
          </div>
        </div>

        <div className="mb-1">
          <div className="grid grid-cols-4 gap-4 max-w-[90%]">
            <div className="grid grid-cols-[16px_auto] gap-x-[6px] gap-y-[2px] border-r">
              <Image
                src={"/temp/os-ranke.png"}
                alt={"os ranke"}
                width={16}
                height={16}
                className="rounded object-cover"
              />
              <div className="m-0 text-[12px]">QS Rank</div>
              <div></div>
              <div className="font-medium">
                <span className="text-gradient">#1</span>
              </div>
            </div>
            <div className="grid grid-cols-[16px_auto] gap-x-[6px] gap-y-[2px] border-r">
              <Image
                src={"/temp/the.png"}
                alt={"the"}
                width={16}
                height={16}
                className="rounded object-cover"
              />
              <div className="m-0 text-[12px]">THE Rank</div>
              <div></div>
              <div className="font-medium">
                <span className="text-gradient">#2</span>
              </div>
            </div>
            <div className="grid grid-cols-[16px_auto] gap-x-[6px] gap-y-[2px] border-r">
              <Image
                src={"/temp/usn.png"}
                alt={"usn"}
                width={16}
                height={16}
                className="rounded object-cover"
              />
              <div className="m-0 text-[12px]">US Rank</div>
              <div></div>
              <div className="font-medium">
                <span className="text-gradient">#3</span>
              </div>
            </div>
            <div className="grid grid-cols-[16px_auto] gap-x-[6px] gap-y-[2px]">
              <Image
                src={"/temp/arw.png"}
                alt={"arw"}
                width={16}
                height={16}
                className="rounded object-cover"
              />
              <div className="m-0 text-[12px]">ARWU Rank</div>
              <div></div>
              <div className="font-medium">
                <span className="text-gradient">#4</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5">
          {new Array(3).fill(1).map((_, i) => {
            return (
              <div
                key={i}
                className={`py-2 px-3 grid grid-cols-[1fr_2fr] gap-5 ${
                  i % 2 == 0 ? "bg-grey" : ""
                }`}
              >
                <Link
                  href={`/universities/${data?.universitySlug}/courses/course-slug`}
                  className="block font-medium group/coursetitle text-black text-sm"
                >
                  <span className="group-hover/coursetitle:text-gradient transition-all">
                    Master of Science in Clinical Health Psychology
                  </span>
                </Link>
                <div className="grid grid-cols-4 gap-2">
                  <div className="grid grid-cols-[16px_1fr] gap-y-[1px] gap-x-2">
                    <Image
                      src="/icons/clock.png"
                      width={16}
                      height={16}
                      alt="Duration"
                      className="object-contain max-w-[18px] shrink-0 mt-[3px]"
                    />
                    <div className="text-xs">Duration</div>
                    <div className="font-medium text-sm col-span-2">1 Year</div>
                  </div>

                  <div className="grid grid-cols-[16px_1fr] gap-y-[1px] gap-x-2">
                    <Image
                      src="/icons/hat.png"
                      width={18}
                      height={18}
                      alt="Level"
                      className="object-contain max-w-[18px] shrink-0 mt-[3px]"
                    />
                    <div className="text-xs">Level</div>
                    <div className="font-medium text-sm col-span-2">
                      Undergraduate
                    </div>
                  </div>
                  <div className="grid grid-cols-[16px_1fr] gap-y-[1px] gap-x-2">
                    <Image
                      src="/icons/training.png"
                      width={16}
                      height={16}
                      alt="Delivery Method"
                      className="object-contain max-w-[18px] shrink-0 mt-[3px]"
                    />
                    <div className="text-xs">Delivery Method</div>
                    <div className="font-medium text-sm col-span-2">
                      On Campus
                    </div>
                  </div>
                  <div className="grid grid-cols-[16px_1fr] gap-y-[1px] gap-x-2">
                    <Image
                      src="/icons/campus.png"
                      width={14}
                      height={14}
                      alt="Campus"
                      className="object-contain max-w-[18px] shrink-0 mt-[3px]"
                    />
                    <div className="text-xs">Campus</div>
                    <div className="font-medium text-sm col-span-2">Ottowa</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center">
          <Link
            href={`/universities/${data?.universitySlug}/courses`}
            className="text-primary font-medium group/viewlink"
          >
            <span className="group-hover/viewlink:text-gradient transition-all">
              View All 35 Courses
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UniCourseCardOld;
