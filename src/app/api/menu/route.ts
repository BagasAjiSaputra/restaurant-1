import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase";

export async function GET() {

    try {
        const supabase = await supabaseServer();

        const { data, error } = await supabase
            .from("menu-restaurant-1")
            .select("*")
            .order("date", { ascending: false });

        if (error) {
            return NextResponse.json(
                { message: error.message },
                { status: 500 }
            )
        }
        return NextResponse.json(data);

    } catch {
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
}

// export async function POST(req: Request) {
//   try {
//     const supabase = await supabaseServer();

//     const {
//       data: { user },
//       error: authError,
//     } = await supabase.auth.getUser();

//     if (authError || !user) {
//       return NextResponse.json(
//         { message: "Unauthorized" },
//         { status: 401 }
//       );
//     }

//     const formData = await req.formData();

//     const title = formData.get("title") as string;
//     const desc = formData.get("desc") as string;
//     const date = formData.get("date") as string;
//     const tag = formData.get("tag") as string;
//     const color = formData.get("color") as string;
//     const price = Number(formData.get("price"));
//     const imageFile = formData.get("image") as File;

//     if (!title || !imageFile) {
//       return NextResponse.json(
//         { message: "Title dan image wajib diisi" },
//         { status: 400 }
//       );
//     }

//     const fileExt = imageFile.name.split(".").pop();
//     const fileName = `${user.id}/${crypto.randomUUID()}.${fileExt}`;

//     const { error: uploadError } = await supabase.storage
//       .from("images-restaurant-1")
//       .upload(fileName, imageFile, {
//         contentType: imageFile.type,
//         upsert: false,
//       });

//     if (uploadError) {
//       return NextResponse.json(
//         { message: uploadError.message },
//         { status: 500 }
//       );
//     }

//     const { data: imageUrl } = supabase.storage
//       .from("images-restaurant-1")
//       .getPublicUrl(fileName);

//     const { data, error } = await supabase
//       .from("menu-restaurant-1")
//       .insert({
//         id: user.id, 
//         title,
//         desc,
//         date,
//         tag,
//         color,
//         price,
//         image: imageUrl.publicUrl,
//       })
//       .select()
//       .single();

//     if (error) {
//       return NextResponse.json(
//         { message: error.message },
//         { status: 500 }
//       );
//     }

//     return NextResponse.json(
//       {
//         message: "Menu berhasil ditambahkan",
//         data,
//       },
//       { status: 201 }
//     );
//   } catch (err) {
//     return NextResponse.json(
//       { message: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }