import React from 'react';
import Map, { Source, Layer, Popup } from 'react-map-gl';
import type { Profile } from '../types/profile';
import { useState } from 'react';
import { useProfiles } from '../stores/profileStore';
import { AlertCircle } from 'lucide-react';

// For demo purposes, we'll use a public token. In production, this should be an environment variable
const MAPBOX_TOKEN = 'pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJja2V4YW1wbGUiLCJhIjoiY2tleGFtcGxlIn0.ZXhhbXBsZQ';

export function HeatMap() {
  const { profiles } = useProfiles();
  const [popupInfo, setPopupInfo] = useState<Profile | null>(null);
  const [mapError, setMapError] = useState<string | null>(null);
  const [viewState, setViewState] = useState({
    latitude: 40,
    longitude: -100,
    zoom: 3.5,
  });

  if (mapError) {
    return (
      <div className="h-[600px] w-full rounded-lg bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <p className="text-gray-600">{mapError}</p>
        </div>
      </div>
    );
  }

  const heatmapLayer = {
    id: 'heatmap',
    type: 'heatmap',
    paint: {
      'heatmap-weight': 1,
      'heatmap-intensity': 1,
      'heatmap-color': [
        'interpolate',
        ['linear'],
        ['heatmap-density'],
        0, 'rgba(33,102,172,0)',
        0.2, 'rgb(103,169,207)',
        0.4, 'rgb(209,229,240)',
        0.6, 'rgb(253,219,199)',
        0.8, 'rgb(239,138,98)',
        1, 'rgb(178,24,43)'
      ],
      'heatmap-radius': 30
    }
  };

  const locations = profiles.map(profile => ({
    type: 'Feature',
    geometry: {
      type: 'Point',
      // For demo purposes, generate random coordinates within the US
      coordinates: [
        -120 + Math.random() * 40,
        30 + Math.random() * 20
      ]
    },
    properties: {
      id: profile.id,
      name: `${profile.firstName} ${profile.lastName}`
    }
  }));

  return (
    <div className="h-[600px] w-full rounded-lg overflow-hidden">
      <Map
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
        mapStyle="mapbox://styles/mapbox/dark-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
        onError={(e) => setMapError(e.error.message)}
      >
        <Source
          type="geojson"
          data={{
            type: 'FeatureCollection',
            features: locations
          }}
        >
          <Layer {...(heatmapLayer as any)} />
        </Source>
        {popupInfo && (
          <Popup
            latitude={viewState.latitude}
            longitude={viewState.longitude}
            closeButton={true}
            closeOnClick={false}
            onClose={() => setPopupInfo(null)}
          >
            <div className="p-2">
              <h3 className="font-bold">{popupInfo.firstName} {popupInfo.lastName}</h3>
              <p>Last seen: {popupInfo.lastSeenDate}</p>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
}