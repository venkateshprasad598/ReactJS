import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { reducer } from "./Redux/reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
// import { AppProvider } from "./Cocktail/Context";
import { rootReducer } from "./Redux/reducer";
const store = createStore(rootReducer);

// ReactDOM.render(
//   <React.StrictMode>
//     <AppProvider>
//       <App />
//     </AppProvider>
//   </React.StrictMode>,
//   document.getElementById("root")

// *********************REDUX ****************************
// ******************* SIMPLE ****************************
// Normal One
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// *********************CART ****************************

// CART
// import ReactDOM from "react-dom";
// import React from "react";
// import App from "./App";
// import { AppProvider } from "./Cart/Context";

// ReactDOM.render(
//   <AppProvider>
//     <App />
//   </AppProvider>,
//   document.getElementById("root")
// );
// *********************Sliders ****************************
// import ReactDOM from "react-dom";
// import React from "react";
// import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));
