import { AlignJustify, HelpCircle } from "lucide-react";
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
import { Dispatch, SetStateAction } from "react";
import { Assests, IconProps } from '@/app/static/assest'
import { usePathname, useRouter } from "next/navigation";
import Link from 'next/link'



interface NavigationProps {
    check: string;
    href: string;
    label: string;
    activeIcon: any;
    nonActiveIcon: any;
}

const Menu = () => {
    return <>
        <div className="menuToggle p-2 m-2 hover:cursor-pointer rounded-3xl hover:bg-slate-800">
            <AlignJustify size={24} />
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
