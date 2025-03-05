import { create } from "zustand";

// Define Zustand store for authentication
interface AuthState {
  token: string | null;
  setToken: (token: string | null) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  token: "Hello",
  setToken: (token) => {
    set({ token });
  },
}));

export default useAuthStore
