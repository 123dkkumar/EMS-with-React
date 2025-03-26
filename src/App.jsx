import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employee from "./components/Employee";
import Category from "./components/Category";
import Profile from "./components/Profile";
import AddCategory from "./components/AddCategory";
import AddEmployee from "./components/AddEmployee";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login Page */}
        <Route path="/adminlogin" element={<Login />} />

        {/* 🛠️ Fix: Nested Routes Inside Dashboard */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Home />} /> {/* Default inside Dashboard */}
          <Route path="employee" element={<Employee />} />
          <Route path="category" element={<Category />} />
          <Route path="profile" element={<Profile />} />
          <Route path="add_category" element={<AddCategory />} />
          <Route path="add_employee" element={<AddEmployee />} />
        </Route>
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
