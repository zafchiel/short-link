import { NextResponse } from "next/server"
import { kv } from "@vercel/kv"
import { generateRandomAlias } from "@/lib/generateRandomAlias"

export async function POST(request: Request) {
  // retrieve ulr from request body
  const { url } = await request.json()

  // check if url has alias already
  const urlObj = await kv.hgetall(url)
  if (urlObj !== null) {
    console.log(urlObj)
    return NextResponse.json(urlObj)
  }

  const aliasValidation = async () => {
    // generatre random 6 letter alias
    const alias = generateRandomAlias()
    // check if alias exists
    const aliasObj = await kv.hget(alias, "url")

    if (aliasObj !== null) {
      await aliasValidation()
    }
    return alias
  }
  const alias = await aliasValidation()

  try {
    await kv.hset(alias, { alias, url, clicks: 0 })
    await kv.hset(url, { alias, url })

    const newAlias = await kv.hgetall(alias)
    return NextResponse.json(newAlias)
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: "Something went wrong" })
  }
}
