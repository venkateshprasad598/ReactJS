import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppProvider } from "./Cocktail/Context";
import { createStore } from "redux";
import reducer from "./Redux/reducer";
import { Provider } from "react-redux";
const store = createStore(reducer);
// console.log(store.getState());

// ReactDOM.render(
//   <React.StrictMode>
//     <AppProvider>
//       <App />
//     </AppProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
