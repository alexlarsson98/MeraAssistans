import React, { useEffect, useRef } from 'react';
import './Map.css';

const Map = ({ options, onMount }) => {
  const ref = useRef();

  useEffect(() => {
    const onLoad = () => {
      const map = new window.google.maps.Map(ref.current, options);

      new window.google.maps.Marker({
        map: map,
        position: options.center, // Assuming options.center contains the coordinates for your location
        // Optionally, you can specify a custom icon here
        // icon: 'path_to_your_custom_icon.png'
      });

      if (onMount) onMount(map);
    };

    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyARCFuTdOFcoZFOp5UnTEK56OX8JiHv25g`;
      document.head.append(script);
      script.addEventListener('load', onLoad);
      return () => script.removeEventListener('load', onLoad);
    } else {
      onLoad();
    }
  }, [options, onMount]);

  return <div ref={ref} className="map-container" />;
};

export default Map;
