import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "7f76e2ce-4197-4f32-9e80-96c4372b73a7",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },

  follow(id) {
    return instance.post(`follow/${id}`).then((response) => {
      return response.data;
    });
  },

  unFollow(id) {
    return instance.delete(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId).then((response) => {
      return response.data;
    });
  },

  getStatus(userId) {
    return instance.get(`profile/status/` + userId).then((response) => {
      return response.data;
    });
  },

  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },
};

export const authMeAPI = {
  onAuthMe() {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },

  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe });
  },

  logout() {
    return instance.delete(`auth/login`);
  },
};
