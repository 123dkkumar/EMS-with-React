import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EmployeeLogin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/employee/employee_login", values)
      .then((result) => {
        if (result.data.loginStatus) {
          localStorage.setItem("valid", true);
          navigate("/employee_detail/" + result.data.id);
        } else {
          setError(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
      <div className="p-4 rounded loginForm shadow-lg">
        {error && <div className="alert alert-danger fw-bold">{error}</div>}
        <h2 className="text-center text-primary fw-bold">Employee Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="fw-bold">
              Email:
            </label>
            <input
              type="email"
              name="email"
              autoComplete="off"
              placeholder="Enter Email"
              className="form-control"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="fw-bold">
              Password:
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="form-control"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="tick" />
            <label
              className="form-check-label text-black fw-bold"
              htmlFor="tick"
            >
              Terms and conditions
            </label>
          </div>
          <button className="btn btn-primary w-100 fw-bold">Login</button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeLogin;
