"use client";
import { useChangePasswordMutation } from "@/appstore/user/auth/auth-api";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { message } from "antd";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "react-phone-input-2/lib/style.css";
import * as Yup from "yup";
const AccountSettingsPage = () => {
  const [oldPasswordType, setOldPasswordType] = useState("password");
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const [parent] = useAutoAnimate();
  const [changePassword, { isLoading }] = useChangePasswordMutation();
  const togglePasswordVisibility = (field: string) => {
    if (field === "password") {
      setPasswordType((prevType) =>
        prevType === "password" ? "text" : "password"
      );
    } else if (field === "confirmPassword") {
      setConfirmPasswordType((prevType) =>
        prevType === "password" ? "text" : "password"
      );
    } else if (field === "oldPassword") {
      setOldPasswordType((prevType) =>
        prevType === "password" ? "text" : "password"
      );
    }
  };

  const profileInit = {
    oldPassword: "",
    password: "",
    confirmPassword: "",
  };
  const validationSchema = Yup.object().shape({
    oldPassword: Yup.string().required("Old password is required"),
    password: Yup.string()
      .min(6, "Must be more than or equal 6 characters")
      .required("New password is required")
      .matches(
        /^(?=.*[0-9])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{6,}$/,
        "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),

    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), undefined],
      "Password must match"
    ),
  });

  const passwordHandler = async (values: any) => {
    const payload = {
      password: values?.password,
      oldPassword: values?.oldPassword,
    };
    try {
      const response: any = await changePassword(payload);

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
        message.success(response?.data?.message);
      }
    } catch (error) {
      message.error("Something went wront.");
    }
  };

  return (
    <div>
      <h4 className="mb-5">
        <span className="text-gradient">Change Password</span>
      </h4>

      <Formik
        initialValues={profileInit}
        enableReinitialize={true}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          passwordHandler(values);
        }}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form className="w-full">
            <div className="lg:max-w-sm gap-x-4 gap-y-10">
              <div className="relative" ref={parent}>
                <div className="flex justify-between gap-2">
                  <label htmlFor="">
                    Old Password <span className="text-danger">*</span>
                  </label>
                </div>
                <div className="relative">
                  <Field
                    type={oldPasswordType}
                    name="oldPassword"
                    className={`border mt-1 px-4 py-2 w-full ${
                      errors?.oldPassword && touched?.oldPassword
                        ? "border-red-500"
                        : undefined
                    }`}
                    placeholder="Old Password"
                    value={values?.oldPassword ?? ""}
                  />

                  <div
                    className="absolute right-2 top-[50%] -translate-y-[50%]"
                    onClick={() => togglePasswordVisibility("oldPassword")}
                  >
                    {oldPasswordType === "text" ? (
                      <AiOutlineEye className="text-xl cursor-pointer" />
                    ) : (
                      <AiOutlineEyeInvisible className="text-xl cursor-pointer" />
                    )}
                  </div>
                </div>
                {errors?.oldPassword && touched?.oldPassword ? (
                  <div className="text-danger">{errors?.oldPassword}</div>
                ) : null}
              </div>
              <div className="relative mt-4" ref={parent}>
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
                    onClick={() => togglePasswordVisibility("confirmPassword")}
                  >
                    {confirmPasswordType === "text" ? (
                      <AiOutlineEye className="text-xl cursor-pointer" />
                    ) : (
                      <AiOutlineEyeInvisible className="text-xl cursor-pointer" />
                    )}
                  </div>
                </div>
                {errors?.confirmPassword && touched?.confirmPassword ? (
                  <div className="text-danger">{errors?.confirmPassword}</div>
                ) : null}
              </div>
            </div>
            <div className="flex">
              <button
                type="submit"
                className={`btn btn-primary w-full md:w-1/4 mt-5 mb-3 ml-auto`}
              >
                Update
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AccountSettingsPage;
