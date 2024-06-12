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
    getAllUniversitiesBySearch: build.query({
      query: (queryString) => {
        return `/public/university/search${queryString}`;
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
    getCourseDuration: build.query({
      query: () => {
        return `/public/course/durations`;
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
    getLevelsOptionsData: build.query({
      query: () => {
        return `/public/level/all`;
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
    getTestScore: build.query({
      query: (UniId) => {
        return `/test-score?universityId=${UniId}`;
      },
    }),
    getspecialization: build.query({
      query: () => {
        return `/public/specialization
        `;
      },
    }),
    getBestCities: build.query({
      query: () => {
        return `/public/city/best-cities
        `;
      },
    }),
    getDeliveryMethods: build.query({
      query: () => {
        return `/public/deliveryMethod
        `;
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
  useGetBestCitiesQuery,
  useGetUniversitiesQuery,
  useGetUniversityCourseQuery,
  useGetTestScoreQuery,
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
  useGetspecializationQuery,
  useGetAllUniversitiesBySearchQuery,
  useGetLevelsOptionsDataQuery,
  useGetCourseDurationQuery,
  useGetDeliveryMethodsQuery,
} = universityApi;
