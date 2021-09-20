import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Redux = () => {
  const state = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  //   console.log(state);
  return (
    <div>
      <h1>Redux</h1>
      <h2> counter : {state}</h2>
      <button onClick={() => dispatch({ type: "INC" })}>Inc</button>
      <button onClick={() => dispatch({ type: "DEC" })}>Dec</button>
    </div>
  );
};

export default Redux;
