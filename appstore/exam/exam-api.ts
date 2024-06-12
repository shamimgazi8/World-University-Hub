import { apiSlice } from "../api-slice";

export const examApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getExam: build.query({
      query: (queryString) => {
        return `/public/exam${queryString}`;
      },
    }),
  }),
});

export const { useGetExamQuery } = examApi;
