import * as types from "../action-types";

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        userInfo: action.payload.data,
      };
    case types.LOGIN_REJECTED:
      return {
        ...state,
        userInfo: action.payload,
      };

    default:
      return state;
  }
};
