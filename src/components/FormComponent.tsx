"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { kv } from "@vercel/kv"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { Url } from "url"

export default function FormComponent() {
  const [inputUrl, setInputUrl] = useState<string>("")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    await kv.set("url", inputUrl)
  }

  useEffect(() => {}, [])

  return (
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
  )
}
