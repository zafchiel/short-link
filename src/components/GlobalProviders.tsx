"use client"

import { ThemeProvider } from "next-themes"
import { ReactNode } from "react"
import { Toaster } from "./ui/toaster"

export default function GlobalProviders({ children }: { children: ReactNode }) {
  return (
    <>
      <ThemeProvider attribute="class">
        <Toaster />
        {children}
      </ThemeProvider>
    </>
  )
}
