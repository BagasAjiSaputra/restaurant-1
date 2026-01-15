import Link from "next/link"

import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function ContactPage() {

    return (
        <>
            <main className="min-h-screen px-6 md:px-12 mt-[3rem]">
                <div className="max-w-6xl mx-auto">
                    <div>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink asChild>
                                        <Link href="/" className="text-xl">Home</Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="text-xl" />
                                <BreadcrumbItem>
                                    <BreadcrumbLink asChild>
                                        <Link href="/menu" className="text-xl">Menu</Link>
                                    </BreadcrumbLink>

                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="text-xl" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className="text-xl">Contact</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>
            </main>
        </>
    )
}