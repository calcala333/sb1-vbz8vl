import React from 'react';
import { HeatMap } from '../components/HeatMap';

export function HeatMapPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Location Heat Map</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <HeatMap />
        </div>
      </div>
    </div>
  );
}