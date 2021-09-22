import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Redux = () => {
  const state = useSelector((myState) => myState.first.counter);
  console.log(state);
  const second = useSelector((myState) => myState.second.basket);
  console.log(state);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter : {state}</h1>
      <h1>Basket : {second}</h1>
      <button onClick={() => dispatch({ type: "DEC" })}>Decrease</button>
      <button onClick={() => dispatch({ type: "INC" })}>Increase</button>
      <button onClick={() => dispatch({ type: "PEC" })}>SEC Decrease</button>
      <button onClick={() => dispatch({ type: "LNC" })}>SEC Increase</button>
    </div>
  );
};

export default Redux;
