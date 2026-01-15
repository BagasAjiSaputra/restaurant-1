"use client";

import { motion } from "framer-motion";
// import Link from "next/link";
import Image from "next/image";
import { FaMoneyBillWave } from "react-icons/fa";
import Link from "next/link";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useMenu } from "@/hooks/menu";


export default function MenuPage() {

    const { menu, loading, error} = useMenu()

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>{error}</p>;

    
    return (

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
                                <BreadcrumbPage className="text-xl">Menu</BreadcrumbPage>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="text-xl" />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="/contact" className="text-xl">Contact</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 mt-5">
                    Catalogue
                </h1>
                <p className="text-gray-600 mb-12">
                    Thoughts & happy eating moments enchanced creativity.
                </p>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
                    {menu?.map((post, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className=" transition-shadow overflow-hidden flex flex-col"
                        >
                            {/* Image */}
                            <div className="relative w-full h-80 p-4">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Text Content */}
                            <div className="px-0 py-6 flex flex-col flex-1">
                                <div className="mb-2 flex items-center justify-between">
                                    <span
                                        className={`text-xs font-semibold px-3 py-1 ${post.color}`}
                                    >
                                        {post.tag}
                                    </span>
                                    <span className="text-xs text-gray-500">{post.date}</span>
                                </div>

                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-8">{post.desc}</p>

                                <div className="mt-auto">
                                    <div className="flex items-center gap-2 text-[#2f3542] font-semibold text-lg border-t py-3">
                                        <FaMoneyBillWave className="text-xl" />
                                        <span>$ {post.price}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}