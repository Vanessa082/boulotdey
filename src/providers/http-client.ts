import { HttpClientProvider } from "@orashus/http-client";
import { CLIENT_STORAGE } from "@orashus/client-storage";

import { API_BASE_URL } from "../config/env.ts";

const storage = new CLIENT_STORAGE("local");

const HttpClient = HttpClientProvider({
  api_base_url: API_BASE_URL,
  api_base_headers: {
    "Content-Type": "application/json",
    "x-author": "wah vanessa",
    "x-author-url": "https://github.com/vanessa082",
  },
  base_before_req_headers() {
    return {
      Authorization: `Bearer ${storage.get("token", { fallback: "" })}`,
    };
  },
});

export { HttpClient };
