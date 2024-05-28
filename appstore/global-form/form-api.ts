import { apiSlice } from "../api-slice";

export const contactApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    createContactForm: build.mutation({
      query: (data) => ({
        url: "/public/contact/create",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateContactFormMutation } = contactApi;
