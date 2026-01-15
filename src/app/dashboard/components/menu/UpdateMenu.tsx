"use client";

import { useState } from "react";
import { updateMenu } from "@/actions/menu/update";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

/**
 * Mapping tag → color (SINGLE SOURCE OF TRUTH)
 */
const TAG_COLOR_MAP: Record<"Dish" | "Drink" | "Soup", string> = {
  Dish: "bg-yellow-200",
  Drink: "bg-pink-200",
  Soup: "bg-blue-200",
};

type Menu = {
  id: string;
  title: string | null;
  desc: string | null;
  date: string | null;
  tag: "Dish" | "Drink" | "Soup" | null;
  color: string | null;
  price: number | null;
  image: string | null;
};

export function UpdateMenu({ menu }: { menu: Menu }) {
  const [tag, setTag] = useState<Menu["tag"]>(menu.tag ?? "Dish");

  const color = TAG_COLOR_MAP[tag ?? "Dish"];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          Edit
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px]">
        <form action={updateMenu} className="space-y-4">
          <DialogHeader>
            <DialogTitle>Edit Menu</DialogTitle>
          </DialogHeader>

          {/* ================= HIDDEN ================= */}
          <input type="hidden" name="id" value={menu.id} />
          <input
            type="hidden"
            name="currentImage"
            value={menu.image ?? ""}
          />
          <input type="hidden" name="color" value={color} />
          {/* ========================================== */}

          <div className="space-y-3">
            <div>
              <Label>Nama Menu</Label>
              <Input
                name="title"
                defaultValue={menu.title ?? ""}
                required
              />
            </div>

            <div>
              <Label>Deskripsi</Label>
              <Input name="desc" defaultValue={menu.desc ?? ""} />
            </div>

            <div>
              <Label>Tanggal</Label>
              <Input
                type="date"
                name="date"
                defaultValue={menu.date ?? ""}
              />
            </div>

            {/* ===== TAG SELECT ===== */}
            <div>
              <Label>Tag</Label>
              <select
                name="tag"
                value={tag ?? "Dish"}
                onChange={(e) =>
                  setTag(e.target.value as "Dish" | "Drink" | "Soup")
                }
                className="w-full rounded-md border px-3 py-2 text-sm"
              >
                <option value="Dish">Dish</option>
                <option value="Drink">Drink</option>
                <option value="Soup">Soup</option>
              </select>
            </div>

            {/* ===== COLOR AUTO PREVIEW ===== */}
            {/* <div>
              <Label>Color (Auto)</Label>
              <div className={`mt-1 h-9 rounded ${color}`} />
            </div> */}

            <div>
              <Label>Harga</Label>
              <Input
                type="number"
                name="price"
                defaultValue={menu.price ?? 0}
              />
            </div>

            <div>
              <Label>Ganti Gambar</Label>
              <Input
                type="file"
                name="image"
                accept="image/*"
              />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Batal
              </Button>
            </DialogClose>
            <Button type="submit">Simpan</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}