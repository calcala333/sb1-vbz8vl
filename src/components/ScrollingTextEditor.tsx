import React, { useState } from 'react';
import { useScrollingText } from '../stores/scrollingTextStore';
import { Edit2 } from 'lucide-react';

export function ScrollingTextEditor() {
  const { text, setText } = useScrollingText();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  const handleSave = () => {
    setText(editText);
    setIsEditing(false);
  };

  if (!isEditing) {
    return (
      <button
        onClick={() => setIsEditing(true)}
        className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900"
      >
        <Edit2 className="w-4 h-4" />
        <span>Edit Scrolling Text</span>
      </button>
    );
  }

  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
        className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      />
      <button
        onClick={handleSave}
        className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Save
      </button>
      <button
        onClick={() => setIsEditing(false)}
        className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
      >
        Cancel
      </button>
    </div>
  );
}