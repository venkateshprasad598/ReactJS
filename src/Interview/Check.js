import React from "react";
import { useState, useEffect } from "react";
let renderCount = 0;
const Check = () => {
  useEffect(() => {
    renderCount++;
  });

  return (
    <div>
      <h1>num : {renderCount}</h1>
    </div>
  );
};

export default Check;
