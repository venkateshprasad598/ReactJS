import { createContext } from "react";
import { useContext, useReducer } from "react";
import { initialState } from "./Reducer";
import { reducer } from "./Reducer";

const myContext = createContext();

export const AppProvider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, initialState);
  return (
    <myContext.Provider value={{ data, dispatch }}>
      {children}
    </myContext.Provider>
  );
};

export const useAppProvider = () => useContext(myContext);
