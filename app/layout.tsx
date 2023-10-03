import "./globals.css";
import "./custom.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
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
