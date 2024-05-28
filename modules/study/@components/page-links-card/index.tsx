import { excerpt } from "@/helpers/utils";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

interface propTypes {
  data: any;
  regionSlug?: string;
  countrySlug?: string;
}

const PageLinksCard = ({ data, regionSlug, countrySlug }: propTypes) => {
  return (
    <>
      {data && data?.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 sm:gap-7">
          {data?.map((item: any, i: number) => {
            const pageLink = `/study-abroad/${regionSlug}/${countrySlug}/${item?.slug}`;
            return (
              <div
                key={i}
                className="flex flex-col gap-4  border-[#E7E7E7] border-[1px] p-6 rounded"
              >
                <Link href={pageLink} className="group/contrypage">
                  <h5 className="mb-0">
                    <span className="group-hover/contrypage:text-gradient transition-all text-gradient">
                      {item?.title}
                    </span>
                  </h5>
                </Link>
                {item?.shortDescription && (
                  <p className="text-p4 line-clamp-5 mb-0">
                    {excerpt(item?.shortDescription, 500)}
                  </p>
                )}

                <Link
                  href={pageLink}
                  className="text-p4 mt-4 rounded text-gradient flex items-center gap-3"
                >
                  Learn More
                  <HiArrowRight className="text-primary" />
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default PageLinksCard;
