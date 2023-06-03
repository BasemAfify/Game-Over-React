import React, { useState } from "react";
import styles from "./Login.module.css";
import logo from "../../assets/gaming.ebaf2ffc84f4451d.jpg";
import logo1 from "../../assets/logo.png";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [messageError, setmessageError] = useState("");
  const [isloading, setisloading] = useState(false);
  let navigate = useNavigate();

  async function handleLogin(values) {
    setisloading(true);
    let { data } = await axios
      .post(`https://route-ecommerce.onrender.com/api/v1/auth/signin`, values)
      .catch((error) =>
        setmessageError(
          `${error.respose.data.errors.msg}:${error.respose.data.errors.param}`
        )
      );
    if (data.message === "success") {
      setisloading(false);
      navigate("/");
      console.log(data);
      localStorage.setItem("token",data.token)
    }
  }
  let validationSchema = yup.object({

    email: yup.string().required("email is required").email("email is invalid"),
    password: yup
      .string()
      .required("password is required")
      .matches(
        /^[A-Z][a-z0-9]{5,10}$/,
        "password is invalid "
      ),

  });

  let formik = useFormik({
    initialValues: {

      email: "",
      password: "",

    },
    validationSchema,
    onSubmit: handleLogin,
  });

  return (
    <>
      <div className="row   register-height shadow text-white mt-5 pt-4">
        <div className="col-md-6">
          <img className="w-100 h-100" src={logo} alt="" />
        </div>
        <div className="col-md-6 showDetails ">
          <div className="d-flex justify-content-center align-items-center">
          <img className="w-25 "    src={logo1} alt="" />
          </div>
          <h4 className="text-center my-3">Create My Account</h4>
          <form onSubmit={formik.handleSubmit}>
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

            {isloading ? (
              <button className="my-3  border border-black form-control bg-secondary text-white">
                <i className="fas fa-spinner fa-spin"></i>
              </button>
            ) : (
              <button className="my-3  border border-black form-control bg-secondary text-white">
                Login
              </button>
            )}
          </form>

          <hr />
          <p className="text-center">
            Not a member yet?{" "}
            <Link to="/register " className="pointer">
              Create Account{"> "}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
