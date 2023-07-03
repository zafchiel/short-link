"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChangeEvent, FormEvent, useState } from "react"
import Results from "./Results"

export default function FormComponent() {
  const [inputUrl, setInputUrl] = useState<string>("")
  const [shortenedUrl, setshortenedUrl] = useState<URL | null>(null)

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
      const url = new URL(window.location.origin)
      url.pathname = "/" + data.alias
      setshortenedUrl(url)
    } catch (error) {
      console.log(error)
    }
  }

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
      {shortenedUrl && (
        <Results shortUrl={shortenedUrl.toString()} originalUrl={inputUrl} />
      )}
    </>
  )
}
