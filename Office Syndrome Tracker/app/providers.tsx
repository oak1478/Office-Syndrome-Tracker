"use client"; // บังคับให้รันฝั่ง Client [cite: 472]
import { SessionProvider } from "next-auth/react"; // [cite: 473]

export default function Providers({ children }: { children: React.ReactNode }) { // [cite: 474]
  return <SessionProvider>{children}</SessionProvider>; // [cite: 476]
}