import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URI,
  prepareHeaders: async (headers, { getState }) => {
    const cookie = Cookies.get("userToken");
    if (cookie) {
      headers.set("Authorization", `Bearer ${cookie}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    // window.location.href = `${process.env.NEXT_PUBLIC_API_URI}/login`;
  }
  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  tagTypes: [
    "compareData",
    "shortListData",
    "studyPreferenceData",
    "collegePreferenceData",
    "collegePreference",
  ],
  keepUnusedDataFor: 0,
  endpoints: () => ({}),
});
