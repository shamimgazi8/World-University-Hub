import InsightIcons from "../insight-icons";

const data = [
  {
    title: "University Rankings",
    link: "/top-universities",
    iconWhite: "/images/home/icons/ranking.png",
    iconColor: "/images/home/icons/ranking-color.png",
  },
  {
    title: "Top Courses",
    link: "/top-courses",
    iconWhite: "/images/home/icons/top-courses.png",
    iconColor: "/images/home/icons/top-courses-color.png",
  },
  {
    title: "Admission",
    link: "/admission",
    iconWhite: "/images/home/icons/admission.png",
    iconColor: "/images/home/icons/admission-color.png",
  },
  {
    title: "Student Success",
    link: "/student-success",
    iconWhite: "/images/home/icons/student-success.png",
    iconColor: "/images/home/icons/student-success-color.png",
  },
];

const InsightInfo = () => {
  return (
    <div className="flex flex-col justify-center gap-4 w-full">
      <div className="text-white text-center text-p1 font-semibold">
        Set Insight into
      </div>
      <div className="grid xs:grid-cols-1 xsm:grid-cols-2 lg:grid-cols-[repeat(4,auto)] justify-center gap-[15px]">
        {data?.map((item, i) => {
          return <InsightIcons key={i} data={item} />;
        })}
      </div>
    </div>
  );
};

export default InsightInfo;
