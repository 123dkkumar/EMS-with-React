import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/auth/add_category", { category })
      .then((result) => {
        if (result.data.Status) {
          navigate("/dashboard/category");
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex flex justify-content-center align-items-center vh-100">
      <div className="p-3 rounded w-25 border  ">
        <h2>Add Category</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="category">
              <strong>Category :</strong>
            </label>
            <input
              type="text"
              name="category"
              placeholder="Enter Category"
              className="form-control rounded-0"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <button className="btn btn-success w-100 rounded-0 fo fw-bold">
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
