import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase";

export async function GET(req: Request) {
  const { searchParams, origin } = new URL(req.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.redirect(`${origin}/login`);
  }

  const supabase = await supabaseServer();
  await supabase.auth.exchangeCodeForSession(code);

  return NextResponse.redirect(`${origin}/dashboard`);
}