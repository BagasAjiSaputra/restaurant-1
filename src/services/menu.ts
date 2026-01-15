import { Menu } from "@/types/menu";
import { api } from "@/lib/axios";

export const getMenu = async (): Promise<Menu[]> => {

    const res = await api.get<Menu[]>("/menu")
    return res.data;

};