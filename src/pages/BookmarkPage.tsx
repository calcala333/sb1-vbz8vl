import React from 'react';
import { Weather } from '../components/Weather';
import { ScrollingText } from '../components/ScrollingText';
import { ScrollingTextEditor } from '../components/ScrollingTextEditor';
import { ProfileCard } from '../components/ProfileCard';
import { useProfiles } from '../stores/profileStore';
import { useScrollingText } from '../stores/scrollingTextStore';
import { BookmarkGrid } from '../components/BookmarkGrid';

export function BookmarkPage() {
  const { profiles } = useProfiles();
  const { text } = useScrollingText();

  return (
    <div className="min-h-screen bg-gray-100">
      <ScrollingText text={text} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Quick Access</h2>
            <BookmarkGrid />
          </div>
        </div>

        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold">Profiles Database</h1>
              <ScrollingTextEditor />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {profiles.map((profile) => (
                <ProfileCard key={profile.id} profile={profile} />
              ))}
            </div>
          </div>
          
          <div className="ml-8 sticky top-8">
            <Weather />
          </div>
        </div>
      </div>
    </div>
  );
}