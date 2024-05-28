import SectionBlog from "../@common/section-blog";
import HigherEducation from "./@components/higher-education";
import HomeHero from "./@components/home-hero";
import HomeHeroTwo from "./@components/home-hero-two";
import SectionLearnMore from "./@components/learn-more";
import BrowsePrograms from "./browse-programs";
import CountDown from "./count-down";
import CountryCarousel from "./country-caresoul";
import FirstStop from "./first-stop";
import HeroGallery from "./hero-gallery";
import OurFeatures from "./our-features";
import Testimonials from "./testimonials";
import ViewCourse from "./view-course";
import WUHSupport from "./wuh-support";

export const Home = () => {
  return (
    <>
      {/* <HomeHero /> */}

      <HomeHeroTwo />
      <HeroGallery />
      <HigherEducation />
      <CountryCarousel />
      <WUHSupport />
      <SectionBlog classes={{ root: "pt-8 lg:pt-[70px]" }} />
      <FirstStop />

      {/* <CountDown /> */}
      {/* <BrowsePrograms /> */}
      {/* <ViewCourse /> */}
      {/* <OurFeatures /> */}
      {/* <Testimonials /> */}
      {/* <SectionLearnMore /> */}
    </>
  );
};

export default Home;
