import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const AddEmployee = () => {
  const [category, setCategory] = useState([]);

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

  return (
    <div className="d-flex flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border  ">
        <h2 className="text-center">Add Employee</h2>
        <form className="row g-1">
          <div className="col-12">
            <label htmlFor="inputName" className="form-level">
              <strong>Name </strong>
            </label>
            <input
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
            <select name="category" id="category" className="form-select">
              {category.map((c) => {
                return <option value={c.name}>{c.name}</option>;
              })}
            </select>
          </div>
          <div className="col-12 mb-3">
            <label htmlFor="inputFile" className="form-label">
              <strong>Select Image</strong>
            </label>
            <input
              type="file"
              id="inputGroupFile01"
              className="form-control rounded-0"
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
