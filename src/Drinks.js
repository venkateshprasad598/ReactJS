import React from "react";
import { Link } from "react-router-dom";

const Drinks = ({ id, image, category, glass }) => {
  return (
    <div>
      <h1>{id}</h1>
      <img src={image} height="300px " />
      <h2>{category}</h2>
      <p>{glass}</p>
      <Link to={`/item/${id}`}>View Details</Link>
      <h1>--------------------</h1>
    </div>
  );
};

export default Drinks;
