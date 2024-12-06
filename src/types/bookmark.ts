export interface Bookmark {
  id: string;
  title: string;
  url: string;
  icon?: string;
  folderId?: string;
  tags: string[];
  createdAt: string;
}

export interface BookmarkFolder {
  id: string;
  name: string;
  createdAt: string;
}