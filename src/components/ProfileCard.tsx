import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Info, Shield } from 'lucide-react';
import type { Profile } from '../types/profile';

interface ProfileCardProps {
  profile: Profile;
}

export function ProfileCard({ profile }: ProfileCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={profile.headshot} 
        alt={`${profile.firstName} ${profile.lastName}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">
          {profile.firstName} {profile.lastName}
        </h3>
        
        {profile.orderOfProtection && (
          <div className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            <Shield className="w-3 h-3 mr-1" />
            Order of Protection
          </div>
        )}
        
        <div className="mt-2 space-y-2 text-gray-600">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            <span>DOB: {profile.dateOfBirth}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            <span>Last seen: {profile.lastSeenLocation}</span>
          </div>
        </div>
        
        <div className="mt-3">
          <div className="text-sm text-gray-500">IR#: {profile.internalReference}</div>
          <div className="text-sm font-medium text-gray-700">Wanted by: {profile.wantedBy}</div>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
          >
            <Info className="w-4 h-4" />
            <span>More Info</span>
          </button>
          <Link
            to={`/profile/${profile.id}`}
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            View Full Profile
          </Link>
        </div>

        {showDetails && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <h4 className="font-semibold mb-2">Physical Attributes</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="text-gray-600">Height:</span>
                <span className="ml-2">{profile.physicalAttributes.height}</span>
              </div>
              <div>
                <span className="text-gray-600">Weight:</span>
                <span className="ml-2">{profile.physicalAttributes.weight}</span>
              </div>
              <div>
                <span className="text-gray-600">Hair:</span>
                <span className="ml-2">{profile.physicalAttributes.hairColor}</span>
              </div>
              <div>
                <span className="text-gray-600">Eyes:</span>
                <span className="ml-2">{profile.physicalAttributes.eyeColor}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}