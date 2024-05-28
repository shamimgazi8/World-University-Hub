"use client";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Field, Form, Formik } from "formik";
import Image from "next/image";
import * as Yup from "yup";
import img from "../../../public/images/miscellaneous/reset-password.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";

const ResetPasswordPage = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const [parent] = useAutoAnimate();

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
    password: "",
    confirmPassword: "",
  };
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, "Must be more than or equal 6 characters")
      .required("Password is required")
      .matches(
        /^(?=.*[0-9])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{6,}$/,
        "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),

    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), undefined],
      "Password must match"
    ),
  });

  const resetPasswordHandler = async (values: any) => {};
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
            <h4 className="mb-2">Create New Password</h4>
            <div className="font-medium">
              Your new password must different from previous used password
            </div>
          </div>

          <Formik
            initialValues={signInInit}
            enableReinitialize={true}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              resetPasswordHandler(values);
            }}
          >
            {({ values, errors, touched }) => (
              <Form className="w-full">
                <div className=" gap-x-4 gap-y-10">
                  <div className="relative" ref={parent}>
                    <div className="flex justify-between gap-2">
                      <label htmlFor="">
                        New Password <span className="text-danger">*</span>
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
                  <div className="relative mt-4" ref={parent}>
                    <div className="flex justify-between gap-2">
                      <label htmlFor="confirmPassword">
                        Confirm New Password
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

                <button
                  type="submit"
                  className={`btn btn-primary w-full mt-5 mb-4 `}
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
