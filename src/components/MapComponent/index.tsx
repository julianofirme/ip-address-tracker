import React, { useContext, useLayoutEffect, useRef, useState } from 'react';
import { ipDataContext } from 'providers/ipDataProvider';
import mapboxgl, { LngLatLike, Map } from 'mapbox-gl'

function MapComponent() {
  const { ipData } = useContext(ipDataContext);
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<Map>();
  const position = [ipData.location.lat, ipData.location.lng] as LngLatLike 
  console.log(position)
  const [zoom, setZoom] = useState(9);

  mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_TOKEN as string;

  useLayoutEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current as HTMLElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: position,
      zoom: zoom
    })
  }, []);

  return (
    <>
      <div>
        <div style={{ height: '520px', maxWidth: '1440px' }} ref={mapContainer} className="map-container" />
      </div>
    </>
  );
}

export default MapComponent;