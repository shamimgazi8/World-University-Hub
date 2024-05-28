"use client";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Field, Form, Formik } from "formik";
import Image from "next/image";
import * as Yup from "yup";
import img from "../../../public/images/miscellaneous/forgot-password.png";
import Link from "next/link";

const ForgotPasswordPage = () => {
  const [parent] = useAutoAnimate();

  const signInInit = {
    email: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
  });

  const forgotPasswordHandler = async (values: any) => {};
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
            <h4 className="mb-2">Forgot Password?</h4>
            <div>
              <span className="font-medium">Remember your password? </span>
              <Link href="/login" className="text-[#7367f0]  hover:underline">
                Login here
              </Link>
            </div>
          </div>

          <Formik
            initialValues={signInInit}
            enableReinitialize={true}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              forgotPasswordHandler(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className="w-full">
                <div className=" gap-x-4 gap-y-10">
                  <div ref={parent} className="form_group col-span-2 relative">
                    <label htmlFor="email" className="font-medium">
                      Email Address <span className="text-danger">*</span>
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
                </div>

                <button
                  type="submit"
                  className={`btn btn-primary w-full mt-5 mb-4 `}
                >
                  Reset Password
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
