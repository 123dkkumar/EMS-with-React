import axios from "axios";
import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Category = () => {
  //const [category, setCategory] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/category")
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Category Lists</h3>
      </div>
      <Link to="/dashboard/add_category" className="btn btn-success fw-bold">
        Add Category
      </Link>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default Category;
