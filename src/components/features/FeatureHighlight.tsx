import React from 'react';

interface FeatureHighlightProps {
  title: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
}

export default function FeatureHighlight({ title, description, imageUrl, reverse }: FeatureHighlightProps) {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 py-12`}>
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-lg text-gray-600">{description}</p>
      </div>
      <div className="flex-1">
        <img
          src={imageUrl}
          alt={title}
          className="rounded-lg shadow-lg w-full object-cover"
        />
      </div>
    </div>
  );
}