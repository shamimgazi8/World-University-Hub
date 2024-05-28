import { apiSlice } from "@/appstore/api-slice";

export const allCountryApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAllCountry: build.query({
      query: (queryString) => `/public/country/all-list${queryString}`,
      transformResponse: (response: any) => {
        const data = response.data.map((item: any) => {
          return {
            label: item?.name,
            value: item?.id,
          };
        });
        return data;
      },
    }),
    getAllLevel: build.query({
      query: (queryString) => `/public/level/all`,
      transformResponse: (response: any) => {
        console.log({ response });

        const data = response.map((item: any) => {
          return {
            label: item?.name,
            value: item?.id,
          };
        });
        return data;
      },
    }),
    getAllSpecialization: build.query({
      query: (queryString) => `/public/specialization/options${queryString}`,
      transformResponse: (response: any) => {
        interface TreeNode {
          value: string;
          title: string;
          children?: TreeNode[];
        }

        const convertData = (data: any[]): TreeNode[] =>
          data.map((item) => ({
            value: item.id,
            title: item.name,
            children: item.children ? convertData(item.children) : [],
          }));

        return convertData(response.data);
      },
    }),

    getAllDeliveryMethod: build.query({
      query: () => `/public/deliveryMethod`,
      transformResponse: (response: any) => {
        const data = response.data.map((item: any) => {
          return {
            label: item?.name,
            value: item?.id,
          };
        });
        return data;
      },
    }),
  }),
});

export const {
  useGetAllCountryQuery,
  useGetAllDeliveryMethodQuery,
  useGetAllLevelQuery,
  useGetAllSpecializationQuery,
} = allCountryApi;
