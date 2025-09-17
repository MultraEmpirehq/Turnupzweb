"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface User {
  id: string;
  email: string;
  name: string;
}

interface ResetPasswordData {
  identifier: string | null;
  authId: string | null;
}

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  user: User | null;
  userProfile: User | null;
  resetPasswordData: ResetPasswordData;
  accessPw: string;
  isAuthenticated: boolean;

  // actions
  setTokens: (accessToken: string, refreshToken: string) => void;
  clearTokens: () => void;

  setUser: (user: User) => void;
  setUserProfile: (userProfile: User) => void;

  setResetPasswordData: (identifier: string, authId: string) => void;
  clearResetPasswordData: () => void;

  setAccessPw: (password: string) => void;

  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      user: null,
      userProfile: null,
      resetPasswordData: { identifier: null, authId: null },
      accessPw: "",
      isAuthenticated: false,

      setTokens: (accessToken, refreshToken) =>
        set({ accessToken, refreshToken, isAuthenticated: true }),

      clearTokens: () =>
        set({
          accessToken: null,
          refreshToken: null,
          accessPw: "",
          isAuthenticated: false,
        }),

      setUser: (user) => set({ user }),
      setUserProfile: (userProfile) => set({ userProfile }),

      setResetPasswordData: (identifier, authId) =>
        set({ resetPasswordData: { identifier, authId } }),

      clearResetPasswordData: () =>
        set({ resetPasswordData: { identifier: null, authId: null } }),

      setAccessPw: (password) => set({ accessPw: password }),

      logout: () => {
        set({
          accessToken: null,
          refreshToken: null,
          user: null,
          userProfile: null,
          isAuthenticated: false,
          resetPasswordData: { identifier: null, authId: null },
          accessPw: "",
        });

        setTimeout(() => {
          window.location.href = "/login"; // auto redirect
        }, 300);
      },
    }),
    {
      name: "auth-storage", // key in localStorage
      storage: createJSONStorage(() => localStorage),
    }
  )
);
