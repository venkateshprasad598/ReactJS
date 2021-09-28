import React, { Component } from "react";
import { useState, useEffect } from "react";
// let renderCount = 0;
const Check = () => {
  console.log("Child");
  console.log("-------");
  // useEffect(() => {
  //   renderCount++;
  // });

  return (
    <div>
      <h1>Child</h1>
    </div>
  );
};

export default Check;
