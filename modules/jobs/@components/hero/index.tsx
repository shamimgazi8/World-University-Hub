import Breadcrumbs from "@/modules/@common/breadcrumbs";
import React from "react";

const JobHero = ({ total }: any) => {
  const breadCrumbsData = [
    { title: "Home", link: "/" },
    { title: "Jobs", link: "/jobs" },
    { title: "Jobs Search" },
  ];
  return (
    <section className="pt-[80px] bg-gradient-to-b from-primary-light to-secondary-light">
      <div className="container">
        <div className="flex flex-col justify-center text-center items-center">
          <h1 className="mb-[20px] text-center h3">
            Found {total} {total > 1 ? "Jobs" : "Job"}
          </h1>
          <Breadcrumbs data={breadCrumbsData} />
        </div>
      </div>
    </section>
  );
};

export default JobHero;
