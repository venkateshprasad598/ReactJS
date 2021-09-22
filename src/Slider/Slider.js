import React from "react";
import data from "./SliderData";
import { useState, useEffect } from "react";
import "./Slider.css";

const Slider = () => {
  const [list, setList] = useState(data);
  const [value, setValue] = useState(0);
  // const [value, setValue] = useState(0);
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

  return (
    <div className="slider">
      {list.map((data, index) => {
        const { name, job, desc, img } = data;
        let position = "next";
        if (index == value) {
          position = "present";
        }
        if (index == value - 1 || (value == 0 && index == list.length - 1)) {
          position = "pre";
        }

        return (
          <div className={`slide ${position}`}>
            <img src={img} height="100px" />
            <h1>{name}</h1>
            {job}
            <p>{desc}</p>
            <button onClick={decrease}>Previous</button>
            <button onClick={increase}>Next</button>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
