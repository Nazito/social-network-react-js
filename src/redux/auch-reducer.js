import { authMeAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuch: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }

    default:
      return state;
  }
};

export const setAuchUserDataAC = (id, email, login, isAuch) => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuch },
});

export const auch = () => {
  return async (dispach) => {
    let response = await authMeAPI.onAuthMe();

    if (response.resultCode === 0) {
      let { id, email, login } = response.data;
      dispach(setAuchUserDataAC(id, email, login, true));
    }
  };
};

export const login = (email, password, rememberMe) => {
  return async (dispach) => {
    let response = await authMeAPI.login(email, password, rememberMe);

    if (response.data.resultCode === 0) {
      dispach(auch());
    } else {
      let message =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "some message";
      dispach(stopSubmit("login", { _error: message }));
    }
  };
};

export const logout = () => {
  return async (dispach) => {
    let response = await authMeAPI.logout();

    if (response.data.resultCode === 0) {
      dispach(setAuchUserDataAC(null, null, null, false));
    }
  };
};

export default authReducer;
