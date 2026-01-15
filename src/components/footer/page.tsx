import Link from "next/link";
import {
    FaInstagram,
    FaFacebookF,
    FaWhatsapp,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-neutral-900 text-neutral-300">
            <div className="mx-auto max-w-7xl px-6 py-16">
                {/* Grid */}
                <div>
                    <h2 className="text-2xl font-bold text-white">
                        Fjords<span className="text-orange-500">Maken</span>
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                        A modern restaurant serving authentic flavors.
                        We bring you a delightful dining experience.
                    </p>
                </div>

                <div className="grid gap-10 grid-cols-2 md:grid-cols-2 lg:grid-cols-2 mt-3">
                    
                                        {/* Contact */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">
                            Contact
                        </h3>
                        <ul className="space-y-3 text-sm text-neutral-400">
                            <li className="flex items-start gap-3">
                                <FaMapMarkerAlt className="mt-1 text-orange-500" />
                                <span>Colorado, Texas, USA</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <FaPhoneAlt className="mt-1 text-orange-500" />
                                <span>+1 812 537-3546</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <FaEnvelope className="mt-1 text-orange-500" />
                                <span>fjordsmaken@gmail.com</span>
                            </li>
                            <li className="pt-2">
                                <span className="font-medium text-white">
                                    Opening Hours:
                                </span>
                                <br />
                                Monday – Sunday
                                <br />
                                10:00 AM – 10:00 PM
                            </li>

                            <Link href={"/login"} className="hover:bg-orange-500 hover:text-white px-4 py-2 transition ease-in-out">Login</Link>
                        </ul>
                    </div>

                    {/* Menu */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">
                            Menu
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/menu" className="hover:text-white transition">
                                    Our Menu
                                </Link>
                            </li>
                            {/* <li>
                                <Link href="/promo" className="hover:text-white transition">
                                    Special Offers
                                </Link>
                            </li> */}
                            <li>
                                <Link
                                    href="/reservation"
                                    className="hover:text-white transition"
                                >
                                    Reservation
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Information */}
                    {/* <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">
                            Information
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/about" className="hover:text-white transition">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-white transition">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover:text-white transition">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div> */}

                </div>

                {/* Divider */}
                <div className="my-10 h-px w-full bg-neutral-800" />

                {/* Bottom */}
                <div className="flex flex-col items-center justify-between gap-4 text-sm text-neutral-500 md:flex-row">
                    <p>
                        © {new Date().getFullYear()} Fjordsmaken. All rights reserved.
                    </p>

                    <div className="flex gap-4">
                        <Link
                            href="#"
                            className="rounded-full p-2 hover:bg-neutral-800 hover:text-white transition"
                        >
                            <FaInstagram size={18} />
                        </Link>
                        <Link
                            href="#"
                            className="rounded-full p-2 hover:bg-neutral-800 hover:text-white transition"
                        >
                            <FaFacebookF size={18} />
                        </Link>
                        <Link
                            href="#"
                            className="rounded-full p-2 hover:bg-neutral-800 hover:text-white transition"
                        >
                            <FaWhatsapp size={18} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}