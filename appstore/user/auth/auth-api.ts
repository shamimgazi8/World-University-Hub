import { apiSlice } from "@/appstore/api-slice";
import Cookies from "js-cookie";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    signIn: build.mutation({
      query: (data) => ({
        url: "/student-auth/login",
        method: "POST",
        body: data,
        keepUnusedDataFor: 0,
      }),

      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          if (result) {
            Cookies.remove("userToken");
            Cookies.remove("refreshToken");
            Cookies.set("userToken", result.data.accessToken);
            Cookies.set("refreshToken", result.data.refreshToken);
          }
          window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/user/dashboard`;
        } catch (error) {
          //
        }
      },
    }),
    signUp: build.mutation({
      query: (data) => ({
        url: "/student-auth/signup",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;

          if (result) {
            window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/verify-otp`;
          }
        } catch (error) {
          //
        }
      },
    }),
    changePassword: build.mutation({
      query: (data) => ({
        url: "/student-auth/change-password",
        method: "POST",
        body: data,
      }),
    }),
    updateProfile: build.mutation({
      query: (data) => ({
        url: "/student-auth/update-profile",
        method: "POST",
        body: data,
      }),
    }),

    profile: build.query({
      query: (queryString) => {
        return "/student-auth/profile";
      },
      providesTags: ["shortListData"],
      keepUnusedDataFor: 10,
    }),
    confirmOtp: build.query({
      query: (queryString) => {
        return `/student-auth/signup-confirm${queryString}`;
      },
    }),
    logout: build.query({
      query: () => "/student-auth/logout",
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;

          if (result) {
            Cookies.remove("userToken");
            Cookies.remove("refreshToken");
          }
          window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/login`;
        } catch (error) {
          //
        }
      },
    }),
  }),
});

export const {
  useSignInMutation,
  useSignUpMutation,
  useProfileQuery,
  useLogoutQuery,
  useChangePasswordMutation,
  useConfirmOtpQuery,
  useUpdateProfileMutation,
} = authApi;
