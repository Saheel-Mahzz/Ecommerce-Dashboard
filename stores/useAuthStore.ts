import { create } from "zustand";

interface AuthState {
  isLoggedIn: boolean;
  login: (accessToken: string, refreshToken?: string) => void;
  accessToken: string | null;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  accessToken: null,
  login: (accessToken: string, refreshToken = "") => {
    localStorage.setItem("access_token", accessToken);
    if (refreshToken) {
      localStorage.setItem("refresh_token", refreshToken);
    }
    document.cookie = `access_token=${accessToken}; path=/; max-age=86400`;
    if (refreshToken) {
      document.cookie = `refresh_token=${refreshToken}; path=/; max-age=86400`;
    }

    set({
      isLoggedIn: true,
      accessToken: accessToken,
    });
  },
}));
