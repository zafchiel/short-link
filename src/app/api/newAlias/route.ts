import { NextResponse } from "next/server"
import { kv } from "@vercel/kv"
import { generateRandomAlias } from "@/lib/generateRandomAlias"

export async function POST(request: Request) {
  const { url } = await request.json()
  const alias = generateRandomAlias()

  const res = await kv.get(alias)

  if (res === null) {
    console.log("Creating new alias")
    try {
      await kv.set(alias, {
        url: url,
        alias,
        createdAt: new Date().toISOString(),
      })
      const newAlias = await kv.get(alias)
      return NextResponse.json(newAlias)
    } catch (error) {
      console.log(error)
      return NextResponse.json(error)
    }
  }
  console.log("Alias already exists")
  return NextResponse.json(res)
}
