import { login, register } from "../api/authentication";

class AuthService {
  loginUser(username, password) {
    return login(username, password).then((response) => {
      if (response.data.jwt) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
  }

  logoutUser() {
    localStorage.removeItem("user");
  }

  registerUser(data) {
    return register(data);
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
