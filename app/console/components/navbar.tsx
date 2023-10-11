import { FunctionComponent, Suspense } from "react";
import { Assests } from '@/app/static/assest'
import { usePathname } from "next/navigation";
import {
    Tooltip,
    TooltipProvider,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from 'next/link'
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import useMountAnimation from "@/components/usemountanimation";
const urls = [
    {
        check: '/dashboard',
        href: '/console/dashboard',
        label: "Home",
        activeIcon: Assests.HomeSolid,
        nonActiveIcon: Assests.Home,
    },
    {
        check: '/newsale',
        href: '/console/newsale',
        label: "New Sale",
        activeIcon: Assests.AddSolid,
        nonActiveIcon: Assests.Add,
    },
    {
        check: '/clients',
        href: '/console/clients',
        label: "Clients",
        activeIcon: Assests.ClientSolid,
        nonActiveIcon: Assests.Client,
    },
    {
        check: '/analytics',
        href: '/console/analytics',
        label: "Analytics",
        activeIcon: Assests.Analytics,
        nonActiveIcon: Assests.Analytics,
    },
    {
        check: '/sales',
        href: '/console/sales',
        label: "Sales",
        activeIcon: Assests.Sales,
        nonActiveIcon: Assests.Sales
    },
    {
        check: '/products',
        href: '/console/products',
        label: "Products",
        activeIcon: Assests.ProductSolid,
        nonActiveIcon: Assests.Product
    }

]

interface NavbarProps {

}
interface NavigationProps {
    check: string;
    href: string;
    label: string;
    activeIcon: any;
    nonActiveIcon: any;
}


const Navbar: FunctionComponent<NavbarProps> = () => {
    'use client';
    const useMount = useMountAnimation({
        render: <>
            <Navigation pathdetails={urls} />
            <Separator className="" />
        </>, fallback: <><NavBarSkeleton pathdetails={urls} /></>
    })
    return <>
        <div className="h-full fixed left-0 w-16 flex flex-col px-2" style={useMount.mount ? useMount.mountedStyle : useMount.unmountedStyle} >
            <>{useMount.ContentOrSkeleton}</>
        </div>
    </>;
}
const Navigation = (props: { pathdetails: NavigationProps[] }) => {
    const pathname = usePathname()
    return (
        <>
            {props.pathdetails.map(link => {
                const isActive = pathname.search(link.check) > 0
                return (
                    <TooltipProvider key={link.label}>
                        <Tooltip >
                            <TooltipTrigger>
                                <Link
                                    href={link.href}>
                                    <div className={`${isActive ? 'active' : 'deactive'} w-full flex justify-center items-center h-14 py-4`}>
                                        {isActive ? <link.activeIcon /> : <link.nonActiveIcon />}
                                    </div>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">{link.label}</TooltipContent>
                        </Tooltip>

                    </TooltipProvider>
                )
            })}
        </>
    )
}

const NavBarSkeleton = (props: { pathdetails: NavigationProps[] }) => {
    return <>
        {props.pathdetails.map((link) => (
            <div className="" key={link.label}>
                <Skeleton className="h-10 w-10 rounded-3xl my-2 mx-1" />
            </div>
        ))}
        <Separator />
    </>
}

export default Navbar;