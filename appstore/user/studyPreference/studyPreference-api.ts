import { apiSlice } from "@/appstore/api-slice";

export const acedemypreferenceApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    createAcademyPreference: build.mutation({
      query: (data) => ({
        url: "/students/preferences/college-preferences",
        method: "PATCH",
        body: data,
        keepUnusedDataFor: 0,
      }),
      invalidatesTags: ["studyPreferenceData"],
    }),
  }),
});

export const { useCreateAcademyPreferenceMutation } = acedemypreferenceApi;
