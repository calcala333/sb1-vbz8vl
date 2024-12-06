import { create } from 'zustand';
import type { Profile } from '../types/profile';

interface ProfileStore {
  profiles: Profile[];
  addProfile: (profile: Profile) => void;
  updateProfile: (id: string, profile: Profile) => void;
  deleteProfile: (id: string) => void;
}

// Sample data for demonstration
const sampleProfiles: Profile[] = Array.from({ length: 10 }, (_, i) => ({
  id: String(i + 1),
  firstName: `John${i + 1}`,
  lastName: `Doe${i + 1}`,
  dateOfBirth: '1985-03-15',
  internalReference: `IR-2024-00${i + 1}`,
  lastKnownAddress: '123 Main St, Springfield, IL',
  lastSeenLocation: 'Chicago, IL',
  lastSeenDate: '2024-02-15',
  orderOfProtection: i % 2 === 0,
  wantedBy: 'Springfield Police Department',
  physicalAttributes: {
    height: "6'2\"",
    weight: '185 lbs',
    placeOfBirth: 'Springfield, IL',
    hairColor: 'Brown',
    eyeColor: 'Blue',
    sex: 'Male',
    race: 'Caucasian',
    nationality: 'American',
    distinguishingFeatures: [
      'Scar on left cheek',
      'Dragon tattoo on right forearm'
    ]
  },
  headshot: `https://images.unsplash.com/photo-${500648767791 + i}`,
  supportingDocuments: [
    'https://example.com/doc1.pdf',
    'https://example.com/doc2.pdf'
  ]
}));

export const useProfiles = create<ProfileStore>((set) => ({
  profiles: sampleProfiles,
  addProfile: (profile) =>
    set((state) => ({ profiles: [...state.profiles, profile] })),
  updateProfile: (id, updatedProfile) =>
    set((state) => ({
      profiles: state.profiles.map((profile) =>
        profile.id === id ? updatedProfile : profile
      ),
    })),
  deleteProfile: (id) =>
    set((state) => ({
      profiles: state.profiles.filter((profile) => profile.id !== id),
    })),
}));