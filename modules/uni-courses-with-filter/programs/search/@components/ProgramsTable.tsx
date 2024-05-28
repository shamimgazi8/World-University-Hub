import React from "react";
import ProgramsTabs from "./ProgramsTab";

const ProgramsTable = ({ data, id, setQueryParams }: any) => {
  return (
    <section id={id} className=" pb-0">
      <ProgramsTabs data={data} setQueryParams={setQueryParams} />
    </section>
  );
};

export default ProgramsTable;
