import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const Item = () => {
  const { id } = useParams();
  const [item, setItem] = useState();
  const [isLoading, setLoading] = useState(true);
  console.log(item);
  const getFetch = async () => {
    const response = await fetch(`${url}${id}`);
    const myData = await response.json();
    setItem(myData.drinks);
    setLoading(false);
  };
  useEffect(() => {
    getFetch();
  }, []);

  if (isLoading) {
    return <h1>Loading..</h1>;
  }
  if (!item) {
    return <h1>No Item Found</h1>;
  } else {
    return (
      <div>
        {item.map((data) => {
          const {
            strAlcoholic,
            strCategory,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strDrinkThumb,
          } = data;
          return (
            <div>
              <img src={strDrinkThumb} height="200px" />
              <h1>Category : {strCategory}</h1>
              <h2>Alcohol : {strAlcoholic}</h2>
              <p>
                Ingrediants : {strIngredient1}, {strIngredient2},{" "}
                {strIngredient3}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
};

export default Item;
