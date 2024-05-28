import { apiSlice } from "@/appstore/api-slice";

import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { shortListData } from "./shortList-slice";
export const shortListApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    createShortList: build.mutation({
      query: (data) => ({
        url: "/students/short-list/create",
        method: "POST",
        body: data,
        keepUnusedDataFor: 0,
      }),
      invalidatesTags: ["shortListData"],
    }),

    allShortList: build.query({
      query: (queryString) => {
        return `/students/short-list/all${queryString}`;
      },
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          const result: any = await queryFulfilled;
          const reference = new URLSearchParams(_arg).get("reference");
          if (result) {
            Cookies.set(`list${reference}`, result?.data?.data?.length);
            dispatch(
              shortListData({
                listCOURSE:
                  reference === "COURSE"
                    ? result?.data?.data?.length
                    : parseInt(Cookies.get("listCOURSE") ?? "0"),
                listUNIVERSITY:
                  reference === "UNIVERSITY"
                    ? result?.data?.data?.length
                    : parseInt(Cookies.get("listUNIVERSITY") ?? "0"),
              })
            );
          }
        } catch (error) {}
      },
      providesTags: ["shortListData"],
      keepUnusedDataFor: 10,
    }),
  }),
});

export const { useCreateShortListMutation, useAllShortListQuery } =
  shortListApi;
