import { NextResponse } from "next/server";
import { demoLeadSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const parsed = demoLeadSchema.safeParse(data);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid data" },
        { status: 400 }
      );
    }
    // TODO: Integrate with CRM/email (e.g., HubSpot, Mailer, Slack)
    console.log("New lead:", parsed.data);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}


