import { ActionTypes } from "../contants/action-types";

const initialState = {
  post: [],
};
export const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_POST:
      return { ...state, post: payload };

    default:
      return state;
  }
};

export const selectedPostReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_POST:
      return { ...state, ...payload };
    default:
      return state;
  }
};
