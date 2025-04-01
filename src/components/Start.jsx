import React from "react";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Start = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:3000/varify")
      .then((result) => {
        if (result.data.Status) {
          if (role === "admin") {
            navigate("/dashboard");
          } else {
            navigate("employee_detail/" + result.data.id);
          }
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
      <div className="p-4 rounded loginForm shadow-lg">
        <h2 className="text-center text-primary fw-bold"> Login as</h2>
        <div className="d-flex justify-content-between mt-5 mb-2">
          <button
            type="button"
            className="btn btn-primary  fw-bold"
            onClick={() => {
              navigate("/employee_login");
            }}
          >
            Employee
          </button>
          <button
            type="button"
            className="btn btn-success fw-bold"
            onClick={() => {
              navigate("/adminlogin");
            }}
          >
            Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
