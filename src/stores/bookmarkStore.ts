import { create } from 'zustand';
import type { Bookmark, BookmarkFolder } from '../types/bookmark';

interface BookmarkStore {
  bookmarks: Bookmark[];
  folders: BookmarkFolder[];
  addBookmark: (bookmark: Bookmark) => void;
  removeBookmark: (id: string) => void;
  addFolder: (folder: BookmarkFolder) => void;
  removeFolder: (id: string) => void;
}

export const useBookmarks = create<BookmarkStore>((set) => ({
  bookmarks: [],
  folders: [],
  addBookmark: (bookmark) =>
    set((state) => ({ bookmarks: [...state.bookmarks, bookmark] })),
  removeBookmark: (id) =>
    set((state) => ({
      bookmarks: state.bookmarks.filter((bookmark) => bookmark.id !== id),
    })),
  addFolder: (folder) =>
    set((state) => ({ folders: [...state.folders, folder] })),
  removeFolder: (id) =>
    set((state) => ({
      folders: state.folders.filter((folder) => folder.id !== id),
    })),
}));