import { HttpClientProvider } from "@orashus/http-client";
import { CLIENT_STORAGE } from "@orashus/client-storage";

import { API_BASE_URL } from "../config/env.ts";

const storage = new CLIENT_STORAGE("local");

console.log({ API_BASE_URL })

const HttpClient = HttpClientProvider({
  api_base_url: API_BASE_URL,
  base_before_req_headers() {
    return {
      "Authorization": `Bearer ${storage.get("token", { fallback: ""})}`
    }
  },
});

export {
  HttpClient,
};
