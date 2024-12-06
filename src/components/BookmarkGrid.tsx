import React from 'react';
import { Bookmark as BookmarkIcon, Folder, Tag } from 'lucide-react';
import { useBookmarks } from '../stores/bookmarkStore';
import type { Bookmark } from '../types/bookmark';

export function BookmarkGrid() {
  const { bookmarks, folders } = useBookmarks();

  const renderBookmark = (bookmark: Bookmark) => (
    <a
      key={bookmark.id}
      href={bookmark.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
    >
      {bookmark.icon ? (
        <img src={bookmark.icon} alt="" className="w-8 h-8 mb-2" />
      ) : (
        <BookmarkIcon className="w-8 h-8 mb-2 text-gray-500" />
      )}
      <span className="text-sm text-center font-medium text-gray-700 truncate w-full">
        {bookmark.title}
      </span>
    </a>
  );

  return (
    <div className="space-y-6">
      {folders.map((folder) => (
        <div key={folder.id} className="space-y-2">
          <div className="flex items-center space-x-2">
            <Folder className="w-5 h-5 text-gray-500" />
            <h3 className="text-lg font-medium text-gray-900">{folder.name}</h3>
          </div>
          <div className="grid grid-cols-6 gap-4">
            {bookmarks
              .filter((bookmark) => bookmark.folderId === folder.id)
              .map(renderBookmark)}
          </div>
        </div>
      ))}
      
      <div className="space-y-2">
        <h3 className="text-lg font-medium text-gray-900">Uncategorized</h3>
        <div className="grid grid-cols-6 gap-4">
          {bookmarks
            .filter((bookmark) => !bookmark.folderId)
            .map(renderBookmark)}
        </div>
      </div>
    </div>
  );
}