"use server";

import { supabaseServer } from "@/lib/supabase";
import { redirect } from "next/navigation";

export type Menu = {
  id: string;
  title: string | null;
  desc: string | null;
  date: string | null;
  tag: "Dish" | "Drink" | "Soup" | null;
  color: string | null;
  price: number | null;
  image: string | null;
};

export async function getMenu(): Promise<Menu[]> {
  const supabase = await supabaseServer();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect("/login");
  }

  const { data, error } = await supabase
    .from("menu-restaurant-1")
    .select("*")
    .eq("user_id", user.id)
    .order("date", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
