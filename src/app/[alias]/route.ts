// import { kv } from "@vercel/kv"
// import { NextResponse } from "next/server"

// export async function GET(
//   request: Request,
//   { params }: { params: { alias: string } }
// ) {
//   const alias = params.alias
//   const res: string | null = await kv.hget(alias, "url")
//   if (res === null) {
//     return
//   }
//   await kv.hincrby(alias, "clicks", 1)

//   return NextResponse.redirect(new URL(res))
// }
