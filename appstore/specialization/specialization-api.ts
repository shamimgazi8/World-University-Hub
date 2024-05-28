import { apiSlice } from "../api-slice";

export const specializationApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getSpecialization: build.query({
      query: (queryString) => {
        return `/public/specialization${queryString}`;
      },
    }),
  }),
});

export const { useGetSpecializationQuery } = specializationApi;
