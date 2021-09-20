import React from "react";
import { useRef } from "react";
import { useAppProvider } from "./Context";

const Search = () => {
  const onChange = useRef();
  const { setSearch } = useAppProvider();

  return (
    <div>
      <h1>Home</h1>
      <input
        type="text"
        ref={onChange}
        onChange={() => setSearch(onChange.current.value)}
      />
      <button>Submit</button>
    </div>
  );
};

export default Search;
