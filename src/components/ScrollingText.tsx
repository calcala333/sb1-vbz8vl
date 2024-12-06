import React from 'react';

interface ScrollingTextProps {
  text: string;
}

export function ScrollingText({ text }: ScrollingTextProps) {
  return (
    <div className="w-full bg-gray-800 text-white py-2 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap">
        {text}
      </div>
    </div>
  );
}