import { combineReducers } from "redux";
import { postReducer, selectedPostReducer } from "./postReducer";

const reducers = combineReducers({
  allPost: postReducer,
  post: selectedPostReducer,
});

export default reducers;
