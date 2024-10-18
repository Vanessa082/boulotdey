import { APIResponse } from "../../../interfaces/api";
import { User } from "../../../interfaces/users";
import { HttpClient } from "../../../providers/http-client";

const httpClient = new HttpClient({
  // base_url: "/auth",
});

const updateUser = (user: Partial<User>) => {
  return httpClient.PATCH<APIResponse<string | null>>(
    `/users/${user._id}`,
    user
  );
};

export { updateUser };
