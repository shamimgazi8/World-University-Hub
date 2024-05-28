import { apiSlice } from "../api-slice";

export const globalApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getLevels: build.query({
      query: (queryString) => {
        return `/public/level${queryString}`;
      },
    }),
    getCountries: build.query({
      query: (queryString) => {
        return `/public/country${queryString}`;
      },
    }),
  }),
});

export const { useGetLevelsQuery, useGetCountriesQuery } = globalApi;
