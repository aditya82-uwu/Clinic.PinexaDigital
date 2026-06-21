import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    if (!data.name || !data.email) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    // TODO: connect to an email provider (e.g. Resend) to actually receive these.
    console.log("New clinic lead:", data);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
