import { combineReducers } from "redux";
const intiaState = {
  counter: 0,
};

const reducer = (state = intiaState, action) => {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DEC":
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

const myInitialState = {
  basket: 0,
};
const second = (state = myInitialState, action) => {
  switch (action.type) {
    case "LNC":
      return {
        ...state,
        basket: state.basket + 5,
      };
    case "PEC":
      return {
        ...state,
        basket: state.basket - 5,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  first: reducer,
  second: second,
});
