import "./App.css";
import { useEffect } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Employee from "./components/Employee";
import Category from "./components/Category";
import Profile from "./components/Profile";
import AddCategory from "./components/AddCategory";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import Start from "./components/Start";
import EmployeeLogin from "./components/EmployeeLogin";
import EmployeeDetail from "./components/EmployeeDetail";
import { Axios } from "axios";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  // useEffect(() => {
  //   Axios.get("http://localhost:3000/varify")
  //     .then((result) => {
  //       if (result.data.Status) {
  //         if (role === "admin") {
  //           navigate("/dashboard");
  //         } else {
  //           navigate("employee_detail/" + result.data.id);
  //         }
  //       } else {
  //         navigate("/start");
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/adminlogin" element={<Login />} />
        <Route path="/employee_login" element={<EmployeeLogin />} />
        <Route path="employee_detail/:id" element={<EmployeeDetail />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="" element={<Home />} /> {/* Default inside Dashboard */}
          <Route path="employee" element={<Employee />} />
          <Route path="category" element={<Category />} />
          <Route path="profile" element={<Profile />} />
          <Route path="add_category" element={<AddCategory />} />
          <Route path="add_employee" element={<AddEmployee />} />
          <Route path="edit_employee/:id" element={<EditEmployee />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
