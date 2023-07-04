"use client"

import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-4 font-bold">
      <h2 className="text-4xl">Something went wrong!</h2>
      <Button variant="destructive" onClick={() => reset()}>
        Try again
      </Button>
    </section>
  )
}
