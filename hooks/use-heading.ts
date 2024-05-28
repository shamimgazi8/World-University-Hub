import { useEffect } from "react";

const useHeading = () => {
  useEffect(() => {
    const allh1 = document.querySelectorAll(".from_texteditor_wrapper h1");
    const allh2 = document.querySelectorAll(".from_texteditor_wrapper h2");
    const allh3 = document.querySelectorAll(".from_texteditor_wrapper h3");
    const allh4 = document.querySelectorAll(".from_texteditor_wrapper h4");
    const allh5 = document.querySelectorAll(".from_texteditor_wrapper h5");
    const allh1Array = Array.from(allh1);
    const allh2Array = Array.from(allh2);
    const allh3Array = Array.from(allh3);
    const allh4Array = Array.from(allh4);
    const allh5Array = Array.from(allh5);

    allh1Array?.map((item: any) => {
      item.setAttribute("class", `h3`);
    });
    allh2Array?.map((item: any) => {
      item.setAttribute("class", `h4`);
    });
    allh3Array?.map((item: any) => {
      item.setAttribute("class", `h5`);
    });
    allh4Array?.map((item: any) => {
      item.setAttribute("class", `h6`);
    });
    allh5Array?.map((item: any) => {
      item.setAttribute("class", `h6`);
    });
  }, []);
};
export default useHeading;
