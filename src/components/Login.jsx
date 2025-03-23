import React, { useState } from "react";
import "./style.css";
import axios from "axios";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/auth/adminlogin", values)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex flex justify-content-center align-items-center vh-100 loginPage">
      <div className="p-3 rounded w-25 border loginForm ">
        <h2>Login Page</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email :</strong>
            </label>
            <input
              type="email"
              name="email"
              autoComplete="off"
              placeholder="Enter Email"
              className="form-control rounded-0"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password :</strong>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="form-control rounded-0"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            />
          </div>
          <button className="btn btn-success w-100 rounded-0 fo fw-bold">
            Login
          </button>
          <div className="className=" mb-3>
            <input type="checkbox" name="tick" id="tick" className="mt-2" />
            <label htmlFor="password">
              <strong>You are agree with terms</strong>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
