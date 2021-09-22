import React from "react";
import { useAppProvider } from "./Context";

const Items = () => {
  const { data } = useAppProvider();
  console.log(data.items);
  return (
    <div>
      {data.items.map((data) => {
        const { name, img, desc, job, id } = data;
        return (
          <div key={id} className="cart__items">
            <img src={img} height="100px" />
            <h2>{name}</h2>
            <h3>{job}</h3>
            <p>{desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Items;
