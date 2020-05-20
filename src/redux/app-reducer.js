import { auch } from "./auch-reducer";

const INITIALIZED_SUCCES = "INITIALIZED_SUCCES";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCES: {
      return {
        ...state,
        initialized: true,
      };
    }

    default:
      return state;
  }
};

export const initializedSucces = () => ({
  type: INITIALIZED_SUCCES,
});

export const initializeApp = () => {
  return (dispach) => {
    let promise = dispach(auch());
    promise.then(() => {
      dispach(initializedSucces());
    });
  };
};

export default appReducer;
