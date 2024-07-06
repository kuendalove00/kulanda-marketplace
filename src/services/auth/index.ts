import { axiosInstance } from "../../apis/axios";
//import { dispatch } from "../../redux/store";

async function login(data={}) {
  try {
    const response = await axiosInstance.post("/user/login", data);

    return response;

  } catch (error) {
    return error.response;
  }
}

/*async function logout(navigate) {
  dispatch(authActions.logout());

  if (navigate) navigate(appRoutesName.login);
  else window.location.href = appRoutesName.login;
}*/

async function registar(data = {}) {
  try {
    const response = await axiosInstance.post("user/", data);

    return response;
  } catch (error) {
    return error.response;
  }
}

export const auth = { login, registar };
