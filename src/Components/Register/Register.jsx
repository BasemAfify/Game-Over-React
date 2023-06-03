import React, { useState } from "react";
import styles from "./Register.module.css";
import logo from "../../assets/gaming.ebaf2ffc84f4451d.jpg";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";


export default function Register() {
  const [messageError, setmessageError] = useState("")
  const [isloading, setisloading] = useState(false);
  let navigate = useNavigate();
  
  async function handleRegister(values) {
    setisloading(true);
    let {data} = await axios.post(
      `https://route-ecommerce.onrender.com/api/v1/auth/signup`,values
    ).catch((error)=>setmessageError(
          `${error.respose.data.errors.msg}:${error.respose.data.errors.param}`
    ));
    if (data.message === "success") {
      setisloading(false)
      navigate("/login");

      
    }
  }
  let validationSchema = yup.object({
    name: yup
      .string()
      .required("name is required")
      .min(3, "name min length is 3")
      .max(10, "name max length is 10"),
    email: yup.string().required("email is required").email("email is invalid"),
    password: yup
      .string()
      .required("password is required")
      .matches(
        /^[A-Z][a-z0-9]{5,10}$/,
        "password must start with uppercase character & must between 5-10 characters "
      ),
    rePassword: yup
      .string()
      .required("rePassword is required")
      .oneOf([yup.ref("password")], "rePassword is invalid"),
    phone: yup
      .string()
      .required("phone is required")
      .matches(
        /^01[0125][0-9]{8}$/,
        "phone number must me egyption valid phone number"
      ),
    age: yup
      .number()
      .required("age is required")
      .min(10).max(80)
  });


  let formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
      rePassword: "",
    },
    validationSchema,
    onSubmit: handleRegister,
  });

  return (
    <>
      <div className="row   register-height shadow text-white mt-5 pt-4">
        <div className="col-md-6">
          <img className="w-100 h-100" src={logo} alt="" />
        </div>
        <div className="col-md-6 showDetails">
          <h4 className="text-center my-3">Create My Account</h4>
          <form onSubmit={formik.handleSubmit}>
            <input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
              placeholder="Name"
              name="name"
              className="my-3 text-white form-control bg-black border-0"
              type="text"
            />
            {formik.errors.name && formik.touched.name ? (
              <div>{formik.errors.name} </div>
            ) : null}
            <input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="Email Address"
              name="email"
              className="my-3 form-control text-white bg-black border-0"
              type="email"
            />
            {formik.errors.email && formik.touched.email ? (
              <div>{formik.errors.email} </div>
            ) : null}
            <input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="Password"
              name="password"
              className="my-3 form-control bg-black text-white border-0"
              type="password"
            />
            {formik.errors.password && formik.touched.password ? (
              <div className="">{formik.errors.password} </div>
            ) : null}
            <input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.rePassword}
              className="my-3 form-control bg-black text-white border-0"
              type="password"
              placeholder="rePassword"
              name="rePassword"
              id="rePassword"
            />
            {formik.errors.rePassword && formik.touched.rePassword ? (
              <div>{formik.errors.rePassword}</div>
            ) : null}
            <input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.phone}
              placeholder="Phone"
              name="phone"
              className="my-3  form-control bg-black border-0 text-white"
              type="tel"
            />
            {formik.errors.phone && formik.touched.phone ? (
              <div>{formik.errors.phone} </div>
            ) : null}
            <input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Age"
              className="my-3 form-control bg-black border-0 text-white"
              type="number"
              name="age"
            />
            {formik.errors.age && formik.touched.age ? (
              <div>{formik.errors.age} </div>
            ) : null}
            {isloading ? (
              <button className="my-3  border border-black form-control bg-secondary text-white">
                <i className="fas fa-spinner fa-spin"></i>
              </button>
            ) : (
              <button className="my-3  border border-black form-control bg-secondary text-white">
                Create Account
              </button>
            )}
          </form>
          <p className="text-muted text-center">
            This site is protected by reCAPTCHA and the Google{" "}
            <a target="_blank" href="https://policies.google.com/privacy">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a target="_blank" href="https://policies.google.com/terms">
              Terms of Service
            </a>{" "}
            apply.
          </p>
          <hr />
          <p className="text-center">
            Already a member?{" "}
            <Link to="/login " className="pointer">
              Log In{"> "}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
