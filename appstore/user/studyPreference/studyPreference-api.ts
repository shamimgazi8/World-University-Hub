import { apiSlice } from "@/appstore/api-slice";

export const studyPreferenceApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    createstudyPreference: build.mutation({
      query: (data) => ({
        url: "/students/preferences/study-preferences",
        method: "PATCH",
        body: data,
        keepUnusedDataFor: 0,
      }),
      invalidatesTags: ["studyPreferenceData"],
    }),
  }),
});

export const { useCreatestudyPreferenceMutation } = studyPreferenceApi;
