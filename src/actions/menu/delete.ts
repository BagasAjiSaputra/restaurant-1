"use server";

import { supabaseServer } from "@/lib/supabase";
import { redirect } from "next/navigation";

export async function deleteMenu(formData: FormData) {
  const supabase = await supabaseServer();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect("/login");
  }

  const id = formData.get("id") as string;
  const image = formData.get("image") as string;

  if (!id) {
    throw new Error("ID tidak valid");
  }

  if (image) {
    const fileName = image.split("/").pop();
    if (fileName) {
      await supabase.storage
        .from("images-restaurant-1")
        .remove([`public/${fileName}`]);
    }
  }

  const { error } = await supabase
    .from("menu-restaurant-1")
    .delete()
    .eq("id", id)
    .eq("user_id", user.id);

  if (error) {
    throw new Error(error.message);
  }

  redirect("/dashboard");
}
