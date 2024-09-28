import { APIResponse } from "../../../interfaces/api";
import { User } from "../../../interfaces/users";
import { HttpClient } from "../../http-client";

const httpClient = new HttpClient();

const getCurrentUser = () => {
  return httpClient.GET<APIResponse<User>>("/auth/current-user");
}

export {
  getCurrentUser
};
