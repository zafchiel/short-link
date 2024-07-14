import { generateRandomAlias } from "@/lib/generateRandomAlias";
import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

const aliasValidation = async () => {
	// generatre random 6 letter alias
	const alias = generateRandomAlias();
	// check if alias exists
	const aliasObj = await kv.hget(alias, "url");

	if (aliasObj !== null) {
		await aliasValidation();
	}
	return alias;
};

export async function POST(request: Request) {
	// retrieve url from request body
	const { url } = await request.json();

	// check if url has alias already
	const urlObj = await kv.hgetall(url);
	if (urlObj !== null) {
		return NextResponse.json(urlObj);
	}

	const alias = await aliasValidation();

	try {
		await kv.hset(alias, { alias, url, clicks: 0 });
		await kv.hset(url, { alias, url });

		const newAlias = await kv.hgetall(alias);
		return NextResponse.json(newAlias);
	} catch (error) {
		return NextResponse.json({ error: "Something went wrong" });
	}
}
