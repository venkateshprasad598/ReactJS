import React from "react";

const List = ({ edit, list, deleteIt }) => {
  return (
    <div>
      {list.map((data) => {
        return (
          <div key={data.id}>
            <h1>{data.title}</h1>
            <button onClick={() => edit(data.id)}>Edit</button>
            <button onClick={() => deleteIt(data.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default List;
