"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import toast from "react-hot-toast";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const res = await fetch("/api/auth/logout", {
      method: "POST",
    });

    if (!res.ok) {
      toast.error("Gagal logout");
      return;
    }

    toast.success("Logout berhasil");
    router.replace("/");
    router.refresh();
  };

  return (
    <Button
      variant="destructive"
      size="sm"
      onClick={handleLogout}
      className="flex items-center gap-2 bg-red-200 text-red-700 hover:text-white cursor-pointer"
    >
      <LogOut className="h-4 w-4" />
      Logout
    </Button>
  );
}
