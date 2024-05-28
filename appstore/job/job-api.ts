import { apiSlice } from "../api-slice";

export const jobApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getJob: build.query({
      query: (queryString) => {
        return `/public/jobs${queryString}`;
      },
    }),
    getJobType: build.query({
      query: (queryString) => {
        return `/public/jobs/job-types${queryString}`;
      },
    }),
    getJobRecruiters: build.query({
      query: (queryString) => {
        return `/public/jobs/job-recruiters${queryString}`;
      },
    }),
  }),
});

export const { useGetJobQuery, useGetJobTypeQuery, useGetJobRecruitersQuery } =
  jobApi;
