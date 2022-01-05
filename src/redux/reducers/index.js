import { combineReducers } from "redux";
import {
  postReducer,
  selectedPostReducer,
  selectedUserReducer,
} from "./postReducer";

const reducers = combineReducers({
  allPost: postReducer,
  post: selectedPostReducer,
  user: selectedUserReducer,
});

export default reducers;
