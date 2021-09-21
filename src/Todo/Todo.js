import React from "react";
import { useState } from "react";
import List from "./List";

const Todo = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEdit, setEdit] = useState(false);
  const [EditName, setEditName] = useState([]);
  console.log(name);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && isEdit) {
      const index = list.findIndex((data) => data.id === EditName[0].id);
      let person = [...list];
      person[index].title = name;
      setList(person);
      setEdit(!isEdit);
      setName("");
    } else {
      const myList = { id: new Date().getTime(), title: name };
      setList([...list, myList]);
      setName("");
    }
  };

  const handleClick = (num) => {
    setEdit(!isEdit);
    const filter = list.filter((data) => data.id === num);
    setName(filter[0].title);
    setEditName(filter);
  };

  const handleDelete = (num) => {
    const filter = list.filter((data) => data.id !== num);
    setList(filter);
  };

  return (
    <div>
      <h1>Todo</h1>
      <form action="">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleSubmit}>{isEdit ? "Edit" : "Submit"}</button>
      </form>
      <List list={list} edit={handleClick} deleteIt={handleDelete} />
    </div>
  );
};

export default Todo;
