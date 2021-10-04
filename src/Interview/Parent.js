import React, { Component, useMemo, useState } from "react";
import Child from "./Child";

// const Parent = () => {
//   const [count, setCount] = useState(0);
//   const increaseCount = () => {
//     setCount(count + 1);
//   };

//   const memo = useMemo(() => {
//     return <Child />;
//   }, []);
//   return (
//     <div>
//       <h1>Count : {count}</h1>
//       <button onClick={increaseCount}>PlusPlus</button>
//       {memo}
//     </div>
//   );
// };

// export default Parent;
class Parent extends Component {
  state = {
    count: 0,
  };
  IncreaseCount = () => {
    this.setState((pre) => {
      return {
        count: pre.count + 0,
      };
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count !== nextState.count) {
      return false;
    } else {
      return true;
    }
  }
  render() {
    return (
      <div>
        <h1>count : {this.state.count}</h1>
        <button onClick={this.IncreaseCount}>Increase</button>
        <Child />
      </div>
    );
  }
}
export default Parent;
