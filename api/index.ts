/* eslint-disable @typescript-eslint/no-explicit-any */

import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { baseURL } from "./url";
import { status } from "./_variables";
import { useAuthStore } from "./zustand/store/userStore"; // ✅ adjust path

const controller = new AbortController();

const api = axios.create({
  baseURL,
  signal: controller.signal,
});

//Request interceptor: attach token automatically
api.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().accessToken;
    if (token) {
      if (config.headers) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

//Response interceptor: refresh token if 401
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry // prevent infinite loop
    ) {
      originalRequest._retry = true;

      try {
        const { refreshToken, setTokens, clearTokens } =
          useAuthStore.getState();

        if (!refreshToken) {
          clearTokens();
          return Promise.reject(error);
        }

        // 🔄 Call refresh endpoint
        // const refreshResponse = await axios.post<{
        //   accessToken: string;
        //   refreshToken: string;
        // }>(`${baseURL}/auth/refresh`, { refreshToken });
        const refreshResponse = await api.post("/auth/refresh", {
          refreshToken,
        });

        const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
          refreshResponse.data;

        //Update store
        setTokens(newAccessToken, newRefreshToken);

        //Retry original request with new token
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        useAuthStore.getState().clearTokens();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export const setHeaderAuthorization = (token: string | null) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

export type ApiResponse<T> = {
  type: keyof typeof status;
  code: number | string;
  authId?: string | null;
  statusText: string;
  response: T | null;
};

export const postData = async <T>(
  url: string,
  data?: unknown,
  option?: AxiosRequestConfig
): Promise<ApiResponse<T>> => {
  try {
    const res: AxiosResponse<T> = await api.post(url, data, option);
    return {
      type: "success",
      code: res.status,
      authId: res.headers?.authid || res.headers?.authId || null,
      statusText: res.statusText,
      response: res.data ?? null,
    };
  } catch (err: any) {
    throw {
      type: "error",
      code: err?.response?.status || err?.code,
      statusText:
        err?.response?.data?.message ||
        err?.response?.statusText ||
        err?.message,
      response: err?.response?.data ?? null,
    };
  }
};

export const getData = async <T>(
  url: string,
  option?: AxiosRequestConfig
): Promise<ApiResponse<T>> => {
  try {
    const res: AxiosResponse<T> = await api.get(url, option);
    return {
      type: "success",
      code: res.status,
      authId: res.headers?.authid || res.headers?.authId || null,
      statusText: res.statusText,
      response: res.data ?? null,
    };
  } catch (err: any) {
    throw {
      type: "error",
      code: err?.response?.status || err?.code,
      statusText:
        err?.response?.data?.message ||
        err?.response?.statusText ||
        err?.message,
      response: err?.response?.data ?? null,
    };
  }
};

export const putData = async <T>(
  url: string,
  data?: unknown,
  option?: AxiosRequestConfig
): Promise<ApiResponse<T>> => {
  try {
    const res: AxiosResponse<T> = await api.put(url, data, option);
    return {
      type: "success",
      code: res.status,
      authId: res.headers?.authid || res.headers?.authId || null,
      statusText: res.statusText,
      response: res.data ?? null,
    };
  } catch (err: any) {
    throw {
      type: "error",
      code: err?.response?.status || err?.code,
      statusText:
        err?.response?.data?.message ||
        err?.response?.statusText ||
        err?.message,
      response: err?.response?.data ?? null,
    };
  }
};

export const deleteData = async <T>(
  url: string,
  option?: AxiosRequestConfig
): Promise<ApiResponse<T>> => {
  try {
    const res: AxiosResponse<T> = await api.delete(url, option);
    return {
      type: "success",
      code: res.status,
      authId: res.headers?.authid || res.headers?.authId || null,
      statusText: res.statusText,
      response: res.data ?? null,
    };
  } catch (err: any) {
    throw {
      type: "error",
      code: err?.response?.status || err?.code,
      statusText:
        err?.response?.data?.message ||
        err?.response?.statusText ||
        err?.message,
      response: err?.response?.data ?? null,
    };
  }
};

export const abortOutgoingRequest = () => {
  controller.abort();
};

export default api;
