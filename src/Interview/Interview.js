import React from "react";
import Check from "./Check";
import { useState } from "react";
import { useMemo } from "react";
import { Component } from "react";

// const Interview = () => {
//   const [count, setCou] = useState(0);

//   const meno = useMemo(() => {
//     return <Check />;
//   }, []);
//   return (
//     <div>
//       <h1>count : {count}</h1>
//       <button onClick={() => setCou(count + 1)}>Inc</button>
//       <Check />
//       {meno}
//     </div>
//   );
// };

// export default Interview;
class Interview extends Component {
  constructor() {
    super();
    this.state = {
      val: 1,
    };
  }
  handleClick = () => {
    this.setState({ val: this.state.val + 1 });
  };
  render() {
    return (
      <>
        <h1>Count : {this.state.val}</h1>
        <button onClick={this.handleClick}>Inc</button>
        <Check />
      </>
    );
  }
}
export default Interview;
