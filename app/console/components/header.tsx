"use client";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import ThemeToggle from "./header-utils/theme-change";
import { useTheme } from "next-themes";
import Tweaks from "./header-utils/settings";
import Profile from "./header-utils/avatar";
import Debug from "./header-utils/test-toggle";
import React, { HtmlHTMLAttributes, useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Menu from "./header-utils/menu";
import { Assests } from "@/app/static/assest";
import FullScreenToggle from "./header-utils/fullscreen";
import useMountAnimation from "@/components/usedelay";


const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const useMount = useMountAnimation({ render: <><HeaderContent isLoggedin={isLoggedIn} /></>, fallback: <><HeaderSkeleton /></> });
  useEffect(() => {
    const _tmp: any = localStorage.getItem('iloin');
    if (_tmp !== null) {
      setIsLoggedIn(JSON.parse(_tmp).val)
    }
  }, []);
  return <div style={false ? useMount.mountedStyle : useMount.unmountedStyle}>
    <div className="sticky bg-background h-16 box shadow-lg flex items-center">
      <>{useMount.ContentOrSkeleton}</>
    </div>
  </div>;
};

const HeaderSkeleton: React.FC = () => {
  return (
    <>
      <Skeleton className="h-10 w-10 m-4 rounded-full" />
      <Skeleton className="w-1/5 px-4 h-[3.1rem]" />
      <div className="w-3/5 flex flex-row justify-center items-center">
        <Skeleton className="p-2 w-4/5 h-10" />
      </div>
      <div className="px-4 flex flex-row w-1/5 justify-end gap-6">
        <Skeleton className="h-10 w-10  rounded-full" />
        <Skeleton className="h-10 w-10  rounded-full" />
        <Skeleton className="h-10 w-10  rounded-full" />
        <Skeleton className="h-10 w-10  rounded-full" />
        <Skeleton className="h-10 w-10  rounded-full" />
      </div>
    </>
  );
};

const HeaderContent = (props: { isLoggedin: boolean }) => {
  const { theme } = useTheme();
  const router = useRouter()
  return (
    <>
      <Menu />
      <div className="w-1/5 px-4">
        <Assests.Logo />
      </div>
      <div className="w-3/5 flex flex-row justify-center items-center">
        <Input className="p-2 w-4/5" placeholder="Search..." type="text" />
      </div>
      {props.isLoggedin ?
        <div className="px-4 flex flex-row w-1/5 justify-end gap-6">
          <Debug />
          <FullScreenToggle />
          <ThemeToggle />
          <Tweaks />
          <Profile src="/test.jpg" alt="@arjunmnath" fallback="AM" />
        </div> :
        <div className="w-1/5 flex gap-3 justify-end mr-4 pr-2">
          <Button className="w-1/2" variant="outline">Login</Button>
          <Button className="w-1/2" onClick={() => router.push('/signin')}>Signin</Button>
        </div>
      }
    </>
  );
};
export default Header;
