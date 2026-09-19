import WeatherSkeleton from "@/components/loading-skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useGeolocation } from "@/hooks/useGeolocation";
import { AlertTriangle, MapPin, RefreshCcw } from "lucide-react";

const DashBoardPage = () => {
  const {
    Coordinates,
    getLocation,
    error: locationError,
    isLoading: locationLoading,
  } = useGeolocation();
  
  console.log(Coordinates);

  const handleRefresh = () => {
    getLocation();
  };

  if (locationError) {
    return (
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Location Error</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>{locationError}</p>
          <Button onClick={getLocation} variant="outline" className="w-fit">
            <MapPin className="mr-2 h-4 w-4" />
            Enable Location
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  if (locationLoading) {
    return (
      <div>
        <WeatherSkeleton />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* citys */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl tracking-tight font-bold">My Location</h1>
        <Button size="icon" variant="outline" onClick={handleRefresh}>
          <RefreshCcw className="size-4" />
        </Button>
      </div>
      <div></div>
    </div>
  );
};

export default DashBoardPage;
