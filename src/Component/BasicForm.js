import { React } from "react";
import { useFormik } from "formik"
import * as yup from "yup";

const formValidationSchema = yup.object({
  password: yup.string()
  .min(8, "Need a strong password")
  .max(12, "Password is too lengthy")
  .required("Password cannot be blank"),
  email: yup.string()
  .min(17)
  .required("Email cannot be blank")
  .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Enter Valid Email")
})
export function BasicForm() {
  const formik = useFormik({
    initialValues: {email:"", password:""},
    validationSchema: formValidationSchema,
    onSubmit:(values)=>{
      console.log("onSubmit", values);
    }
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <input 
      id="email"
      name="email"
      value={formik.values.email}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      type="email" 
      placeholder="Email" 
      />
      {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
      <br />
      <input
      id="password"
      name="password"
      value={formik.values.password}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      type="password" 
      placeholder="Password" 
      />
      {formik.touched.password && formik.errors.password ? formik.errors.password : ""}
      <br />
      <button
      type="submit"
      >Submit</button>
    </form>
  );
}
