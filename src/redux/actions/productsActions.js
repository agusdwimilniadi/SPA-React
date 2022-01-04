import { ActionTypes } from "../contants/action-types";
export const setPost = (post) => {
  return {
    type: ActionTypes.SET_POST,
    payload: post,
  };
};

export const selectedPost = (post) => {
  return {
    type: ActionTypes.SELECTED_POST,
    payload: post,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_POST,
  };
};
