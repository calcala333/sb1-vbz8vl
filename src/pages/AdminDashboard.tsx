import React from 'react';
import { useAuth } from '../stores/authStore';
import { useScrollingText } from '../stores/scrollingTextStore';
import { ScrollingTextEditor } from '../components/ScrollingTextEditor';
import { Navigate } from 'react-router-dom';
import { Settings, Edit3, BookmarkPlus } from 'lucide-react';

export function AdminDashboard() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-2 mb-4">
              <Edit3 className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-semibold">Scrolling Text</h2>
            </div>
            <ScrollingTextEditor />
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-2 mb-4">
              <BookmarkPlus className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-semibold">Bookmark Management</h2>
            </div>
            <p className="text-gray-600 mb-4">Add or edit bookmarks for quick access.</p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Manage Bookmarks
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-2 mb-4">
              <Settings className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-semibold">Profile Settings</h2>
            </div>
            <p className="text-gray-600 mb-4">Customize profile fields and attributes.</p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Configure Fields
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}