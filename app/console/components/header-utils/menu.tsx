import { AlignJustify } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter,
    SheetClose
} from "@/components/ui/sheet"
import { LogOutIcon, PencilIcon, FileText, DatabaseBackup, HomeIcon, BadgePercent } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";

import {Assests} from '@/app/static/assest'


const Details = {
    imgPath: "/test.jpg",
    Name: "Arjun Manjunath",
    fallback: "AM",


}
const Menu = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true)
    }, [])
    return <>

        <Sheet >
            <SheetTrigger>
                <div className="menuToggle p-2 m-2 hover:cursor-pointer rounded-3xl hover:bg-slate-800">
                    <AlignJustify size={24} />
                </div>
            </SheetTrigger>
            <SheetContent side='left'>
                {mounted ? <MenuContent /> : <MenuSkeleton />}
            </SheetContent>
        </Sheet>
    </>
}

const MenuContent = () => {
    return <>
        <div className="">
            <SheetHeader className="flex flex-col gap-4 items-center px-3 pt-3">
                <Avatar className="h-[150px] w-[150px]">
                    <AvatarImage src={Details.imgPath} />
                    <AvatarFallback color="pink">
                        {Details.fallback}
                    </AvatarFallback>
                </Avatar>

                <h4 className="text-xl font-bold tracking-tight">{Details.Name}</h4>
                <div className="grid grid-cols-3 gap-3 p-3">
                    <Button variant='secondary' className="flex flex-row gap-2">
                        <PencilIcon className="" />

                    </Button>
                    <Button variant='secondary' className="flex flex-row gap-2">
                        <FileText />

                    </Button>
                    <Button variant='secondary' className="flex flex-row gap-2">
                        <DatabaseBackup className="" />
                    </Button>
                </div>
            </SheetHeader>
            <Separator />
            <div className="navigation flex flex-col gap-2 py-4">
                <div className="flex flex-row gap-4 items-center px-2">
                    <Assests.Home/>
                    <h2 className="text-xl text-[#a1a1a1]">Home</h2>
                </div>
                <div className="flex flex-row gap-4 items-center px-2">
                    <BadgePercent color="#a1a1a1" className="h-8 w-8" />
                    <h2 className="text-xl text-[#a1a1a1]">Credits</h2>
                </div>
                <div className="flex flex-row gap-4 items-center px-2">
                    <HomeIcon className="h-8 w-8" />
                    <h2 className="text-xl text-white">Home</h2>
                </div>
            </div>
            <Separator />

            <SheetFooter>
                <SheetClose asChild>
                    <Button variant='secondary'>
                        <LogOutIcon className="m-1 p-1" />
                        Logout
                    </Button>
                </SheetClose>
            </SheetFooter>
        </div>
    </>
}

const MenuSkeleton = () => {
    return <>
        <div className="flex flex-col gap-4 items-center p-3">
            <Skeleton className="rounded-[100px] h-[150px] w-[150px]" />
            <Skeleton className="h-6 w-3/5 rounded-sm" />
            <div className="pt-6 flex h-6 w-full justify-between">
                <Skeleton className="h-8 w-1/4 rounded-sm" />
                <Skeleton className="h-8 w-1/4 rounded-sm" />
                <Skeleton className="h-8 w-1/4 rounded-sm" />
            </div>
        </div>
        <Separator className="mt-8 mb-4" />
        <div className="navgiation flex flex-col gap-6">
            <div className="flex flex-row px-6 gap-4">
                <Skeleton className="h-10 w-10 rounded-xl" />
                <Skeleton className="h-10 w-3/5 rounded-sm" />
            </div>
            <div className="flex flex-row px-6 gap-4">
                <Skeleton className="h-10 w-10 rounded-xl" />
                <Skeleton className="h-10 w-3/5 rounded-sm" />
            </div>
            <div className="flex flex-row px-6 gap-4">
                <Skeleton className="h-10 w-10 rounded-xl" />
                <Skeleton className="h-10 w-3/5 rounded-sm" />
            </div>
            <div className="flex flex-row px-6 gap-4">
                <Skeleton className="h-10 w-10 rounded-xl" />
                <Skeleton className="h-10 w-3/5 rounded-sm" />
            </div>
            <div className="flex flex-row px-6 gap-4">
                <Skeleton className="h-10 w-10 rounded-xl" />
                <Skeleton className="h-10 w-3/5 rounded-sm" />
            </div>
            <div className="flex flex-row px-6 gap-4">
                <Skeleton className="h-10 w-10 rounded-xl" />
                <Skeleton className="h-10 w-3/5 rounded-sm" />
            </div>
        </div>
        <Separator className="my-6" />
        <div className="flex justify-end px-6">
            <Skeleton className="h-10 w-2/5" />
        </div>
    </>
}


export default Menu;



