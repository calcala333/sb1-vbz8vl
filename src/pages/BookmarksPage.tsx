import React from 'react';
import { BookmarkGrid } from '../components/BookmarkGrid';
import { Plus } from 'lucide-react';

export function BookmarksPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Bookmarks</h1>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            <Plus className="w-5 h-5" />
            <span>Add Bookmark</span>
          </button>
        </div>
        <BookmarkGrid />
      </div>
    </div>
  );
}