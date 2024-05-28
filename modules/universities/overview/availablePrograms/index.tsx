import React from "react";
import SidebarProgramshero from "../../@components/sidebar/sidebarCourse";

const AvailableProgram = ({ data, id }: any) => {
  return (
    <section className=" pb-0" id={id}>
      <div className=" mt-[40px] grid gap-[20px]">
        <h5 className=" mb-0">Available programs</h5>
        {/* <SidebarPrograms data={data} /> */}
        <SidebarProgramshero data={data} />
      </div>
    </section>
  );
};

export default AvailableProgram;
