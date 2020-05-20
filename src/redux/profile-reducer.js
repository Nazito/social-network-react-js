import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  posts: [
    { id: 1, message: "Hi , how are you", like: 20 },
    { id: 2, message: "Im ok", like: 15 },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = action.newPostText;
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: 3,
            message: newPost,
          },
        ],
        newPostText: "",
      };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };

    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});

export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setUserStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const getUserProfile = (userId) => {
  return async (dispach) => {
    let response = await profileAPI.getProfile(userId);
    dispach(setUserProfile(response));
  };
};

export const getUserStatus = (userId) => {
  return async (dispach) => {
    let response = await profileAPI.getStatus(userId);
    dispach(setUserStatus(response));
  };
};

export const updateStatus = (status) => {
  return async (dispach) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispach(setUserStatus(status));
    }
  };
};

export default profileReducer;
