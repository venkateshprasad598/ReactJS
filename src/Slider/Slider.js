import React from "react";
import data from "./SliderData";
import { useState, useEffect } from "react";

const Slider = () => {
  const [list, setList] = useState(data);
  const [value, setValue] = useState(0);
  const increase = () => {
    let inc = value + 1;
    if (inc > data.length - 1) {
      inc = 0;
    }
    setValue(inc);
  };
  const decrease = () => {
    let dec = value - 1;
    if (dec < 0) {
      dec = data.length - 1;
    }
    setValue(dec);
  };
  useEffect(() => {
    let cleanup = setTimeout(() => {
      let inc = value + 1;
      if (inc > data.length - 1) {
        inc = 0;
      }
      setValue(inc);
    }, 2000);
    return () => clearTimeout(cleanup);
  }, [value]);
  const { name, job, desc, img } = list[value];
  return (
    <div>
      <img src={img} height="100px" />
      <h1>{name}</h1>
      {job}
      <p>{desc}</p>
      <button onClick={decrease}>Previous</button>
      <button onClick={increase}>Next</button>
    </div>
  );
};

export default Slider;
