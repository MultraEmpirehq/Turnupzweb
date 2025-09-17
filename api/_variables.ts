export const status = {
  error: "error",
  success: "success",
} as const;

export const requestType = {
  post: "post",
  delete: "delete",
  get: "get",
  put: "put",
} as const;

export type RequestType = keyof typeof requestType;
export type Status = keyof typeof status;
