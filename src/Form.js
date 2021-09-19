import React from "react";

const Form = ({ click, handleClick, people, Edit, person }) => {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Eg : eggs"
          onChange={(e) => click(e.target.value)}
          value={person}
        />
      </form>
      <button onClick={handleClick}>Add item</button>
      <div>
        {people.map((data) => {
          const { id, name } = data;
          return (
            <div key={id}>
              <h1>{name}</h1>
              <button onClick={() => Edit(id)}>Edit</button>
              <button>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Form;
