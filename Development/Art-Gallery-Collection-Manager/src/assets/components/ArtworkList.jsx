import React from 'react';
import ArtworkCard from './ArtworkCard';

function ArtworkList({ artworks }) {
  if (!artworks || artworks.length === 0) {
    return <p className="text-center text-gray-600 text-lg">No artworks found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {artworks.map(artwork => (
        <ArtworkCard key={artwork.id} artwork={artwork} />
      ))}
    </div>
  );
}

export default ArtworkList;