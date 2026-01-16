"use client";

import { deleteMenu } from "@/actions/menu/delete";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import toast from "react-hot-toast";

export function DeleteMenu({
  id,
  image,
}: {
  id: string;
  image: string | null;
}) {


  const handleSubmit = async () => {
    function sleep(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    try {
      await sleep(1000);
      toast.error('Menu Deleted');
    } catch (err) {
      toast.error('Failed Deleted Menu');
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="destructive" className="bg-red-200 text-red-700 hover:bg-red-300">
          Delete
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Delete Menu?</DialogTitle>
        </DialogHeader>

        <form action={deleteMenu} onSubmit={handleSubmit}>
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="image" value={image ?? ""} />

          <DialogFooter className="mt-4">
            <Button type="submit" variant="destructive" className="text-white">
              Yes, Delete
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}