import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Map = ({ apiKey, center, zoom }) => {
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '400px' }}
        center={center}
        zoom={zoom}
      >
        {/* Дополнительные компоненты или маркеры могут быть добавлены здесь */}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
