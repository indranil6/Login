import * as types from "../action-types";
import axios from "axios";

export const login = (formData, callback) => {
  return async (dispatch) => {
    axios({
      method: "POST",
      url: "https://developer.clirnet.com/knowledge/rnv11/Authrjs/loginEmail",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        callback(response.data);
        if (response) {
          if (response.data) {
            dispatch({
              type: types.LOGIN_SUCCESS,
              payload: response.data,
            });
          }
        }
      })
      .catch((error) => {
        callback(error);
        dispatch({
          type: types.LOGIN_REJECTED,
          payload: error,
        });
      });
  };
};
