import { Bug } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Debug = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Toggle
            className=""
            variant="outline"
            size="default"
          >
            <Bug className="h-[1.2rem] w-[1.2rem]" />
          </Toggle>
        </TooltipTrigger>
        <TooltipContent>Toggle Test Mode</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Debug;
