import { createStore } from "redux";
import { Reducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const myStore = createStore(Reducer, composeWithDevTools())

export default myStore