const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
  dialogs: [
    { name: "Naz", id: 1 },
    { name: "Nick", id: 1 },
    { name: "Bob", id: 1 },
  ],

  messages: [
    { message: "Hi Naz", id: 1 },
    { message: "Hello Nick", id: 1 },
    { message: "Alert Bob", id: 1 },
  ],
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newM = action.newMessageText;
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: 10,
            message: newM,
          },
        ],
      };

    default:
      return state;
  }
};

export const addMessageActionCreator = (newMessageText) => ({
  type: ADD_MESSAGE,
  newMessageText,
});

export default messageReducer;
