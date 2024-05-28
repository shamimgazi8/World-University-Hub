"use client";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Field, Form, Formik } from "formik";
import Image from "next/image";
import * as Yup from "yup";
import img from "../../../public/images/miscellaneous/one-time-password.png";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useConfirmOtpQuery } from "@/appstore/user/auth/auth-api";
import { generateQueryString } from "@/helpers/utils";
import { message } from "antd";

const VerifyOTPPage = () => {
  const [parent] = useAutoAnimate();
  const [skip, setSkip] = useState(true);
  const navigate = useRouter();

  const validationSchema = Yup.object().shape({
    token: Yup.string().required("Token is required"),
  });

  const tokenParams = useSearchParams();

  const token = tokenParams.get("token");
  const queryParams: any = {
    token,
  };
  const queryString = generateQueryString(queryParams);
  const {
    data,
    isLoading: confirmLoading,
    isError,
  } = useConfirmOtpQuery(queryString, {
    skip,
  });
  const signInInit = {
    token,
  };
  // useEffect(() => {
  //   if (!isError) {
  //     message.success("Email verified.");
  //     navigate.push("/login");
  //   }
  // }, [isError]);

  const verifyOTPHandler = async (values: any) => {
    setSkip(false);
    if (!isError) {
      message.success("Email verified.");
      navigate.push("/login");
    }
  };
  console.log({ data });

  return (
    <div className="md:p-8 min-h-screen overflow-auto">
      <div className="min-h-[80%] grid lg:grid-cols-[1fr_550px] xl:grid-cols-[1fr_650px] lg:gap-6 xl:gap-12">
        <div className="hidden lg:flex lg:items-center xl:items-end justify-center bg-[#F8F7FA] rounded-2xl pt-10">
          <Image
            width={760}
            height={760}
            className="w-8/12"
            src={img}
            alt="login"
          />
        </div>

        <div className="flex flex-col h-full items-center justify-center p-5 md:p-12 md:px-[80px] lg:p-12">
          <div className="mb-10 text-center">
            <div className="mb-4 flex justify-center">
              <Image src="/misc/logo.png" width={220} height={40} alt="logo" />
            </div>
            <h4 className="mb-2">Verify Your Email Address</h4>
            <div>
              <span className="font-medium">
                We have sent a verification token to your email.
                <br />
                {/* Please enter the code below to access your profile! */}
              </span>
            </div>
            {/* <div>
              <span className="font-medium">Don't received email? </span>
              <Link href="" className="text-[#7367f0]  hover:underline">
                Resend
              </Link>
            </div> */}
          </div>
          {token && (
            <Formik
              initialValues={signInInit}
              enableReinitialize={true}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                verifyOTPHandler(values);
              }}
            >
              {({ errors, touched }) => (
                <Form className="w-full">
                  <div className=" gap-x-4 gap-y-10">
                    <div
                      ref={parent}
                      className="form_group col-span-2 relative"
                    >
                      <label htmlFor="otp" className="font-medium">
                        OTP Token<span className="text-danger">*</span>
                      </label>
                      <Field
                        type="text"
                        name="token"
                        disabled
                        placeholder="Token"
                        className={`border mt-1 px-4 py-2 w-full ${
                          errors?.token && touched?.token
                            ? "border-red-500"
                            : undefined
                        }`}
                      />
                      {errors?.token && touched?.token ? (
                        <div className="text-danger">{errors?.token}</div>
                      ) : null}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className={`btn btn-primary w-full mt-5 mb-4 `}
                  >
                    Verify
                  </button>
                </Form>
              )}
            </Formik>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerifyOTPPage;
