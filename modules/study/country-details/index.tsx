"use client";
import { useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";
import { useGetPagesQuery } from "@/appstore/country/country-api";
import {
  capitalizeFirstLetterOfEveryWord,
  generateQueryString,
  htmlParse,
} from "@/helpers/utils";
import CountryPageHero from "../@components/country-page-hero";
import MessageForm from "../@components/form";
import PageLinks from "../@components/page-links";
import PageLinksCard from "../@components/page-links-card";
import SectionOtherCountries from "../@components/section-other-countries";
import CountryQuickFacts from "./quick-facts";
import FindProgram from "../@components/find-program";
import { usePathname } from "next/navigation";
import useHeading from "@/hooks/use-heading";

interface propTypes {
  data: any;
  regionSlug?: string;
  countrySlug?: string;
}

const StudyCountryDetails = ({ data, regionSlug, countrySlug }: propTypes) => {
  const path = usePathname();
  const queryParams: any = {
    country: countrySlug,
    limit: 50,
    pageType: "COUNTRY",
  };
  const queryString = generateQueryString(queryParams);
  const { data: dataPages, isLoading, isError } = useGetPagesQuery(queryString);
  const pageDataArr = dataPages && dataPages?.data;

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
      title: `${data?.name}`,
    },
  ];

  const heroData = {
    title: `Study in ${data?.name}: A Guide for
    International Students`,
    breadcrumbData: dataBreadcrumbs,
    regionSlug: regionSlug,
    countrySlug: countrySlug,
    description: data?.shortdescription,
    videoSrc: data?.videoCode,
    imageSrc: data?.featureImage,
  };

  // [shortcode_quickfacts][shortcode_findprogram];
  const quickFactsString = ReactDOMServer.renderToString(
    <CountryQuickFacts data={data} />
  );
  const findProgramString = ReactDOMServer.renderToString(<FindProgram />);

  let content = data?.description;
  if (
    content?.includes("[shortcode_quickfacts]") ||
    content?.includes("[shortcode_findprogram]")
  ) {
    content = htmlParse(
      content
        .replaceAll("[shortcode_quickfacts]", quickFactsString)
        .replaceAll("[shortcode_findprogram]", findProgramString)
    );
  } else {
    content = (
      <>
        <CountryQuickFacts classes={{ root: "!mt-0 !mb-10" }} data={data} />
        <FindProgram />
        {htmlParse(data?.description)}
      </>
    );
  }

  useHeading();

  return (
    <>
      <CountryPageHero data={heroData} />
      <PageLinks
        regionSlug={regionSlug}
        countrySlug={countrySlug}
        countryName={data?.name}
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
                data={pageDataArr}
              />
            </div>
            <div className="self-start">
              <MessageForm path={path} />
            </div>
          </div>
        </div>
      </section>
      <SectionOtherCountries />
    </>
  );
};

export default StudyCountryDetails;
