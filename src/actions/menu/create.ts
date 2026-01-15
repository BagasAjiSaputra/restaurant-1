"use server";

import { supabaseServer } from "@/lib/supabase";
import { redirect } from "next/navigation";

export async function createMenu(formData: FormData) {
  const supabase = await supabaseServer();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect("/login");
  }

  const title = formData.get("title") as string;
  const desc = formData.get("desc") as string;
  const date = formData.get("date") as string;

    const TAG_COLOR_MAP: Record<string, string> = {
    Dish: "bg-yellow-200 text-yellow-700",
    Drink: "bg-pink-200 text-pink-700",
    Soup: "bg-blue-200 text-blue-700",
  };

  const tag = formData.get("tag") as string;
  const color = TAG_COLOR_MAP[tag];
  
  const price = Number(formData.get("price"));
  const imageFile = formData.get("image") as File;

  if (!title || !imageFile) {
    throw new Error("Title dan image wajib diisi");
  }

  const fileExt = imageFile.name.split(".").pop();
  const fileName = `${user.id}/${crypto.randomUUID()}.${fileExt}`;




  const { error: uploadError } = await supabase.storage
    .from("images-restaurant-1")
    .upload(fileName, imageFile, {
      contentType: imageFile.type,
      upsert: false,
    });

  if (uploadError) {
    throw new Error(uploadError.message);
  }

  const { data: imageUrl } = supabase.storage
    .from("images-restaurant-1")
    .getPublicUrl(fileName);

  const { error } = await supabase
    .from("menu-restaurant-1")
    .insert({
      user_id: user.id,
      title,
      desc,
      date,
      tag,
      color,
      price,
      image: imageUrl.publicUrl,
    });

  if (error) {
    throw new Error(error.message);
  }

  redirect("/dashboard");
}
