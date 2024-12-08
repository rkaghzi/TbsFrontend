import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Login-Signup.css";

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log("Signup Data", values);
      alert("Signup Successful");
    },
  });

  return (
    <div className="auth-container">
      <h2 className="auth-title">Create Your Account</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name && <p className="error">{formik.errors.name}</p>}
        </div>
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
        <button type="submit" className="btn-primary">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
