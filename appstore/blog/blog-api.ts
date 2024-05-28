import { apiSlice } from "../api-slice";

export const blogApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getBlog: build.query({
      query: ({ limit = 10, page = 1 }) => {
        return `/public/blog?limit=${limit}&page=${page}&orderBy=publishedAt`;
      },
    }),
    getBlogByCategory: build.query({
      query: (queryStrig) => {
        return `/public/blog${queryStrig}`;
      },
    }),

    getBlogByTag: build.query({
      query: ({ limit = 10, page = 1, tag }) => {
        return `/public/blog?limit=${limit}&page=${page}&tag=${tag}`;
      },
    }),
    getBlogBySearch: build.query({
      query: ({ limit = 10, page = 1, searchKeyword }) => {
        return `/public/blog?limit=${limit}&page=${page}&searchKeyword=${searchKeyword}`;
      },
    }),
    getBlogByTrending: build.query({
      query: ({ limit = 10 }) => {
        return `/public/blog/trending-blog?limit=${limit}`;
      },
    }),
    getBlogByCountry: build.query({
      query: (queryString) => {
        return `/public/blog/country-wise-blog${queryString}`;
      },
    }),
    getBlogByGroup: build.query({
      query: () => {
        return `/public/blog/group-wise-blog`;
      },
    }),
    getBlogByAuthor: build.query({
      query: ({ authorSlug, page = 1, limit = 10 }) => {
        return `public/author/${authorSlug}/blogs?page=${page}&limit=${limit}`;
      },
    }),
    getCategory: build.query({
      query: ({ limit = 10, page = 1 }) => {
        return `/public/blog/category?limit=${limit}&page=${page}`;
      },
    }),
  }),
});

export const {
  useGetBlogQuery,
  useGetCategoryQuery,
  useGetBlogByCategoryQuery,
  useGetBlogByTagQuery,
  useGetBlogBySearchQuery,
  useGetBlogByTrendingQuery,
  useGetBlogByCountryQuery,
  useGetBlogByAuthorQuery,
  useGetBlogByGroupQuery,
} = blogApi;
