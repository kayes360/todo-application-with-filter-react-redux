import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "src/redux/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

//feature list
// ✔ 1. add todo with unique id
// ✔ 2.mark  as completed
// ✔ 3.choose priority
// ✔  i. red (high priority)
// ✔  ii. yellow (medium priority)
// ✔ iii. green (low priority)
// ✔ 4.delete todo item one by one
// ✔ 5.mark all task done at once
// ✔ 6. delete all complete todo at Once

//7.filter by status(all,incomplete,complete)
//8.filter by priority color(,green,red,yellow)

//9.show imcomplete task count
