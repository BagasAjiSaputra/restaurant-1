import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase";

export async function POST() {
  const supabase = await supabaseServer();

  const { error } = await supabase.auth.signOut();

  if (error) {
    return NextResponse.json(
      { error: "Gagal logout" },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}