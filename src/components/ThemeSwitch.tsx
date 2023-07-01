"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Toggle } from "@/components/ui/toggle"
import { Sun, Moon } from "lucide-react"
import { Skeleton } from "./ui/skeleton"

const ThemeSwitch = ({ ...props }) => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <Skeleton className={`h-10 w-10 ${props.className}`} />
  }

  return (
    <Toggle
      variant="outline"
      onClick={() => {
        resolvedTheme === "dark" ? setTheme("light") : setTheme("dark")
      }}
      {...props}
    >
      {resolvedTheme === "dark" ? <Moon /> : <Sun />}
    </Toggle>
  )
}

export default ThemeSwitch
