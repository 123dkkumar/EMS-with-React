import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Employee = () => {
  const [employee, setEmployee] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/employee")
      .then((result) => {
        if (result.data.Status) {
          setEmployee(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/auth/delete_employee/${id}`)
      .then((result) => {
        if (result.data.Status) {
          window.location.reload();
        } else {
          alert(result.data.Error);
        }
      });
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="text-primary">Employee List</h3>
        <Link to="/dashboard/add_employee" className="btn btn-success fw-bold">
          + Add Employee
        </Link>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-hover shadow-sm">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Email</th>
              <th>Address</th>
              <th>Salary (Rs.)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((c) => (
              <tr key={c.id}>
                <td className="align-middle">{c.name}</td>
                <td className="align-middle">
                  <img
                    src={`http://localhost:3000/images/${c.image}`}
                    alt="Employee"
                    className="employee-img"
                  />
                </td>
                <td className="align-middle">{c.email}</td>
                <td className="align-middle">{c.address}</td>
                <td className="align-middle">{c.salary}</td>
                <td className="align-middle">
                  <Link
                    to={`/dashboard/edit_employee/${c.id}`}
                    className="btn btn-sm btn-info me-2"
                  >
                    ✏️ Edit
                  </Link>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(c.id)}
                  >
                    🗑️ Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employee;
