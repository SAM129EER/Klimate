import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";

const DashBoardPage = () => {
  return (
    <div className="space-y-4">
      {/* citys */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl tracking-tight font-bold">My Location</h1>
        <Button size="icon-sm" variant="outline">
          <RefreshCcw className="size-4" />
        </Button>
      </div>
      <div></div>
    </div>
  );
};

export default DashBoardPage;
