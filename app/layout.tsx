import "./globals.css";
import "./custom.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster"
import { createContext } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>New Title</title>
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="">
            {children}
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
