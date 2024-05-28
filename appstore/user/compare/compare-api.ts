import { apiSlice } from "@/appstore/api-slice";
import Cookies from "js-cookie";
import { compareData } from "./compare-slice";
import { useSelector } from "react-redux";
export const compareApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    createCompare: build.mutation({
      query: (data) => ({
        url: "/students/compare/create",
        method: "POST",
        body: data,
        keepUnusedDataFor: 0,
      }),
      invalidatesTags: ["compareData"],
    }),

    allCompare: build.query({
      query: (queryString) => {
        return `/students/compare/all${queryString}`;
      },
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          const result: any = await queryFulfilled;
          const reference = new URLSearchParams(_arg).get("reference");

          if (result?.data?.data) {
            Cookies.set(`compare${reference}`, result?.data?.data?.length);
            dispatch(
              compareData({
                compareCOURSE:
                  reference === "COURSE"
                    ? result?.data?.data?.length
                    : parseInt(Cookies.get("compareCOURSE") ?? "0"),
                compareUNIVERSITY:
                  reference === "UNIVERSITY"
                    ? result?.data?.data?.length
                    : parseInt(Cookies.get("compareUNIVERSITY") ?? "0"),
              })
            );
          }
        } catch (error) {}
      },
      providesTags: ["compareData"],
      keepUnusedDataFor: 10,
    }),
  }),
});

export const { useCreateCompareMutation, useAllCompareQuery } = compareApi;
