import React from "react";
import { useAppProvider } from "./Context";
import Drinks from "./Drinks";
const Home = () => {
  const data = useAppProvider();
  if (data.isLoading) {
    return <h1>Loading...</h1>;
  }
  if (data.data.drinks == null) {
    return <h1>No Match Found</h1>;
  } else {
    return (
      <div>
        {data.data.drinks.map((data) => {
          const { idDrink, strDrinkThumb, strCategory, strGlass } = data;
          return (
            <Drinks
              key={idDrink}
              id={idDrink}
              image={strDrinkThumb}
              category={strCategory}
              glass={strGlass}
            />
          );
        })}
      </div>
    );
  }
};

export default Home;
