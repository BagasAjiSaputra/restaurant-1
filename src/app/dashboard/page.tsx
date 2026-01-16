import { DialogMenu } from "./components/menu/AddMenu"
import LogoutButton from "./components/Logout"
import TableMenu from "./components/menu/Table"

export default function DashboardPage() {
    return (
        <>
            {/* <div className="flex justify-end gap-3 p-6">
                <LogoutButton />
            </div> */}
                <TableMenu />

        </>
    )

}