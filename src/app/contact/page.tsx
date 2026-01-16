"use client";

import { useState } from "react";
import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import MessageLottie from "@/components/loading/message/message";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [reservation, setReservation] = useState("");

  const WHATSAPP_NUMBER = "6282224015802"; // ganti nomor resto (pakai 62)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `
Hello, I want to do some reservation.

Name : ${name}
Contact : ${contact}
Detail :
${reservation}
    `;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <main className="min-h-screen px-6 md:px-12 mt-[3rem]">
      <div className="max-w-6xl mx-auto">
        {/* BREADCRUMB */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/" className="text-xl">
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-xl" />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/menu" className="text-xl">
                  Menu
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-xl" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-xl">
                Contact
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* CONTENT */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-6">
            {/* LEFT */}
            <div data-aos="fade-right" className="flex items-center">
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
                Let's <br />
                Get In <br />
                Touch !
              </h1>
              <MessageLottie/>
            </div>

            {/* FORM */}
            <form
              data-aos="fade-left"
              onSubmit={handleSubmit}
              className="max-w-md w-full space-y-8"
            >
              {/* NAME */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-gray-700">
                  * Your Name
                </label>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full name"
                  className="w-full mt-2 border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-black"
                />
              </div>

              {/* CONTACT */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-gray-700">
                  * Your Email / Whatsapp
                </label>
                <input
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="Email / Whatsapp"
                  className="w-full mt-2 border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-black"
                />
              </div>

              {/* RESERVATION */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-gray-700">
                  * Reservation
                </label>
                <textarea
                  required
                  rows={4}
                  value={reservation}
                  onChange={(e) => setReservation(e.target.value)}
                  placeholder="What is your requirement and specific timeline..."
                  className="w-full mt-2 border-b border-gray-300 py-2 text-sm resize-none focus:outline-none focus:border-black"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="border border-black px-6 py-2 font-semibold text-sm tracking-wide hover:bg-black hover:text-white transition"
              >
                SUBMIT INQUIRY
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
