interface APIResponse<T = null> {
  message: string;
  status: number;
  data: T;
}

export type { APIResponse };
