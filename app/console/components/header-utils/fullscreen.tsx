'use client'
import {
    Tooltip,
    TooltipProvider,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Maximize, Minimize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
const FullScreenToggle = () => {
    const [isFS, setIsFS] = useState<boolean>(false)
    window.addEventListener('keydown', (event) => {
        if (event.code === 'Escape') {
            console.log('esacped')
        }
      });
    const clickHandle = () => {
        const elem = document.getElementById('root')
        setIsFS(!isFS);
        if (elem?.requestFullscreen) {
            elem.requestFullscreen();
          }
    }
    return <>
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <Button onClick={clickHandle} variant='outline' size='icon' className="p-1 m-1">
                        {isFS ? <Minimize className="h-[1.2rem] w-[1.2rem]" /> :
                            <Maximize className="h-[1.2rem] w-[1.2rem]" />}
                    </Button>
                </TooltipTrigger>
                <TooltipContent>FullScreen</TooltipContent>
            </Tooltip>
        </TooltipProvider></>
}

export default FullScreenToggle;



