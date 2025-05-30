import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";
import "./style.css"; // Importing the CSS file

const Dashboard = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleLogout = () => {
    axios.get("http://localhost:3000/auth/logout").then((result) => {
      if (result.data.Status) {
        localStorage.removeItem("valid");
        navigate("/");
      }
    });
  };

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        {/* Sidebar */}
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 sidebar">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <Link
              to="/dashboard"
              className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none brand-name"
            >
              <span className="fs-5 fw-bolder d-none d-sm-inline">
                Code With Deepak
              </span>
            </Link>
            <ul
              className="gap-2 nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start fw-bold"
              id="menu"
            >
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link menu-item">
                  <i className="fs-4 bi-speedometer2"></i>
                  <span className="ms-2 d-none d-sm-inline">Dashboard</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dashboard/employee" className="nav-link menu-item">
                  <i className="fs-4 bi-people"></i>
                  <span className="ms-2 d-none d-sm-inline">
                    Manage Employees
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dashboard/category" className="nav-link menu-item">
                  <i className="fs-4 bi-columns"></i>
                  <span className="ms-2 d-none d-sm-inline">Category</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dashboard/profile" className="nav-link menu-item">
                  <i className="fs-4 bi-person"></i>
                  <span className="ms-2 d-none d-sm-inline">Profile</span>
                </Link>
              </li>
              <li className="nav-item" onClick={handleLogout}>
                <Link className="nav-link menu-item logout">
                  <i className="fs-4 bi-power"></i>
                  <span className="ms-2 d-none d-sm-inline">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="col p-0 m-0">
          <div className="p-2 d-flex justify-content-center shadow header">
            <h4>Employee Management System</h4>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
