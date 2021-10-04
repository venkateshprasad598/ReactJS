import React, { useEffect } from "react";
let sum = 0;
const Child = () => {
  useEffect(() => {
    sum++;
  });
  return (
    <div>
      <h1>Sum : {sum}</h1>
    </div>
  );
};
export default Child;
