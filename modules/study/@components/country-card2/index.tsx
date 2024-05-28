import Image from "next/image";
import Link from "next/link";

interface propTypes {
  data: any;
  regionSlug: string;
}

const CountryCard2 = ({ data, regionSlug }: propTypes) => {
  const countrySlug = data?.slug;
  const countryLink = `/study-abroad/${regionSlug}/${countrySlug}`;

  const dataLinks = [
    {
      title: "Destination Guide",
      link: countryLink,
    },
    {
      title: "Top Universities",
      link: `/${countrySlug}-top-universities`,
    },
    {
      title: "Top Courses",
      link: `/${countrySlug}-top-courses`,
    },
  ];

  return (
    <div>
      <Link href={countryLink} className="hover:text-inherit group/councard">
        <Image
          src={data.featureImage || "/misc/placeholder-country-lg.webp"}
          alt={data?.name}
          width={600}
          height={465}
          className="max-h-[350px] lg:max-h-[465px] w-full object-cover rounded-md"
        />
        <div className="pt-5">
          <h5>
            <span className="group-hover/councard:text-gradient transition-all">
              {data?.name}
            </span>
          </h5>
          {data?.shortdescription && (
            <p className="line-clamp-5">{data?.shortdescription}</p>
          )}
        </div>
      </Link>

      <ul className="flex flex-col gap-2 text-sm text-black mt-5">
        {dataLinks?.map((d, i) => {
          return (
            <li key={i}>
              <Link
                href={d.link || "#"}
                className="font-medium hover:text-gradient inline-flex flex-col group/item transition-all"
              >
                <span>{d.title}</span>
                <span className="w-0 h-[2px] inline-block invisible bg-gradient-to-r from-primary to-secondary group-hover/item:visible group-hover/item:w-full transition-all"></span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CountryCard2;
