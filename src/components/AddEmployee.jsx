import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    password: "",
    salary: "",
    address: "",
    image: "",
    category_id: "",
  });
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/category")
      .then((result) => {
        if (result.data.Status) {
          setCategory(result.data.Result);
        } else {
          alert(result.data.Errror);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", employee.name);
    formData.append("email", employee.email);
    formData.append("password", employee.password);
    formData.append("address", employee.address);
    formData.append("salary", employee.salary);
    formData.append("image", employee.image);
    formData.append("category_id", employee.category_id);

    axios
      .post("http://localhost:3000/auth/add_employee", formData)
      .then((result) => {
        if (result.data.Status) {
          navigate("/dashboard/employee");
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border  ">
        <h2 className="text-center">Add Employee</h2>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputName" className="form-level">
              <strong>Name </strong>
            </label>
            <input
              onChange={(e) =>
                setEmployee({ ...employee, name: e.target.value })
              }
              type="text"
              id="inputName"
              placeholder="Enter name"
              className="form-control rounded-0"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-level">
              <strong>Email</strong>
            </label>
            <input
              onChange={(e) =>
                setEmployee({ ...employee, email: e.target.value })
              }
              type="email"
              id="inputEmail4"
              placeholder="Enter Email"
              autoComplete="off"
              className="form-control rounded-0"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputPassword4" className="form-label">
              <strong>Password </strong>
            </label>
            <input
              onChange={(e) =>
                setEmployee({ ...employee, password: e.target.value })
              }
              type="password"
              id="inputPassword4"
              placeholder="Enter Password"
              className="form-control rounded-0"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputSalary" className="form-label">
              <strong>Salary</strong>
            </label>
            <input
              onChange={(e) =>
                setEmployee({ ...employee, salary: e.target.value })
              }
              type="text"
              id="inputSalary"
              placeholder="Enter Salary"
              className="form-control rounded-0"
              autoCapitalize="off"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              <strong>Address</strong>
            </label>
            <input
              onChange={(e) =>
                setEmployee({ ...employee, address: e.target.value })
              }
              type="text"
              id="inputAddress"
              placeholder="1234 main st"
              className="form-control rounded-0"
              autoCapitalize="off"
            />
          </div>
          <div className="col-12">
            <label htmlFor="category" className="form-label">
              <strong>Category</strong>
            </label>
            <select
              name="category"
              id="category"
              className="form-select"
              onChange={(e) =>
                setEmployee({ ...employee, category_id: e.target.value })
              }
            >
              {category.map((c) => {
                return <option value={c.id}>{c.name}</option>;
              })}
            </select>
          </div>
          <div className="col-12 mb-3">
            <label htmlFor="inputFile" className="form-label">
              <strong>Select Image</strong>
            </label>
            <input
              type="file"
              name="image"
              id="inputGroupFile01"
              className="form-control rounded-0"
              onChange={(e) =>
                setEmployee({ ...employee, image: e.target.files[0] })
              }
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 ">
            Add Employee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
