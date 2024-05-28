"use client";
import { Field, Form, Formik } from "formik";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import Image from "next/image";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import img from "../../../public/images/miscellaneous/signup.png";
import * as Yup from "yup";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Link from "next/link";
import { useSignUpMutation } from "@/appstore/user/auth/auth-api";
import { Spin, message } from "antd";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const [userNameExist, setUserNameExist] = useState(false);
  const [parent] = useAutoAnimate();
  const navigate = useRouter();

  const [signUp, { isLoading }] = useSignUpMutation();

  const togglePasswordVisibility = (field: string) => {
    if (field === "password") {
      setPasswordType((prevType) =>
        prevType === "password" ? "text" : "password"
      );
    } else if (field === "confirmPassword") {
      setConfirmPasswordType((prevType) =>
        prevType === "password" ? "text" : "password"
      );
    }
  };

  const signInInit = {
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    gender: "PREFER_NOT_TO_SAY",
    dialingCode: "",
    username: "",
    password: "",
    confirmPassword: "",
  };
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Must be more than or equal 6 characters")
      .required("Password is required")
      .matches(
        /^(?=.*[0-9])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{6,}$/,
        "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    mobileNumber: Yup.string()
      .required("Mobile number is required")
      .min(9, "Mobile number not valid"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), undefined],
      "Password must match"
    ),
  });

  const signUpHandler = async (values: any) => {
    const payload = {
      firstName: values?.firstName,
      lastName: values?.lastName,
      email: values?.email,
      mobileNumber: values?.mobileNumber,
      gender: values?.gender,
      dialingCode: values?.dialingCode,
      username: values?.username,
      password: values?.password,
    };

    try {
      const response: any = await signUp(payload);

      if (response.error) {
        if (response.error.status === 400) {
          message.error(response.error.data.message);
          if (response.error.data.message == "Username already taken") {
            setUserNameExist(true);
          }
        } else {
          message.error(
            response.error.data.message
              ? response.error.data.message
              : "Something went wront. Please try again!"
          );
        }
      } else {
        navigate.push("/verify-otp");
      }
    } catch (error) {}
  };
  return (
    <div className="md:p-8 min-h-screen overflow-auto">
      <div className="grid lg:grid-cols-[1fr_550px] xl:grid-cols-[1fr_650px] lg:gap-6 xl:gap-12">
        <div className="hidden lg:flex lg:items-center xl:items-end justify-center bg-[#F8F7FA] rounded-2xl pt-10">
          <Image
            width={760}
            height={760}
            className="w-8/12"
            src={img}
            alt="login"
          />
        </div>

        <div className="flex flex-col h-full items-center justify-center p-2 md:p-6 md:px-[50px] lg:p-6">
          <div className="mb-10 text-center">
            <div className="mb-4 flex justify-center">
              <Image src="/misc/logo.png" width={220} height={40} alt="logo" />
            </div>
            <h4 className="mb-2">Welcome to University Hub</h4>
            <div>
              <span className="font-medium">Already Registered? </span>
              <Link href="/login" className="text-[#7367f0]  hover:underline">
                Login Here
              </Link>
            </div>
          </div>

          <Formik
            initialValues={signInInit}
            enableReinitialize={true}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              signUpHandler(values);
            }}
          >
            {({ values, errors, touched, setFieldValue }) => (
              <Form className="w-full">
                <div className=" gap-x-4 gap-y-10">
                  <div className="grid grid-cols-2 gap-5">
                    <div ref={parent} className="form_group relative">
                      <label htmlFor="firstName" className="font-medium">
                        First Name <span className="text-danger">*</span>
                      </label>
                      <Field
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        className={`border mt-1 px-4 py-2 w-full ${
                          errors?.firstName && touched?.firstName
                            ? "border-red-500"
                            : undefined
                        }`}
                      />
                      {errors?.firstName && touched?.firstName ? (
                        <div className="text-danger">{errors?.firstName}</div>
                      ) : null}
                    </div>
                    <div className="form_group relative">
                      <label htmlFor="lastName" className="font-medium">
                        Last Name
                      </label>
                      <Field
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        className="border mt-1 px-4 py-2 w-full"
                      />
                    </div>
                  </div>
                  <div
                    ref={parent}
                    className="form_group col-span-2 relative mt-3"
                  >
                    <label htmlFor="email" className="font-medium">
                      Email <span className="text-danger">*</span>
                    </label>
                    <Field
                      type="text"
                      name="email"
                      placeholder="Email"
                      className={`border mt-1 px-4 py-2 w-full ${
                        errors?.email && touched?.email
                          ? "border-red-500"
                          : undefined
                      }`}
                    />
                    {errors?.email && touched?.email ? (
                      <div className="text-danger">{errors?.email}</div>
                    ) : null}
                  </div>
                  <div
                    ref={parent}
                    className="form_group col-span-2 relative mt-3"
                  >
                    <label htmlFor="username" className="font-medium">
                      Username <span className="text-danger">*</span>
                    </label>
                    <Field
                      type="text"
                      name="username"
                      placeholder="Username"
                      className={`border mt-1 px-4 py-2 w-full ${
                        (errors?.username && touched?.username) || userNameExist
                          ? "border-red-500"
                          : undefined
                      }`}
                      onChange={(e: any) => {
                        setFieldValue("username", e.target.value);
                        setUserNameExist(false);
                      }}
                      value={values?.username ?? ""}
                    />
                    {errors?.username && touched?.username ? (
                      <div className="text-danger">{errors?.username}</div>
                    ) : null}
                    {userNameExist ? (
                      <div className="text-danger">Username already taken.</div>
                    ) : null}
                  </div>
                  <div
                    ref={parent}
                    className="form_group col-span-2 relative  mt-3"
                  >
                    <label htmlFor="mobileNumber" className="font-medium">
                      Mobile <span className="text-danger">*</span>
                    </label>

                    <PhoneInput
                      inputClass={`!w-full !h-auto py-2 !rounded-none !border ${
                        errors?.mobileNumber && touched?.mobileNumber
                          ? "!border-red-500"
                          : "!border-[#e5e7eb]"
                      }`}
                      country={"bd"}
                      value={values?.mobileNumber ?? undefined}
                      onChange={(phone) => {
                        setFieldValue("mobileNumber", phone);
                      }}
                      inputProps={{
                        name: "mobileNumber",
                        required: true,
                      }}
                    />
                    {errors?.mobileNumber && touched?.mobileNumber ? (
                      <div className="text-danger">{errors?.mobileNumber}</div>
                    ) : null}
                  </div>

                  <div className="grid grid-cols-2 gap-5 mt-3">
                    <div className="relative" ref={parent}>
                      <div className="flex justify-between gap-2">
                        <label htmlFor="">
                          Password <span className="text-danger">*</span>
                        </label>
                      </div>
                      <div className="relative">
                        <Field
                          autoComplete="new-password"
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
                          onClick={() => togglePasswordVisibility("password")}
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
                    <div className="relative" ref={parent}>
                      <div className="flex justify-between gap-2">
                        <label htmlFor="confirmPassword">
                          Confirm Password
                          <span className="text-danger">*</span>
                        </label>
                      </div>
                      <div className="relative">
                        <Field
                          autoComplete="new-password"
                          type={confirmPasswordType}
                          name="confirmPassword"
                          className={`border mt-1 px-4 py-2 w-full ${
                            errors?.confirmPassword && touched?.confirmPassword
                              ? "border-red-500"
                              : undefined
                          }`}
                          placeholder="Confirm Password"
                          value={values?.confirmPassword ?? ""}
                        />

                        <div
                          className="absolute right-2 top-[50%] -translate-y-[50%]"
                          onClick={() =>
                            togglePasswordVisibility("confirmPassword")
                          }
                        >
                          {confirmPasswordType === "text" ? (
                            <AiOutlineEye className="text-xl cursor-pointer" />
                          ) : (
                            <AiOutlineEyeInvisible className="text-xl cursor-pointer" />
                          )}
                        </div>
                      </div>
                      {errors?.confirmPassword && touched?.confirmPassword ? (
                        <div className="text-danger">
                          {errors?.confirmPassword}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className={`btn btn-primary w-full mt-5 mb-4 ${
                    isLoading ? "disabled" : ""
                  }`}
                >
                  {isLoading ? <Spin /> : "Sign Up"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
