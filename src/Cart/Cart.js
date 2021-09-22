import React from "react";
import data from "./CartData";
import { useState } from "react";
import { useAppProvider } from "./Context";
// import Items from "./Items";

const Cart = () => {
  const [myData, setMyData] = useState(data);
  const value = useAppProvider();
  console.log(value.data);
  const AddToCart = (id) => {
    const filter = data.filter((num) => num.id === id);
    console.log(filter[0]);
    value.dispatch({ type: "ADD", items: { ...filter[0] } });
  };

  return (
    <div className="cart">
      <h1>Counter : {value.data.items.length}</h1>
      {myData.map((data) => {
        const { name, img, desc, job, id } = data;
        return (
          <div key={id} className="cart__items">
            <img src={img} height="100px" />
            <h2>{name}</h2>
            <h3>{job}</h3>
            <p>{desc}</p>
            <button onClick={() => AddToCart(id)}>Add to Cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
