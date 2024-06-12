import SocialLinks from "@/modules/@common/social-links";
import Image from "next/image";
import Link from "next/link";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";

const data = [
  {
    children: [
      {
        title: "About",
        link: "/about-us",
      },
      {
        title: "Contact",
        link: "/contact-us",
      },
      {
        title: "Privacy",
        link: "/privacy-policy",
      },
      {
        title: "Users",
        link: "/study-abroad/oceania/new-zeland",
      },
      {
        title: "Cookies",
        link: "/study-abroad/north-america/new-zeland",
      },
      {
        title: "Data Copyright",
        link: "/study-abroad/europe/germany",
      },
      {
        title: "Terms & Conditions",
        link: "/terms-and-conditions",
      },
    ],
  },

  {
    title: "Contact Info",
    jsx: (
      <div className="flex flex-col gap-4">
        <div className="flex gap-3">
          <SlLocationPin className="text-lg flex-shrink-0 mt-1" />
          <span>275 Quadra Street Victoria Road, New York</span>
        </div>
        <a className="flex gap-3 group" href="tel:+12 345 6789">
          <BsTelephone className="text-lg flex-shrink-0 mt-1" />
          <span className="group-hover:text-gradient">+12 345 6789</span>
        </a>
        <a className="flex gap-3 group" href="mailto:info@worldunihub.com">
          <FiMail className="text-lg flex-shrink-0 mt-1" />
          <span className="group-hover:text-gradient">
            info@worldunihub.com
          </span>
        </a>
      </div>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="mt-auto bg-footer text-footertext lg:pt-[80px] py-[40px]">
      <div className="container">
        <div className="lg:pb-8 grid grid-cols-1 lg:grid-cols-[2.43fr_1fr] gap-5 lg:gap-[143px] text-grey text-sm">
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 ">
              {data?.map((item, i) => {
                return (
                  <div key={i}>
                    <ul className="grid lg:grid-flow-col gap-8">
                      {item?.children?.map((list, i) => {
                        return (
                          <li key={i}>
                            <Link
                              className="block text-p3 group"
                              href={list.link}
                            >
                              <span className="group-hover:text-gradient transition-all">
                                {list?.title}
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
            <SocialLinks classes={{ root: "!mb-0" }} />
            <div className="container px-0">
              Copyright {new Date().getFullYear()} World University Hub |
              Developed By{" "}
              <Link href={"https://m4yours.com/"}>M4YOURS IT.</Link> All Rights
              Reserved
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <p className="text-p2 mb-4">
                Subscribe to get latest update & news
              </p>
              <div className=" relative group">
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-full py-3 px-5 focus:outline-none text-black"
                  placeholder="Enter your email"
                />
                <IoIosArrowRoundForward className=" text-[32px] absolute right-0 top-2 text-purple-400 mr-3 group-hover:scale-125 transition-all" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
