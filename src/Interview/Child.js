import React from "react";
import PropTypes from "prop-types";

const Child = ({ name, age, title }) => {
  return (
    <div>
      <h1>{name}</h1>
      {age}
      {title.map((data) => {
        return (
          <div>
            <h1>{data.job}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Child;
