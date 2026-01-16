"use client";

import { createMenu } from "@/actions/menu/create";
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
import toast from "react-hot-toast";
import { useState } from "react";

const TAG_COLOR_MAP: Record<"Dish" | "Drink" | "Soup", string> = {
  Dish: "bg-yellow-200",
  Drink: "bg-pink-200",
  Soup: "bg-blue-200",
};

export function DialogMenu() {
  const [tag, setTag] = useState<"Dish" | "Drink" | "Soup">("Dish");

  const color = TAG_COLOR_MAP[tag];

  const handleSubmit = async () => {
    function sleep(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    try {
      await sleep(1000);
      toast.success('Menu Created');
    } catch (err) {
      toast.error('Failed Created Menu');
    }
  };


  return (
    <Dialog>
      {/* Trigger */}
      <DialogTrigger asChild>
        <Button className="bg-blue-200 text-blue-700 hover:bg-blue-300">Add Menu</Button>
      </DialogTrigger>

      {/* Form */}
      <DialogContent className="sm:max-w-[500px]">
        <form
          action={createMenu}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <DialogHeader>
            <DialogTitle>Add Menu</DialogTitle>
          </DialogHeader>

          <div className="space-y-3">
            <div>
              <Label>Menu Name</Label>
              <input name="title" required className="w-full mt-2 border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-black" />
            </div>

            <div>
              <Label>Description</Label>
              <input name="desc" className="w-full mt-2 border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-black" />
            </div>

            <div>
              <Label>Date</Label>
              <input type="date" name="date" className="w-full mt-2 border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-black" />
            </div>

            {/* ===== TAG SELECT ===== */}
            <div>
              <Label>Tag</Label>
              <select
                name="tag"
                value={tag}
                onChange={(e) =>
                  setTag(e.target.value as "Dish" | "Drink" | "Soup")
                }
                className="w-full mt-2 border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-black"
              >
                <option value="Dish">Dish</option>
                <option value="Drink">Drink</option>
                <option value="Soup">Soup</option>
              </select>
            </div>

            {/* ===== COLOR PREVIEW ===== */}
            {/* <div>
              <Label>Color (Auto)</Label>
              <div className={`mt-1 h-9 rounded ${color}`} />
            </div> */}

            <div>
              <Label>Price</Label>
              <input type="number" name="price" className="w-full mt-2 border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-black" />
            </div>

            <div>
              <Label>Images</Label>
              <input
                type="file"
                name="image"
                accept="image/*"
                required
                className="w-full mt-2 border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-black"
              />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>

            <Button type="submit" className="bg-blue-200 text-blue-700 hover:bg-blue-300">Save Menu</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
