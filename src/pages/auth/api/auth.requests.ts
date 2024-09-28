import { APIResponse } from "../../../interfaces/api";
import { User } from "../../../interfaces/users";
import { HttpClient } from "../../../providers/http-client";

const httpClient = new HttpClient({
  base_url: "/auth",
});

const createAccount = (user: Partial<User>) => {
  return httpClient.POST<APIResponse<string | null>>("/create-account", user);
};

const loginWithEmail = (email: string, password: string) => {
  return httpClient.POST<APIResponse<string | null>>("/login/email", { email, password });
}

export {
  createAccount,
  loginWithEmail,
};
