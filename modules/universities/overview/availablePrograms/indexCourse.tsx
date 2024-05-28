import React from "react";
import SidebarProgramshero from "../../@components/sidebar/sidebarCourse";
import MoreProgramTabs from "../../@components/sidebar/IndexMoreProgramsTab";
import Link from "next/link";

const MorePrograms = ({ data, id }: any) => {
  return (
    <section id={id} className=" pb-0">
      <div className=" mt-[40px] grid gap-[20px]">
        <h5 className=" mb-0">More programs</h5>
        {/* <SidebarPrograms data={data} /> */}
        <MoreProgramTabs data={data} />
        <Link href={`/universities/${data?.university?.slug}/courses`}>
          <span className="text-c2 text-gradient">More Programs</span>
        </Link>
      </div>
    </section>
  );
};

export default MorePrograms;
