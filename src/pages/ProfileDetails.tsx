import React from 'react';
import { useParams } from 'react-router-dom';
import { useProfiles } from '../stores/profileStore';
import { User, MapPin, Calendar, FileText, Info } from 'lucide-react';

export function ProfileDetails() {
  const { id } = useParams();
  const { profiles } = useProfiles();
  const profile = profiles.find(p => p.id === id);

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Profile not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src={profile.headshot}
                alt={`${profile.firstName} ${profile.lastName}`}
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="md:w-2/3 p-8">
              <h1 className="text-3xl font-bold mb-4">
                {profile.firstName} {profile.lastName}
              </h1>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-gray-500" />
                    <span>DOB: {profile.dateOfBirth}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Info className="w-5 h-5 text-gray-500" />
                    <span>IR#: {profile.internalReference}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-gray-500" />
                    <span>Last Known Address: {profile.lastKnownAddress}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-gray-500" />
                    <span>Last Seen: {profile.lastSeenLocation} ({profile.lastSeenDate})</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold mb-2">Physical Attributes</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Height</p>
                      <p>{profile.physicalAttributes.height}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Weight</p>
                      <p>{profile.physicalAttributes.weight}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Hair Color</p>
                      <p>{profile.physicalAttributes.hairColor}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Eye Color</p>
                      <p>{profile.physicalAttributes.eyeColor}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Distinguishing Features</h2>
                <ul className="list-disc pl-5 space-y-2">
                  {profile.physicalAttributes.distinguishingFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Supporting Documents</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {profile.supportingDocuments.map((doc, index) => (
                    <a
                      key={index}
                      href={doc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100"
                    >
                      <FileText className="w-5 h-5 text-gray-500" />
                      <span>Document {index + 1}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}