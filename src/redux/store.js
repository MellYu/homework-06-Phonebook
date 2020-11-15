// import { createStore, combineReducers } from "redux";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import phoneReducer from "./phonebook/phonebookReducer";

const rootReduser = combineReducers({
  phonebook: phoneReducer,
});


// Without toolkit
// const store = createStore(
//   rootReduser,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );


// With toolkit
const store = configureStore({
  reducer: rootReduser,
});
export default store;
