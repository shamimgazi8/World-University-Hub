"use client";
import BlogByCountry from "../@components/blog-by-country";
import BlogCategoryCarousel from "../@components/blog-category-carousel";
import BlogLandingHero from "./blog-hero";
import BlogScholership from "../@components/blog-scholership";
import { generateQueryString } from "@/helpers/utils";
import { useGetBlogByCategoryQuery } from "@/appstore/blog/blog-api";
import BlogStudyAbroad from "../@components/blog-scholership/index_two";
import BlogApplicationProcess from "../@components/blog-scholership/index_three";

const BlogLanding = () => {
  const queryParamsHero: any = {
    isFeatured: "true",
  };
  const queryStringHero = generateQueryString(queryParamsHero);
  const { data: HeroData, isLoading: HeroLoading } =
    useGetBlogByCategoryQuery(queryStringHero);

  const queryParamsScholership: any = {
    category: "scholarships",
  };
  const queryStringScholership = generateQueryString(queryParamsScholership);
  const { data: scholershipsData, isLoading: ScholershipsLoading } =
    useGetBlogByCategoryQuery(queryStringScholership);

  //
  const queryParamsStudyAbroad: any = {
    category: "study-abroad",
  };
  const queryStringStudyAbroad = generateQueryString(queryParamsStudyAbroad);
  const { data: studyAbroadData } = useGetBlogByCategoryQuery(
    queryStringStudyAbroad
  );
  //
  const queryParamsApplicationProcess: any = {
    category: "application-process",
  };
  const queryStringApplicationProcess = generateQueryString(
    queryParamsApplicationProcess
  );
  const { data: ApplicationProcessData } = useGetBlogByCategoryQuery(
    queryStringApplicationProcess
  );
  return (
    <div>
      <BlogLandingHero data={HeroData} loading={HeroLoading} />
      <BlogCategoryCarousel />
      <BlogScholership data={scholershipsData} loading={ScholershipsLoading} />
      <BlogByCountry />
      <BlogStudyAbroad data={studyAbroadData} loading={ScholershipsLoading} />
      <BlogApplicationProcess
        data={ApplicationProcessData}
        loading={ScholershipsLoading}
      />
    </div>
  );
};

export default BlogLanding;
