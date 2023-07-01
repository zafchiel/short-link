"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import Link from "next/link"

export default function FormComponent() {
  const [inputUrl, setInputUrl] = useState<string>("")
  const [shortenedUrl, setshortenedUrl] = useState<string>("")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch("/api/newAlias", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ url: inputUrl }),
      })
      const data = await res.json()
      setshortenedUrl(window.location.origin + "/" + data.alias)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {}, [])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Label htmlFor="url">Paste your link here</Label>
        <div className="flex">
          <Input
            type="url"
            id="url"
            value={inputUrl}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInputUrl(e.target.value)
            }
            placeholder="https://example.com"
            className="rounded-r-none"
          />
          <Button type="submit" className="rounded-l-none">
            Create
          </Button>
        </div>
      </form>
      <div className="flex items-center justify-center p-3">
        <Link href={shortenedUrl} passHref>
          <h3 className="cursor-pointer text-xl font-bold underline">
            {shortenedUrl}
          </h3>
        </Link>
      </div>
    </>
  )
}
