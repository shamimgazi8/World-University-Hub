"use client";
import { Field, Form, Formik } from "formik";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import Cookies from "js-cookie";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import img from "../../../public/images/miscellaneous/login.png";
import * as Yup from "yup";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useSignInMutation } from "@/appstore/user/auth/auth-api";
import { Spin, message } from "antd";
import { redirect } from "next/navigation";

const LoginPage = () => {
  const [hasCookie, setHasCookie] = useState<any>();
  const [passwordType, setPasswordType] = useState("password");
  const [login, { isLoading }] = useSignInMutation();
  const [parent] = useAutoAnimate();

  const loginConfirm = Cookies.get("userToken");
  console.log(loginConfirm, "loginConfirm");

  const signInInit = {
    username: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const loginHandler = async (values: any) => {
    try {
      const response: any = await login(values);

      if (response.error) {
        if (response.error.status === 400) {
          message.error(response.error.data.message);
        } else {
          message.error(
            response.error.data.message
              ? response.error.data.message
              : "Something went wront. Please try again!"
          );
        }
      } else {
        message.success("Login Successfully!");
        window.location.href = "/user/dashboard";
      }
    } catch (error) {}
  };
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
            <h4 className="mb-2">Welcome Back to University Hub</h4>
            <div>
              <span className="font-medium">New Here? </span>
              <Link href="/signup" className="text-[#7367f0]  hover:underline">
                Create an Account
              </Link>
            </div>
          </div>

          <Formik
            initialValues={signInInit}
            enableReinitialize={true}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              loginHandler(values);
            }}
          >
            {({ values, errors, touched }) => (
              <Form className="w-full">
                <div className=" gap-x-4 gap-y-10">
                  <div ref={parent} className="form_group col-span-2 relative">
                    <label htmlFor="username" className="font-medium">
                      Username <span className="text-danger">*</span>
                    </label>
                    <Field
                      type="text"
                      name="username"
                      placeholder="Username"
                      className={`border mt-1 px-4 py-2 w-full ${
                        errors?.username && touched?.username
                          ? "border-red-500"
                          : undefined
                      }`}
                    />
                    {errors?.username && touched?.username ? (
                      <div className="text-danger">{errors?.username}</div>
                    ) : null}
                  </div>

                  <div className="col-span-2 relative mt-4" ref={parent}>
                    <div className="flex justify-between gap-2">
                      <label htmlFor="">
                        Password <span className="text-danger">*</span>
                      </label>
                      {/* <Link
                        href="/forgot-password"
                        className="font-normal text-sm  text-[#7367f0]  hover:underline"
                      >
                        Forgot Password?
                      </Link> */}
                    </div>
                    <div className="relative">
                      <Field
                        type={passwordType}
                        name="password"
                        className={`border mt-1 px-4 py-2 w-full ${
                          errors?.password && touched?.password
                            ? "border-red-500"
                            : undefined
                        }`}
                        placeholder="Password"
                        value={values?.password ?? ""}
                      />

                      <div
                        className="absolute right-2 top-[50%] -translate-y-[50%]"
                        onClick={() =>
                          setPasswordType(
                            passwordType == "password" ? "text" : "password"
                          )
                        }
                      >
                        {passwordType === "text" ? (
                          <AiOutlineEye className="text-xl cursor-pointer" />
                        ) : (
                          <AiOutlineEyeInvisible className="text-xl cursor-pointer" />
                        )}
                      </div>
                    </div>
                    {errors?.password && touched?.password ? (
                      <div className="text-danger">{errors?.password}</div>
                    ) : null}
                  </div>
                </div>

                <button
                  type="submit"
                  className={` w-full mt-5 mb-4 ${
                    isLoading ? "disabled btn-secondary" : "btn btn-primary"
                  }`}
                >
                  {isLoading ? (
                    <button className=" w-full mt-5 mb-4 p-2 border ">
                      {" "}
                      <Spin className=" text-white z-50" />{" "}
                    </button>
                  ) : (
                    "Log In"
                  )}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
