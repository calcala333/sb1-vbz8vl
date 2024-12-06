import { create } from 'zustand';

interface AuthStore {
  isAuthenticated: boolean;
  user: any | null;
  login: () => void;
  logout: () => void;
}

export const useAuth = create<AuthStore>((set) => ({
  isAuthenticated: false,
  user: null,
  login: () => set({ isAuthenticated: true, user: { role: 'admin' } }),
  logout: () => set({ isAuthenticated: false, user: null }),
}));