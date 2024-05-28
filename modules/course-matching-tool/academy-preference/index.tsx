import Breadcrumbs from "@/modules/@common/breadcrumbs";
import ToolsHero from "./@components/toolsHero";
import Stepper from "./@components/Stepper";
import StudyPlansFormAcademy from "./@components/Form";

const AcademyPreferencePage = () => {
  const heroDescription = "0 schools and 0 programs";
  const dataBreadcrumbs = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: `Course Matching Tools`,
    },
  ];
  return (
    <div className="">
      <ToolsHero
        title="So far, you have matched…"
        shortDescription={heroDescription}
        placeholder="Search University"
        breadcrumb={<Breadcrumbs data={dataBreadcrumbs} />}
      />
      <Stepper />
      <StudyPlansFormAcademy />
    </div>
  );
};

export default AcademyPreferencePage;
