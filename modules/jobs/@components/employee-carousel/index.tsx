"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
const data = [
  {
    universityName: "Fanshawe College",
    universitySlug: "fanshawe-college",
    countrySlug: "canada",
    universityLogoSrc:
      "https://cdn.myunisearch.com/ADMIN/fanshawe-internationalprimary-horz-fc-rgb-991e4b76-d0c1-4599-94be-7214efeab35b.png",
  },
  {
    universityName: "University of Ottawa",
    universitySlug: "university-of-ottawa",
    countrySlug: "canada",
    universityLogoSrc:
      "https://d31cuupyjbe4e1.cloudfront.net/ADMIN/University-of-Ottawa-ac69447f-6928-45d4-9ebd-ac79159a6174.jpg",
  },
  {
    universityName: "Queen Mary University of London",
    universitySlug: "queen-mary-university-of-london",
    countrySlug: "united-kingdom",
    universityLogoSrc:
      "https://d31cuupyjbe4e1.cloudfront.net/ADMIN/Queen-Mary-University-of-London-logo-Unisearch-1633784602521-7bda7e55-a7c5-44a0-8e00-dbbece522900.jpg",
  },
  {
    universityName: "Brock University",
    universitySlug: "brock-university",
    countrySlug: "canada",
    universityLogoSrc:
      "https://d31cuupyjbe4e1.cloudfront.net/ADMIN/Brock-logo-screen-6bfd7842-23d5-42be-88a7-bd4074e0e20d.png",
  },
  {
    universityName: "Trinity Western University",
    universitySlug: "trinity-western-university",
    countrySlug: "canada",
    universityLogoSrc:
      "https://d31cuupyjbe4e1.cloudfront.net/ADMIN/Trinity%20Western%20University-4d7fef91-8ca8-4f89-a91e-77771eadbfbd.png",
  },
  {
    universityName: "Lambton College",
    universitySlug: "lambton-college",
    countrySlug: "canada",
    universityLogoSrc:
      "https://cdn.myunisearch.com/ADMIN/Logo-Brand-8e56c16e-6efb-45cf-b839-c9aa62075003.png",
  },
  {
    universityName: "Dundalk Institute of Technology",
    universitySlug: "dundalk-institute-of-technology",
    countrySlug: "ireland",
    universityLogoSrc:
      "https://cdn.myunisearch.com/ADMIN/Dundalk-logo-448e8322-0809-4eef-8009-e7836741c833.jpg",
  },
  {
    universityName: "Université de Sherbrooke",
    universitySlug: "universite-de-sherbrooke",
    countrySlug: "canada",
    universityLogoSrc:
      "https://d31cuupyjbe4e1.cloudfront.net/ADMIN/universite_de_sherbrooke_logo-f349a7d1-00b7-4240-8749-e1c1eea3d3aa.png",
  },
  {
    universityName: "Australian Institute of Science & Technology",
    universitySlug: "australian-institute-of-science-and-technology",
    countrySlug: "australia",
    universityLogoSrc:
      "https://cdn.myunisearch.com/ADMIN/Australian-Institute-of-Science-&-Technology-71050045-fdec-4dd8-a92d-049b73715da9.jpg",
  },
  {
    universityName: "Athlone Institute of Technology",
    universitySlug: "athlone-institute-of-technology",
    countrySlug: "ireland",
    universityLogoSrc:
      "https://cdn.myunisearch.com/ADMIN/AIO-logo-1bbc7a0a-4d75-4c7f-b7f0-2527027449cb.jpg",
  },
  {
    universityName: "University of Central Lancashire",
    universitySlug: "uiversity-of-central-lancashiren",
    countrySlug: "united-kingdom",
    universityLogoSrc:
      "https://d31cuupyjbe4e1.cloudfront.net/ADMIN/Uiversity-of-Central-Lancashiren-Logo-cf898b55-7281-4828-923f-6027cdd1042e.jpg",
  },
  {
    universityName: "Atlantic Technological University Sligo",
    universitySlug: "atlantic-technological-university-sligo",
    countrySlug: "ireland",
    universityLogoSrc:
      "https://cdn.myunisearch.com/ADMIN/ATU-logo-36e7e518-748e-4c80-9ea1-9d53c86eb012.jpg",
  },
  {
    universityName: "Harvard University",
    universitySlug: "harvard-university",
    countrySlug: "united-states",
    universityLogoSrc:
      "https://d31cuupyjbe4e1.cloudfront.net/ADMIN/Harvard-University-Logo-c73cc2ce-21d3-47d5-9871-ab0f257abf96.png",
  },
  {
    universityName: "University of Manitoba",
    universitySlug: "university-of-manitoba",
    countrySlug: "canada",
    universityLogoSrc:
      "https://d31cuupyjbe4e1.cloudfront.net/ADMIN/Manitoba-logo-bf3beef8-50b9-4db8-94d9-fa4b53c1f2c6.png",
  },
  {
    universityName: "Oklahoma City University",
    universitySlug: "oklahoma-city-university",
    countrySlug: "united-states",
    universityLogoSrc:
      "https://cdn.myunisearch.com/ADMIN/Oklahoma-university-logo-a4a2e0c8-8a65-4580-a66a-7e583806c7b3.jpg",
  },
  {
    universityName: "Queensland University of Technology",
    universitySlug: "queensland-university-of-technology",
    countrySlug: "australia",
    universityLogoSrc:
      "https://cdn.myunisearch.com/ADMIN/QUT International logo – Blue – RGB – PNG (1)-b761753c-295d-4a77-88c3-edb1c524510e.png",
  },
  {
    universityName: "Old Dominion University ",
    universitySlug: "old-dominion-university",
    countrySlug: "united-states",
    universityLogoSrc:
      "https://cdn.myunisearch.com/ADMIN/Old-University-Logo-3300e507-435b-46c7-97fc-9ffb8de09bd4.jpg",
  },
  {
    universityName: "Illinois State University",
    universitySlug: "illinois-state-university",
    countrySlug: "united-states",
    universityLogoSrc:
      "https://d31cuupyjbe4e1.cloudfront.net/ADMIN/Illinois-State-University-Logo-800d6232-7b1c-4e6f-8987-30b793d48e0f.png",
  },
  {
    universityName: "The University of Sydney",
    universitySlug: "the-university-of-sydney",
    countrySlug: "australia",
    universityLogoSrc:
      "https://d31cuupyjbe4e1.cloudfront.net/MediaManager/University-of-Sydney-logo-6b53e582-c067-40c2-b236-131e63163ae2.jpg",
  },
  {
    universityName: " Ole Miss - The University of Mississippi ",
    universitySlug: "ole-miss-the-university-of-mississippi",
    countrySlug: "united-states",
    universityLogoSrc:
      "https://cdn.myunisearch.com/ADMIN/University-of-mississippi-logo-4491b917-280a-4b5a-9c94-244f56f4b4bc.jpg",
  },
  {
    universityName: "Olivet College ",
    universitySlug: "olivet-college",
    countrySlug: "united-states",
    universityLogoSrc:
      "https://cdn.myunisearch.com/ADMIN/Olivet-College-logo-8b6d9d62-be6b-43f2-8692-0d4b88381d8f.jpg",
  },
  {
    universityName: "Oral Roberts University ",
    universitySlug: "oral-roberts-university",
    countrySlug: "united-states",
    universityLogoSrc:
      "https://cdn.myunisearch.com/ADMIN/Oral-Roberts-University-logo-d538e3d8-efe3-4300-85d8-ef6ffcea3319.jpg",
  },
  {
    universityName: "Oregon Tech University ",
    universitySlug: "oregon-tech-university",
    countrySlug: "united-states",
    universityLogoSrc:
      "https://cdn.myunisearch.com/ADMIN/Oregon-Tech-University-logo-16650d56-a359-4106-8aff-c5e91af3fe5b.jpg",
  },
  {
    universityName: "Otis College of Art and Design ",
    universitySlug: "otis-college-of-art-and-design",
    countrySlug: "united-states",
    universityLogoSrc:
      "https://cdn.myunisearch.com/ADMIN/Otis-College-logo-a3393727-3998-478b-9ccd-9d5747e55478.jpg",
  },
  {
    universityName: "Macquarie University",
    universitySlug: "macquarie-university",
    countrySlug: "australia",
    universityLogoSrc:
      "https://d31cuupyjbe4e1.cloudfront.net/MediaManager/Macquarie-University-Logo-Unisearch-1634744361077-21494b7f-94af-491f-b8dc-63ee5367acf7.jpg",
  },
  {
    universityName: "Kwantlen Polytechnic University",
    universitySlug: "kwantlen-polytechnic-university",
    countrySlug: "canada",
    universityLogoSrc:
      "https://d31cuupyjbe4e1.cloudfront.net/MediaManager/Kwantlen-Polytechnic-University-Logo-Unisearch-1635162946508-372e2e89-5a67-40a4-a284-a40074f4f0c4.jpg",
  },
  {
    universityName: "Otterbein University ",
    universitySlug: "otterbein-university",
    countrySlug: "united-states",
    universityLogoSrc:
      "https://cdn.myunisearch.com/ADMIN/Otterbein-University-logo-1ac1833b-cea1-4491-8d1e-9f161f9eb258.jpg",
  },
  {
    universityName: "Algoma University",
    universitySlug: "algoma-university",
    countrySlug: "canada",
    universityLogoSrc:
      "https://d31cuupyjbe4e1.cloudfront.net/ADMIN/Algoma%20Logo-ad18f041-5bed-4455-aa9a-d38b65f81505.png",
  },
];
const EmployeeSlider = () => {
  const settings = {
    dots: true,
    className: "center",
    centerMode: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="bg-grey pt-8 lg:pt-[70px] pb-[60px] lg:pb-[120px]  employee-carousel overflow-hidden">
      <h3 className="text-center mb-0 pb-7">Featured Employers</h3>
      <Slider {...settings}>
        {data.map((item: any, i: any) => {
          return (
            <div key={i}>
              <div className="h-[70px] bg-white !flex items-center justify-center p-2 m-2">
                <Image
                  src={item?.universityLogoSrc}
                  alt={"india"}
                  width={160}
                  height={70}
                  className="object-contain w-full h-[50px]"
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default EmployeeSlider;
