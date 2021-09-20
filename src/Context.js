import { createContext } from "react";
import { useContext } from "react";
import { useState, useEffect } from "react";

const myContext = createContext();
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
export const AppProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("a");
  console.log(search);

  const getFetch = async () => {
    setLoading(true);
    try {
      let response = await fetch(`${url}${search}`);
      let myData = await response.json();
      setData(myData);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFetch();
  }, [search]);

  return (
    <myContext.Provider value={{ data, isLoading, search, setSearch }}>
      {children}
    </myContext.Provider>
  );
};

export const useAppProvider = () => useContext(myContext);
