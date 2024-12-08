import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Login-Signup.css";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log("Login Data", values);
      alert("Login Successful");
    },
  });

  return (
    <div className="auth-container">
      <h2 className="auth-title">Welcome Back</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && <p className="error">{formik.errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password && <p className="error">{formik.errors.password}</p>}
        </div>
        <button type="submit" className="btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
