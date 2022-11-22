import axios from "axios";

// Set config defaults when creating the instance
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  withCredentials: true,
});
interface ILogin {
  username?: string;
  password?: string;
}
export const login = async (data: ILogin) => {
  console.log(process.env.SERVER_URL);
  const response = await api.post("/login", data);
  return response.data;
};

export const signup = async (data: ILogin) => {
  const response = await api.post("/signup", data);
  return response.data;
};
