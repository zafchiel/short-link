import { NextResponse } from "next/server"
import { kv } from "@vercel/kv"
import { generateRandomAlias } from "@/lib/generateRandomAlias"

export async function POST(request: Request) {
  const body = await request.json()
  const alias = generateRandomAlias()

  const res = await kv.get(alias)

  if (res === null) {
    try {
      await kv.set(alias, {
        url: body.url,
        alias,
        createdAt: new Date().toISOString(),
      })
      const al = await kv.get(alias)
      return NextResponse.json(al)
    } catch (error) {
      console.log(error)
      return NextResponse.json({ error })
    }
  }
  return NextResponse.json({ res })
}
