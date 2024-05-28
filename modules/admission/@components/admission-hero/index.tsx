import Image from "next/image";
import React from "react";

const AdmissionHero = () => {
  return (
    <div className="bg-gradient-to-b from-primary-light to-secondary-light ">
      <div className="container">
        <div className="grid grid-cols-2 gap-[30px] place-items-center py-[60px]">
          <div>
            <h3 className="mb-0">
              Admissions Opportunities. Your Journey Starts.
            </h3>
            <p className="text-p1 mb-0 pt-4">
              Below you will find top university by ranking. Narrow your search
              further by selecting a specific category, program level and
              location.
            </p>
          </div>
          <div>
            <div>
              <Image
                src={"/temp/admission-hero.png"}
                alt={"india"}
                width={640}
                height={360}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionHero;
