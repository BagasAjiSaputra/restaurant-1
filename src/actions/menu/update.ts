// app/actions/update-menu.ts
"use server";

import { supabaseServer } from "@/lib/supabase";
import { redirect } from "next/navigation";

export async function updateMenu(formData: FormData) {
  const supabase = await supabaseServer();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) {
    redirect("/login");
  }

  const menuId = formData.get("id") as string;
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
  const imageFile = formData.get("image") as File | null;

  if (!menuId || !title) {
    throw new Error("ID dan title wajib diisi");
  }

  let imageUrl = formData.get("currentImage") as string;

  if (imageFile && imageFile.size > 0) {
    const oldFileName = imageUrl.split("/").pop();
    if (oldFileName) {
      await supabase.storage.from("images-restaurant-1").remove([`public/${oldFileName}`]);
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
      throw new Error(`Upload gagal: ${uploadError.message}`);
    }

    const { data } = supabase.storage
      .from("images-restaurant-1")
      .getPublicUrl(fileName);
    imageUrl = data.publicUrl;
  }

  const { error } = await supabase
    .from("menu-restaurant-1")
    .update({
      title,
      desc,
      date,
      tag,
      color,
      price,
      image: imageUrl,
    })
    .eq("id", menuId)
    .eq("user_id", user.id);

  if (error) {
    throw new Error(error.message);
  }

  redirect("/dashboard");
}