import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [category, setCategory] = useState([]);
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    salary: "",
    address: "",
    category_id: "",
  });

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

    axios
      .get("http://localhost:3000/auth/employee/" + id)
      .then((result) => {
        setEmployee({
          ...employee,
          name: result.data.Result[0].name,
          email: result.data.Result[0].email,
          address: result.data.Result[0].address,
          salary: result.data.Result[0].salary,
          category_id: result.data.Result[0].category_id,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3000/auth/edit_employee/" + id, employee)
      .then((result) => {
        if (result.data.Status) {
          navigate("/dashboard/employee");
        } else {
          alert(result.data.Errror);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border  ">
        <h2 className="text-center">Edit Employee</h2>
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
              value={employee.name}
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
              value={employee.email}
              autoComplete="off"
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
              value={employee.salary}
              placeholder="Enter Salary"
              className="form-control rounded-0"
              autoCapitalize="off"
            />
          </div>
          <div className="col-12 ">
            <label htmlFor="inputAddress" className="form-label">
              <strong>Address</strong>
            </label>
            <input
              onChange={(e) =>
                setEmployee({ ...employee, address: e.target.value })
              }
              type="text"
              id="inputAddress"
              value={employee.address}
              placeholder="1234 main st"
              className="form-control rounded-0"
              autoCapitalize="off"
            />
          </div>
          <div className="col-12 mb-3">
            <label htmlFor="category" className="form-label">
              <strong>Category</strong>
            </label>
            <select
              name="category"
              id="category"
              value={employee.category_id}
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

          <button type="submit" className="btn btn-primary w-100 fw-bold ">
            Edit Employee
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;
