import { apiSlice } from "@/appstore/api-slice";

export const collegePreference = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    createCollegePreference: build.mutation({
      query: (data) => ({
        url: "/students/preferences/college-preferences",
        method: "PATCH",
        body: data,
        keepUnusedDataFor: 0,
      }),
      invalidatesTags: ["collegePreference"],
    }),
  }),
});

export const { useCreateCollegePreferenceMutation } = collegePreference;
