"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  ChangeEvent,
  FormEvent,
  MutableRefObject,
  useRef,
  useState,
} from "react"
import Results from "./Results"
import { useToast } from "./ui/use-toast"
import { Link } from "lucide-react"

export default function FormComponent() {
  const [inputUrl, setInputUrl] = useState<string>("")
  const [shortenedUrl, setshortenedUrl] = useState<URL | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const inputRef: MutableRefObject<HTMLInputElement | null> = useRef(null)

  const { toast } = useToast()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (inputUrl.length === 0) {
      toast({
        title: "Please provide link",
        variant: "destructive",
      })
      inputRef.current?.focus()
      return
    }

    setIsLoading(true)

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
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex h-full w-full flex-col">
      <form onSubmit={handleSubmit}>
        <Label htmlFor="url">Paste your link here</Label>
        <div className="flex">
          <Input
            ref={inputRef}
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
            <Link />
          </Button>
        </div>
      </form>
      <Results
        shortUrl={shortenedUrl?.toString()}
        originalUrl={inputUrl}
        isLoading={isLoading}
      />
    </div>
  )
}
