import { apiSlice } from "../api-slice";

export const cityApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAllCity: build.query({
      query: (queryString) => {
        return `/public/city${queryString}`;
      },
    }),
  }),
});

export const { useGetAllCityQuery } = cityApi;
