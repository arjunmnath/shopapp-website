"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Assests } from "../static/assest";
import Image from "next/image";
import SignInHandle from "./signinhandle";
import LoginHandle from "./loginhandle";
import { useToast } from "@/components/ui/use-toast"


interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }
export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [mail, setMail] = React.useState('');
  const { toast } = useToast();
  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <div className="grid gap-2">
        <div className="grid gap-1">
          <Label className="sr-only" htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            placeholder="name@example.com"
            type="email"
            value={mail}
            onChange={e => setMail(e.target.value)}
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
          />
        </div>
        <div className="flex flex-row gap-3 ">
          <SignInHandle email={mail} />
          <LoginHandle email={mail} />
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-[rgba(255,255,255,0.1)]"></span>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button onClick={() => toast({
        title: "Locked Feature 🤷",
        description: "This Function Will Be Available In Future"

      })} variant="outline" type="button">
        <div className="mr-2 h-6 w-6" >
          <Assests.Google />

        </div>
        Google
      </Button>
    </div>
  );
}
