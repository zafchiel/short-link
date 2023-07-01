import { kv } from "@vercel/kv"
import { NextResponse } from "next/server"

type AliasResponseType = {
  url: string
  alias: string
  createdAt: string
}

export async function GET(
  request: Request,
  { params }: { params: { alias: string } }
) {
  const alias = params.alias
  const res: AliasResponseType | null = await kv.get(alias)
  if (res === null) {
    return
  }

  return NextResponse.redirect(res.url)
}
