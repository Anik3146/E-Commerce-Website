import { create } from "zustand";

type LoginInfo = {
  isLoggedIn: boolean;
  setIsLoggedIn: (loggedIn: boolean) => void;
};

export const useLoginInfo = create<LoginInfo>((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (loggedIn: boolean) => set({ isLoggedIn: loggedIn }),
}));
