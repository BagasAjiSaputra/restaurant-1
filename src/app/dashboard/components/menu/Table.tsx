import Image from "next/image";
import { getMenu } from "@/actions/menu/read";
import { UpdateMenu } from "./UpdateMenu";
import { DeleteMenu } from "./DeleteMenu";
import { DialogMenu } from "./AddMenu";
import LogoutButton from "../Logout";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function TableMenu() {
  const menus = await getMenu();

  return (
    <div className="p-6 mb-[100vh]">
      <div className="flex justify-between mb-3">
        {/* <h1 className="mb-4 text-xl font-semibold">MENU</h1> */}
        <div className="flex gap-5">
          <Button className="bg-green-300 text-green-800 hover:bg-green-400"><Link href={"/"}>Home</Link></Button>
        <LogoutButton/>
        </div>
        <DialogMenu />
      </div>

      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-[#e7e3d0] text-left">
            <tr>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Desc</th>
              <th className="px-4 py-3">Tag</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Image</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {menus.map((item) => (
              <tr key={item.id} className="border-t hover:bg-[#deddd7] cursor-pointer">
                <td className="px-4 py-3 font-medium">{item.title}</td>
                <td className="px-4 py-3 text-gray-600">{item.desc}</td>
                <td className="px-4 py-3">
                  <span className={`rounded px-2 py-1 text-xs ${item.color}`}>
                    {item.tag}
                  </span>
                </td>
                <td className="px-4 py-3">{item.date}</td>
                <td className="px-4 py-3">
                  $ {item.price?.toLocaleString("id-ID")}
                </td>
                <td className="px-4 py-3">
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.title ?? "menu"}
                      width={40}
                      height={40}
                      className="rounded object-cover"
                    />
                  )}
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <UpdateMenu menu={item} />
                    <DeleteMenu id={item.id} image={item.image} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
