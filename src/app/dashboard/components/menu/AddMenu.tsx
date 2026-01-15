// "use client";

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

export function DialogMenu() {
  return (
    <Dialog>
      {/* Trigger */}
      <DialogTrigger asChild>
        <Button>Add Menu</Button>
      </DialogTrigger>

      {/* Form */}
      <DialogContent className="sm:max-w-[500px]">
        <form
          action={createMenu}
          className="space-y-4"
        >
          <DialogHeader>
            <DialogTitle>Add Menu</DialogTitle>
          </DialogHeader>

          <div className="space-y-3">
            <div>
              <Label>Nama Menu</Label>
              <Input name="title" required />
            </div>

            <div>
              <Label>Deskripsi</Label>
              <Input name="desc" />
            </div>

            <div>
              <Label>Tanggal</Label>
              <Input type="date" name="date" />
            </div>

            <div>
              <Label>Tag</Label>
              <Input name="tag" />
            </div>

            <div>
              <Label>Color Badge</Label>
              <Input name="color" />
            </div>

            <div>
              <Label>Harga</Label>
              <Input type="number" name="price" />
            </div>

            <div>
              <Label>Gambar</Label>
              <Input
                type="file"
                name="image"
                accept="image/*"
                required
              />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Batal
              </Button>
            </DialogClose>

            <Button type="submit">Simpan Menu</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
