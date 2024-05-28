import { apiSlice } from "../api-slice";

export const countryApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getRegion: build.query({
      query: (queryString) => {
        return `/public/region${queryString}`;
      },
    }),

    getCountriesData: build.query({
      query: (queryString) => `/public/country${queryString}`,
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
        } catch (error) {}
      },
    }),
    getPages: build.query({
      query: (queryString) => `/public/page${queryString}`,
    }),
  }),
});

export const { useGetRegionQuery, useGetCountriesDataQuery, useGetPagesQuery } =
  countryApi;
