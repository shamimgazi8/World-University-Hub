import { apiSlice } from "@/appstore/api-slice";

export const collegePreferenceApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    createcollegePreference: build.mutation({
      query: (data) => ({
        url: "/students/preferences/college-preferences",
        method: "PATCH",
        body: data,
        keepUnusedDataFor: 0,
      }),
      invalidatesTags: ["collegePreferenceData"],
    }),
  }),
});

export const { useCreatecollegePreferenceMutation } = collegePreferenceApi;
