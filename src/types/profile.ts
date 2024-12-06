export interface Profile {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  internalReference: string;
  lastKnownAddress: string;
  lastSeenLocation: string;
  lastSeenDate: string;
  orderOfProtection: boolean;
  wantedBy: string;
  physicalAttributes: {
    height: string;
    weight: string;
    placeOfBirth: string;
    hairColor: string;
    eyeColor: string;
    sex: string;
    race: string;
    nationality: string;
    distinguishingFeatures: string[];
  };
  headshot: string;
  supportingDocuments: string[];
}