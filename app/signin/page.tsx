"use client";

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { UserAuthForm } from "./user-auth-form";
import { Assests } from "../static/assest";
import { useState } from "react";
import CheckLogin from "@/components/checklogin";
const AuthPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <CheckLogin next='/console' fallback="/signin"/>

      <div className=" backdrop-blur-sm w-screen  h-screen absolute top-0 left-0 flex justify-center items-center">
      <Assests.SignInBackground/>
      <div className="flex flex-row items-center justify-center border border-[rgba(255,255,255,0.1)] w-[40vw] h-[75vh] rounded-lg relative bg-background" >
      <div className="p-[4.5rem]">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground text-text">
                Enter your email below to create your account
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm bg-background text-muted-foreground text-text">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline p-1 underline-offset-4 hover:text-slate-300"
              >
                Terms of Service
              </Link>
              and
              <Link
                href="/privacy"
                className="underline p-1 underline-offset-4 hover:text-slate-300"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>

      </div>

      </div>
    </div>
  );
};

export default AuthPage;
