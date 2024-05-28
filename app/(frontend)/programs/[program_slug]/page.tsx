import Programs from "@/modules/uni-courses-with-filter/programs";

const ProgramByCategoryPage = ({ params }: { params: { slug: string } }) => {
  // console.log("{ params }: { params: { slug: string } }", params);

  return <Programs params={params} />;
};

export default ProgramByCategoryPage;
