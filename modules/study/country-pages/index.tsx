"use client";

import ReactDOMServer from "react-dom/server";
import CountryPageHero from "../@components/country-page-hero";
import MessageForm from "../@components/form";
import PageLinks from "../@components/page-links";
import PageLinksCard from "../@components/page-links-card";
import SectionOtherCountries from "../@components/section-other-countries";
import {
  capitalizeFirstLetterOfEveryWord,
  generateQueryString,
  htmlParse,
} from "@/helpers/utils";
import { useGetPagesQuery } from "@/appstore/country/country-api";
import FindProgram from "../@components/find-program";
import useHeading from "@/hooks/use-heading";

interface propTypes {
  data: any;
  regionSlug?: string;
  countrySlug?: string;
  pageSlug?: string;
}
const CountryPages = ({
  data,
  regionSlug,
  countrySlug,
  pageSlug,
}: propTypes) => {
  const queryParams: any = {
    country: countrySlug,
    limit: 50,
    pageType: "COUNTRY",
  };
  const queryString = generateQueryString(queryParams);
  const { data: dataPages, isLoading, isError } = useGetPagesQuery(queryString);
  const pageDataArr = dataPages && dataPages?.data;
  const pageDataArrFilter =
    dataPages && dataPages?.data.filter((d: any) => d.slug !== pageSlug);

  const dataBreadcrumbs = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Study Abroad",
      link: "/study-abroad",
    },
    {
      title: `${capitalizeFirstLetterOfEveryWord(regionSlug)}`,
      link: `/study-abroad/${regionSlug}`,
    },
    {
      title: `${data?.country?.name}`,
      link: `/study-abroad/${regionSlug}/${countrySlug}`,
    },
    {
      title: `${data?.navTitle}`,
      elipsis: "line-clamp-1",
    },
  ];

  const heroData = {
    title: `${data?.title}`,
    breadcrumbData: dataBreadcrumbs,
    regionSlug: regionSlug,
    countrySlug: countrySlug,
    description: data?.shortDescription,
    videoSrc: data?.videoCode,
    imageSrc: data?.featuredImage,
  };

  // [shortcode_findprogram]
  const findProgramString = ReactDOMServer.renderToString(<FindProgram />);
  let content = data?.description;
  if (content?.includes("[shortcode_findprogram]")) {
    content = htmlParse(
      content.replaceAll("[shortcode_findprogram]", findProgramString)
    );
  } else {
    content = (
      <>
        <FindProgram classes={{ root: "!mt-0" }} />
        {htmlParse(data?.description)}
      </>
    );
  }

  useHeading();

  return (
    <>
      {data ? (
        <>
          <CountryPageHero data={heroData} />
          <PageLinks
            regionSlug={regionSlug}
            countrySlug={countrySlug}
            pageSlug={pageSlug}
            countryName={data?.country?.name}
            data={pageDataArr}
            isLoading={isLoading}
            isError={isError}
          />
          <section className="pt-7 lg:pt-10">
            <div className="container">
              <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
                <div>
                  <div className="mb-5 lg:mb-10 from_texteditor_wrapper">
                    {content}
                  </div>
                  <PageLinksCard
                    regionSlug={regionSlug}
                    countrySlug={countrySlug}
                    data={pageDataArrFilter}
                  />
                </div>
                <div className="self-start">
                  <MessageForm />
                </div>
              </div>
            </div>
          </section>
          <SectionOtherCountries />
        </>
      ) : (
        <section>
          <div className="container">
            <div className="text-center my-10">No Data Found</div>
          </div>
        </section>
      )}
    </>
  );
};

export default CountryPages;
