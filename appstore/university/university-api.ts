import { apiSlice } from "../api-slice";

export const universityApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getUniversities: build.query({
      query: (queryString) => {
        return `/public/country/universities${queryString}`;
      },
    }),
    getUniversitiesByCountry: build.query({
      query: (queryString) => {
        return `/public/university${queryString}`;
      },
    }),
    getAllUniversities: build.query({
      query: (queryString) => {
        return `/public/university/all${queryString}`;
      },
    }),
    getUniversityGallery: build.query({
      query: (queryString) => {
        return `/public/gallery${queryString}`;
      },
    }),
    getUniversityCampus: build.query({
      query: (queryString) => {
        return `/public/campus${queryString}`;
      },
    }),
    getUniversityCourse: build.query({
      query: (queryString) => {
        return `/public/university/with-courses${queryString}`;
      },
    }),
    getUniversityRanking: build.query({
      query: (queryString) => {
        return `/public/rank${queryString}`;
      },
    }),
    getCourses: build.query({
      query: (queryString) => {
        return `/public/course${queryString}`;
      },
    }),
    getProgramsByLevel: build.query({
      query: (queryString) => {
        return `/public/level${queryString}`;
      },
    }),
    getLevelsData: build.query({
      query: () => {
        return `/public/level`;
      },
    }),
    getDeliveryMethod: build.query({
      query: () => {
        return `/public/deliveryMethod`;
      },
    }),
    getRankingCompany: build.query({
      query: () => {
        return `/public/university/rank-companies`;
      },
    }),
    useGetCourses: build.query({
      query: (slug) => {
        return `/public/course${slug}`;
      },
    }),
    getRegionForUni: build.query({
      query: (queryString) => {
        return `/public/region${queryString}`;
      },
    }),
  }),
});

export const {
  useGetUniversitiesQuery,
  useGetUniversityCourseQuery,
  useGetUniversitiesByCountryQuery,
  useGetAllUniversitiesQuery,
  useGetUniversityGalleryQuery,
  useGetUniversityCampusQuery,
  useGetUniversityRankingQuery,
  useGetCoursesQuery,
  useGetProgramsByLevelQuery,
  useGetLevelsDataQuery,
  useGetDeliveryMethodQuery,
  useGetRegionForUniQuery,
  useGetRankingCompanyQuery,
  useUseGetCoursesQuery,
} = universityApi;
