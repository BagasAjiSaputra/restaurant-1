"use client";

import { useEffect, useState } from "react";
import { getMenu } from "@/services/menu";
import { Menu } from "@/types/menu";

export const useMenu = () => {
  const [menu, setMenu] = useState<Menu[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await getMenu();
        setMenu(res);
      } catch (err) {
        setError("Gagal ambil data menu");
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  return {
    menu,
    loading,
    error,
  };
};