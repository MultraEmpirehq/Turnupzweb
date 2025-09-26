import { deleteData, getData, postData, putData, ApiResponse } from ".";
import { requestType } from "./_variables";
import { AxiosRequestConfig } from "axios";

type ApiConfig = {
  method: keyof typeof requestType;
  url: string;
};

/**
 * Handles API requests dynamically based on requestType
 */
export const processRequest = async <T>(
  api: ApiConfig,
  data?: unknown,
  options?: AxiosRequestConfig
): Promise<ApiResponse<T>> => {
  console.log("calling api", api);

  switch (api.method) {
    case requestType.post:
      return await postData<T>(api.url, data, options);

    case requestType.put:
      return await putData<T>(api.url, data, options);

    case requestType.get:
      return await getData<T>(api.url, options);

    case requestType.delete:
      return await deleteData<T>(api.url, options);

    default:
      throw new Error(
        `API method not recognized. Method must be one of: ${requestType.post} | ${requestType.put} | ${requestType.get} | ${requestType.delete}`
      );
  }
};
