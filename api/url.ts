import { requestType } from "./_variables";

export const baseURL = `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_API_VERSION}`;

export const loginApi = {
  method: requestType.post,
  url: `${baseURL}/auth/login`,
};

export const signupApi = {
  method: requestType.post,
  url: `${baseURL}/auth/register`,
};

export const sendOtpApi = {
  method: requestType.post,
  url: `${baseURL}/auth/send-otp`,
};

export const verifyRegistrationOTPApi = {
  method: requestType.post,
  url: `${baseURL}/auth/verify-otp`,
};

export const changePasswordApi = (keyword: string) => ({
  method: requestType.put,
  url: `${baseURL}/auth/forgot-password?identifier=${keyword}`,
});
