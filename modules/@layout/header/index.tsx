"use client";
import navData from "@/data/nav-data.json";
import { Drawer, DrawerProps, Popover, RadioChangeEvent } from "antd";
import Cookies from "js-cookie";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { FiChevronDown, FiChevronUp, FiHeart } from "react-icons/fi";
import { MdOutlineSwapCalls } from "react-icons/md";
import { useSelector } from "react-redux";

const ProfileAvatar = dynamic(() => import("@/modules/@admin/avatar"), {
  ssr: false,
});

const Header = () => {
  const [open, setOpen] = useState(false);
  const [hasCookie, setHasCookie] = useState<any>();
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const [scroll, setScroll] = useState(false);

  // Scroll Efect

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const shortListInfo = useSelector((state: any) => state.shortList_Slice);
  const compareInfo = useSelector((state: any) => state.compare_Slice);

  useEffect(() => {
    setHasCookie(Cookies.get("userToken"));
  }, []);

  const onClose = () => {
    setOpen(false);
  };

  const [selected, setSelected] = useState(null);

  const toggle = (i: any) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const compareContent = (
    <div className="min-w-[100px]">
      <div>
        <Link href={"/compare-universities"} className="cursor-pointer">
          University ({compareInfo?.compareUNIVERSITY})
        </Link>
      </div>
      <div>
        <Link href={"/compare-courses"} className="cursor-pointer">
          Courses ({compareInfo?.compareCOURSE})
        </Link>
      </div>
    </div>
  );
  const shortListContent = (
    <div className="min-w-[100px]">
      <div>
        <Link href={"/user/universities"} className="cursor-pointer">
          University ({shortListInfo?.listUNIVERSITY})
        </Link>
      </div>
      <div>
        <Link href={"/user/courses"} className="cursor-pointer">
          Courses ({shortListInfo?.listCOURSE})
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <header
        className={`bg-header sticky top-0 z-[1000] ${scroll ? "header" : ""}`}
      >
        <div className="container">
          <div className="flex items-center justify-between py-4 lg:py-0">
            <div onClick={() => setOpen(true)} className="block lg:hidden">
              <BiMenuAltLeft className="text-2xl" />
            </div>
            <div>
              <Link href="/">
                <Image
                  src="/misc/logo.png"
                  width={220}
                  height={40}
                  alt="logo"
                  className=" lg:h-[40px] lg:w-[220px] w-[120px]"
                />
              </Link>
            </div>
            <nav className="hidden lg:block">
              <ul className="flex items-center">
                {navData?.map((item1, i) => {
                  return (
                    <li key={i} className="group/item-1 relative">
                      <Link
                        href={item1?.link}
                        className="flex items-center gap-1 p-6 hover:!text-gradient"
                      >
                        {item1?.title}
                        {item1.children && (
                          <FiChevronDown className="mt-[2px]" />
                        )}
                      </Link>

                      {item1?.children && (
                        <ul className="min-w-[260px] absolute  bg-white py-2 pl-4 pr-0 rounded-md  shadow-lg opacity-0 invisible top-[100%] left-0 group-hover/item-1:visible group-hover/item-1:opacity-100">
                          {item1?.children?.map((item2: any, i: any) => {
                            return (
                              <li
                                className="overflow-hidden group/item-2 w-full"
                                key={i}
                              >
                                <Link
                                  href={item2?.link}
                                  className="group/test grid grid-cols-[auto_1fr_auto]  p-2 hover:text-inherit text-black font-normal items-center gap-2 translate-x-[-30px] hover:translate-x-0 transition"
                                >
                                  <span className="block shrink-0 test w-[15px] h-[10px] bg-gradient-to-r from-primary to-secondary"></span>
                                  <span className="group-hover/item-2:text-gradient">
                                    {item2.title}
                                  </span>
                                  {item2?.children && (
                                    <span className="flex w-[10px] h-[10px] bg-gradient-to-r from-primary to-secondary test-2"></span>
                                  )}
                                </Link>
                                {item1?.children?.length - 1 !== i && (
                                  <span className="block w-[calc(100%-16px)] h-[1px] bg-[#eee]"></span>
                                )}

                                {item2?.children && (
                                  <ul className="min-w-[300px] absolute bg-white p-4 pr-0 rounded-md  shadow-lg opacity-0 invisible top-0  left-[100%] group-hover/item-2:visible group-hover/item-2:opacity-100">
                                    {item2?.children?.map(
                                      (item3: any, i: any) => {
                                        return (
                                          <li
                                            key={i}
                                            className="overflow-hidden group/item-3"
                                          >
                                            <Link
                                              href={item3?.link}
                                              className="flex p-2 hover:text-inherit text-black font-normal items-center gap-2 translate-x-[-30px] hover:translate-x-0 transition"
                                            >
                                              <span className="block shrink-0 test w-[15px] h-[10px] bg-gradient-to-r from-primary to-secondary"></span>
                                              <span className="group-hover/item-3:text-gradient">
                                                {item3.title}
                                              </span>
                                              {item3?.children && (
                                                <span className="flex w-[10px] h-[10px] bg-gradient-to-r from-primary to-secondary test-2"></span>
                                              )}
                                            </Link>

                                            {item2?.children?.length - 1 !==
                                              i && (
                                              <span className="block w-[calc(100%-16px)] h-[1px] bg-[#eee]"></span>
                                            )}

                                            {item3?.children && (
                                              <ul className="min-w-[200px] absolute bg-white p-4 pr-0 rounded-md  shadow-lg opacity-0 invisible top-0  left-[100%] group-hover/item-3:visible group-hover/item-3:opacity-100">
                                                {item3?.children?.map(
                                                  (item4: any, i: any) => {
                                                    return (
                                                      <li
                                                        key={i}
                                                        className="overflow-hidden"
                                                      >
                                                        <Link
                                                          href={item4?.link}
                                                          className="flex p-2 hover:text-inherit text-black font-normal items-center gap-2 translate-x-[-30px] hover:translate-x-0 transition"
                                                        >
                                                          <span className="block test w-[15px] h-[10px] bg-gradient-to-r from-primary to-secondary"></span>
                                                          <span className="group-hover/item-3:text-gradient">
                                                            {item4.title}
                                                          </span>
                                                        </Link>
                                                        {item3?.children
                                                          ?.length -
                                                          1 !==
                                                          i && (
                                                          <span className="block w-[calc(100%-16px)] h-[1px] bg-[#eee]"></span>
                                                        )}
                                                      </li>
                                                    );
                                                  }
                                                )}
                                              </ul>
                                            )}
                                          </li>
                                        );
                                      }
                                    )}
                                  </ul>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="flex items-center gap-2 lg:gap-4 rounded">
              {!hasCookie ? (
                <Fragment>
                  <div className="flex items-center gap-3">
                    <Link
                      href="/login"
                      className="btn btn-primary-outline  hover:text-white text-gradient "
                    >
                      <span className="">Login</span>
                    </Link>
                  </div>
                </Fragment>
              ) : (
                <Fragment>
                  {/* Compare */}
                  {/* <div className="cursor-pointer hover:text-hover">
                    <Popover
                      placement="bottomRight"
                      content={compareContent}
                      trigger="click"
                    >
                      <span className="block relative">
                        <MdOutlineSwapCalls size={25} />

                        {(compareInfo?.compareCOURSE !== 0 ||
                          compareInfo?.compareUNIVERSITY !== 0) && (
                          <span className="absolute box-content m-0 top-[-7px] right-[-5px] h-[15px] w-[15px] flex justify-center datas-center bg-primary !border-0 rounded-full text-white text-[10px] p-[2px]">
                            {parseInt(compareInfo?.compareCOURSE) +
                              parseInt(compareInfo?.compareUNIVERSITY)}
                          </span>
                        )}
                      </span>
                    </Popover>
                  </div> */}
                  <div className="cursor-pointer hover:text-hover">
                    <Popover
                      placement="bottomRight"
                      content={shortListContent}
                      trigger="click"
                    >
                      <span className="block relative">
                        <FiHeart size={25} />
                        {(shortListInfo?.listCOURSE !== 0 ||
                          shortListInfo?.listUNIVERSITY !== 0) && (
                          <span className="absolute box-content m-0 top-[-7px] right-[-5px] h-[15px] w-[15px] flex justify-center datas-center bg-primary !border-0 rounded-full text-white text-[10px] p-[2px]">
                            {shortListInfo?.listCOURSE +
                              shortListInfo?.listUNIVERSITY}
                          </span>
                        )}
                      </span>
                    </Popover>
                  </div>
                  <div className="flex items-center gap-3">
                    <ProfileAvatar />
                  </div>
                </Fragment>
              )}
            </div>
          </div>
        </div>
      </header>

      <Drawer
        title="World University Hub"
        placement={placement}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <div className="h-[100vh] overflow-auto">
          {/* body */}
          <div
            className="flex flex-col overflow-auto"
            style={{ height: "calc(100vh - 60px" }}
          >
            <div>
              <>
                {navData && navData?.length > 0 ? (
                  <div className="flex flex-col">
                    {navData?.map((item: any, i: any) => {
                      return (
                        <Fragment key={i}>
                          <div key={i} className="relative">
                            {item?.children && item?.children?.length > 0 ? (
                              <>
                                {item?.isHidden ? null : (
                                  <div
                                    onClick={() => toggle(i)}
                                    className="flex items-center justify-between w-full py-2 z-10 gap-1"
                                  >
                                    <span className="text-left">
                                      {item.title}
                                    </span>
                                    {item?.children && (
                                      <>
                                        {selected == i ? (
                                          <FiChevronUp className="shrink-0" />
                                        ) : (
                                          <FiChevronDown className="shrink-0" />
                                        )}
                                      </>
                                    )}
                                  </div>
                                )}
                              </>
                            ) : (
                              <>
                                <Link
                                  href={item?.link || "#"}
                                  onClick={() => setOpen(false)}
                                  className="flex items-center justify-between w-full py-2 z-10 gap-1"
                                >
                                  <span className="text-left">
                                    {item.title}
                                  </span>
                                </Link>
                              </>
                            )}

                            <div>
                              {selected == i && (
                                <ul>
                                  {item.children?.map((cldn: any, i: any) => {
                                    return (
                                      <li
                                        key={i}
                                        onClick={() => setOpen(false)}
                                      >
                                        <Link
                                          href={cldn?.link || "#"}
                                          className="flex p-2"
                                        >
                                          {cldn?.title}
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              )}
                            </div>
                          </div>
                        </Fragment>
                      );
                    })}
                  </div>
                ) : null}
              </>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
