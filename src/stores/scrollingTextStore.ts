import { create } from 'zustand';

interface ScrollingTextStore {
  text: string;
  setText: (text: string) => void;
}

export const useScrollingText = create<ScrollingTextStore>((set) => ({
  text: 'Welcome to the Administrative Portal - Authorized Personnel Only',
  setText: (text) => set({ text }),
}));