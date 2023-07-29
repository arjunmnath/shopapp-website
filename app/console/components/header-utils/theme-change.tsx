"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const ThemeToggle = () => {
  const [cur, setCur] = React.useState(true);
  const { theme, setTheme } = useTheme();
  const clickHandle = () => {
    const val = cur ? "dark" : "light";
    setTheme(val);
    setCur(!cur);
  };
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Button variant="outline" size="icon" onClick={clickHandle}>
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Change Theme</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ThemeToggle;
