import React from "react";
import Check from "./Check";
import { useState } from "react";
import { useMemo } from "react";
// import { Component } from "react";
// import { PureComponent } from "react";
import "./Interview.css";

const Interview = () => {
  const [info, setInfo] = useState(true);
  const [count, setCount] = useState(0);
  let message =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda non odit similique quas reprehenderit cum culpa? Totam harum commodi accusamus velit fuga molestias iure magnam consectetur, vero, iusto corporis amet? O what the heck is goin on boy, let's get this fish ASAP";
  return (
    <div>
      {info ? message.substring(0, 100) + "..." : message}
      <button onClick={() => setInfo(!info)}>
        {info ? "Readmore" : "ShowLess"}
      </button>
      <div className={info ? "home active" : "home"}>
        <div>
          <h1>count : {count}</h1>
          <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
      </div>
    </div>
  );
};

export default Interview;
