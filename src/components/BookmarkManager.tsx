import React, { useState } from 'react';
import { useBookmarks } from '../stores/bookmarkStore';
import { Plus, Trash2, Edit2 } from 'lucide-react';

export function BookmarkManager() {
  const { bookmarks, addBookmark, removeBookmark } = useBookmarks();
  const [newBookmark, setNewBookmark] = useState({ title: '', url: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newBookmark.title && newBookmark.url) {
      addBookmark({
        id: Date.now().toString(),
        title: newBookmark.title,
        url: newBookmark.url,
        tags: [],
        createdAt: new Date().toISOString(),
      });
      setNewBookmark({ title: '', url: '' });
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            value={newBookmark.title}
            onChange={(e) => setNewBookmark({ ...newBookmark, title: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">URL</label>
          <input
            type="url"
            value={newBookmark.url}
            onChange={(e) => setNewBookmark({ ...newBookmark, url: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <Plus className="w-4 h-4" />
          <span>Add Bookmark</span>
        </button>
      </form>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Current Bookmarks</h3>
        <div className="grid grid-cols-1 gap-4">
          {bookmarks.map((bookmark) => (
            <div
              key={bookmark.id}
              className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm"
            >
              <div>
                <h4 className="font-medium">{bookmark.title}</h4>
                <a
                  href={bookmark.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  {bookmark.url}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-1 text-gray-500 hover:text-gray-700">
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => removeBookmark(bookmark.id)}
                  className="p-1 text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}