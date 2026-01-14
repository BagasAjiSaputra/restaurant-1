"use client";

import { motion } from "framer-motion";
// import Link from "next/link";
import Image from "next/image";
import { FaMoneyBillWave } from "react-icons/fa";
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
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const posts = [
    {
        title: "Sushi Karage",
        excerpt:
            "A savory fusion of crispy chicken karaage and delicate sushi rice, perfect for lovers of bold textures and flavors.",
        date: "July 2025",
        tag: "Hard Food",
        href: "/asset/dish-1.jpg",
        color: "bg-blue-100 text-blue-800",
        image: "/asset/dish-1.jpg",
        price: "$ 20",
    },
    {
        title: "Salmon Sashimi",
        excerpt:
            "Fresh, buttery slices of raw salmon served with wasabi and soy sauce — simplicity at its most elegant.",
        date: "July 2025",
        tag: "Raw Delight",
        href: "/asset/dish-2.jpg",
        color: "bg-yellow-100 text-yellow-800",
        image: "/asset/dish-2.jpg",
        price: "$ 25",
    },
    {
        title: "Katsu Don",
        excerpt:
            "Crispy chicken cutlet laid over a warm bowl of rice and soft egg — the comfort food of champions.",
        date: "July 2025",
        tag: "Comfort Food",
        href: "/asset/dish-3.jpg",
        color: "bg-red-100 text-red-800",
        image: "/asset/dish-3.jpg",
        price: "$ 30",
    },
    {
        title: "Matcha Cheesecake",
        excerpt:
            "A creamy green tea dessert with rich cheesecake base — sweet, earthy, and undeniably Japanese.",
        date: "July 2025",
        tag: "Dessert",
        href: "/asset/dish-4.jpg",
        color: "bg-green-100 text-green-800",
        image: "/asset/dish-4.jpg",
        price: "$ 25",
    },
    {
        title: "Ebi Tempura",
        excerpt:
            "Golden-fried shrimp tempura — light, crunchy, and always a crowd favorite.",
        date: "July 2025",
        tag: "Fried",
        href: "/asset/dish-5.jpg",
        color: "bg-orange-100 text-orange-800",
        image: "/asset/dish-5.jpg",
        price: "$ 30",
    },
    {
        title: "Takoyaki Madness",
        excerpt:
            "Bite-sized octopus balls drizzled with mayo, sauce, and dancing bonito flakes — fun, fast, and flavorful!",
        date: "July 2025",
        tag: "Street Food",
        href: "/asset/soup-1.jpg",
        color: "bg-purple-100 text-purple-800",
        image: "/asset/soup-1.jpg",
        price: "$ 15",
    },
    // Minuman
    {
        title: "Iced Matcha Latte",
        excerpt:
            "A refreshing blend of premium matcha and creamy milk over ice — balanced, bold, and energizing.",
        date: "July 2025",
        tag: "Drink",
        href: "/asset/soup-2.jpg",
        color: "bg-lime-100 text-lime-800",
        image: "/asset/soup-2.jpg",
        price: "$ 5",
    },
    {
        title: "Yuzu Sparkling",
        excerpt:
            "Citrusy and fizzy, this Japanese yuzu soda delivers a zesty punch that's perfect for hot days.",
        date: "July 2025",
        tag: "Drink",
        href: "/asset/soup-3",
        color: "bg-cyan-100 text-cyan-800",
        image: "/asset/soup-3.jpg",
        price: "$ 8",
    },
    {
        title: "Sakura Blossom Tea",
        excerpt:
            "A delicate floral infusion made from real sakura petals — calming and aromatic with a gentle sweetness.",
        date: "July 2025",
        tag: "Drink",
        href: "/asset/drink-1",
        color: "bg-pink-100 text-pink-800",
        image: "/asset/drink-1.jpg",
        price: "$ 10",
    },
    {
        title: "Cold Brew Ocha",
        excerpt:
            "Slow-brewed Japanese green tea served cold for a clean, crisp, and earthy finish.",
        date: "July 2025",
        tag: "Drink",
        href: "/asset/drink-2",
        color: "bg-emerald-100 text-emerald-800",
        image: "/asset/drink-2.jpg",
        price: "$ 12",
    },
];


export default function MenuPage() {
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
                        <BreadcrumbSeparator className="text-xl"/>
                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-xl">Menu</BreadcrumbPage>
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
                    {posts.map((post, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="rounded-2xl transition-shadow overflow-hidden flex flex-col"
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
                                        className={`text-xs font-semibold px-3 py-1 rounded-full ${post.color}`}
                                    >
                                        {post.tag}
                                    </span>
                                    <span className="text-xs text-gray-500">{post.date}</span>
                                </div>

                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-8">{post.excerpt}</p>

                                <div className="mt-auto">
                                    <div className="flex items-center gap-2 text-[#2f3542] font-semibold text-lg border-t py-3">
                                        <FaMoneyBillWave className="text-xl" />
                                        <span>{post.price}</span>
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