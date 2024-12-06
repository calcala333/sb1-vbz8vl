import React, { useEffect, useState } from 'react';
import { Cloud, CloudRain, Sun } from 'lucide-react';

interface WeatherData {
  temperature: number;
  condition: string;
}

export function Weather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated weather data - replace with actual API call
    setTimeout(() => {
      setWeather({
        temperature: 72,
        condition: 'sunny'
      });
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div className="animate-pulse h-20 w-32 bg-gray-200 rounded"></div>;
  }

  const getWeatherIcon = () => {
    switch (weather?.condition) {
      case 'sunny':
        return <Sun className="w-8 h-8 text-yellow-500" />;
      case 'cloudy':
        return <Cloud className="w-8 h-8 text-gray-500" />;
      case 'rainy':
        return <CloudRain className="w-8 h-8 text-blue-500" />;
      default:
        return <Sun className="w-8 h-8 text-yellow-500" />;
    }
  };

  return (
    <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md">
      {getWeatherIcon()}
      <div className="text-black">
        <p className="text-2xl font-bold">{weather?.temperature}°F</p>
        <p className="capitalize">{weather?.condition}</p>
      </div>
    </div>
  );
}