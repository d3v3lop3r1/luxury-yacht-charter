import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider"
import {NextUIProvider} from '@nextui-org/react'
import "./globals.css";


export const metadata: Metadata = {
  title: "Zlatna Luka Luxury Yachtings",
  description: "Generated by Code-Trends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body>
        <NextUIProvider>
          <Provider>{children}</Provider>
        </NextUIProvider>
      </body>
    </html>
  );
}
