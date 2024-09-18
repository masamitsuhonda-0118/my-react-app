import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 35.6895, // 東京の緯度
  lng: 139.6917, // 東京の経度
};

const MyMap = () => (
  <LoadScript googleMapsApiKey="AIzaSyAqvcqK1KXhDHH9Qdltm0zbZ9PikPGKZJE">
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={15}
    >
      {/* ここにマーカーを追加 */}
      <Marker position={center} />
    </GoogleMap>
  </LoadScript>
);

export default MyMap;
