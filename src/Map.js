import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = ({ issues }) => {
  return (
    <MapContainer center={[20.5937, 78.9629]} zoom={5} scrollWheelZoom={false} className="h-96 rounded-lg">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {issues.map((issue) => (
        <Marker key={issue.id} position={[issue.location.lat, issue.location.lng]}>
          <Popup>
            <img src={issue.image} alt={issue.description} className="w-full h-32 object-cover rounded-lg mb-2" />
            <p>{issue.description}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
