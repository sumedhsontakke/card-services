import axios from "../../config/adaptor";
import { TLoginRequest } from "../../models";

export const doLogin = async ({ username, password }: TLoginRequest) => {
  try {
    const response = await axios.post("/login", { username, password });
    return response.data;
  } catch (error) {
    return error;
  }
};




