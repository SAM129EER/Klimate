import { useEffect, useState } from "react";

interface GeolacationState {
  Coordinates: { lat: string | number; lon: string | number } | null;
  error: string | null;
  isLoading: boolean | null;
}

export function useGeolocation() {
  const [locationData, setLocationData] = useState<GeolacationState>({
    Coordinates: null,
    error: null,
    isLoading: true,
  });

  const getLocation = () => {
    setLocationData((prev) => ({ ...prev, error: null, isLoading: true }));

    if (!navigator.geolocation) {
      setLocationData({
        Coordinates: null,
        error: "Geolocation not supported by this browser",
        isLoading: false,
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocationData({
          Coordinates: {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          },
          error: null,
          isLoading: false,
        });
      },
      (error) => {
        let errorString: string;

        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorString = "User denied the request for Geolocation";
            break;
          case error.POSITION_UNAVAILABLE:
            errorString = "Location information is unavailable";
            break;
          case error.TIMEOUT:
            errorString = "The request to get user location timed out";
            break;
          default:
            errorString = "An unknown error occurred";
            break;
        }
        setLocationData((prev) => ({
          ...prev,
          Coordinates: null,
          error: errorString,
          isLoading: false,
        }));
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      },
    );
  };

  useEffect(() => {
    getLocation();
  }, []);

  return {
    ...locationData,
    getLocation,
  };
}
