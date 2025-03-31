import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css"; // Import the updated CSS file

const Category = () => {
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
    <div className="container mt-4">
      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="text-primary">Category List</h3>
        <Link to="/dashboard/add_category" className="btn btn-success fw-bold">
          + Add New Category
        </Link>
      </div>

      {/* Table Container */}
      <div className="table-container">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th className="text-center">Category Name</th>
            </tr>
          </thead>
          <tbody>
            {category.length > 0 ? (
              category.map((c) => (
                <tr key={c.id}>
                  <td className="text-center">{c.name}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="text-center text-muted">
                  No categories available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Category;
