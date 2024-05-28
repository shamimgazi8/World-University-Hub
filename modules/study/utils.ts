import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last Name is required"),
  //   mobile: Yup.string().required("Phone is required"),
  //   email: Yup.string().required("Email is required"),
  //   subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
  //   isAgree: Yup.bool().oneOf(
  //     [true],
  //     "Accept privacy policy & terms is required"
  //   ),
});
