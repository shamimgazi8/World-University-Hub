import React from "react";

const ToutionFees = ({ id }: any) => {
  return (
    <section id={id} className=" pb-0 uni-section">
      <div className=" mt-[40px] grid gap-[20px]">
        <h5 className=" mb-0">Tuition Fees and Scholarship</h5>
        <div className="  grid lg:grid-cols-2 gap-[30px] ">
          <div className=" p-4 border rounded">
            <p className=" mb-0 text-c2 font-medium">Domestic Student</p>
            <div className=" h-[1px] bg-gray-300 my-4 w-full"></div>
            <div className=" grid grid-cols-2">
              <div className=" grid gap-1">
                <p className=" text-p4 mb-0">Tuition Fee/Year</p>
                <p className=" mb-0 text-c2 font-medium">1500 AUD</p>
              </div>
              <div className=" grid gap-1">
                <p className=" text-p4 mb-0">Other’s</p>
                <p className=" mb-0 text-c2 font-medium">500 AUD</p>
              </div>
            </div>
          </div>
          <div className=" p-4 border rounded">
            <p className=" mb-0 text-c2 font-medium">International Student</p>
            <div className=" h-[1px] bg-gray-300 my-4 w-full"></div>
            <div className=" grid grid-cols-2">
              <div className=" grid gap-1">
                <p className=" text-p4 mb-0">Tuition Fee/Year</p>
                <p className=" mb-0 text-c2 font-medium">1500 AUD</p>
              </div>
              <div className=" grid gap-1">
                <p className=" text-p4 mb-0">Other’s</p>
                <p className=" mb-0 text-c2 font-medium">500 AUD</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToutionFees;
