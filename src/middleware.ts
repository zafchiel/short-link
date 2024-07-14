import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
	const alias = request.nextUrl.pathname.replace("/", "");
	try {
		const res = await kv.hget(alias, "url");
		if (typeof res === "string") return NextResponse.redirect(res);
	} catch (error) {
		return NextResponse.rewrite(new URL(request.nextUrl.origin));
	}
}

export const config = {
	matcher: "/:alias*",
};
