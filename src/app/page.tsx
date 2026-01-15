import Link from "next/link"
import Navbar from "@/components/navbar/navbar"
import PotatoLottie from "@/components/loading/potato/potato"

export default function HomePage() {

  return (
    <>
      <div className="flex justify-center">
        <h1 data-aos="fade-up" className="text-[13vw] leading-none mt-2">FJORDSMAKEN</h1>
      </div>

      <Navbar />

      <section className="min-h-screen flex flex-col overflow-hidden">

        {/* Image Section */}
        <div data-aos="fade-up" className="px-6 md:px-10 xl:px-12 pb-10 py-4 md:py-8">
          <div className="overflow-hidden rounded-sm">
            <img
              src="/asset/bg-2.jpg"
              alt="Restaurant Interior"
              className="w-full h-[40vh] md:h-[60vh] xl:h-[80vh] object-cover"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="relative px-6 md:px-10 xl:px-12 py-10 md:py-14 grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Headline */}
          <div className="md:col-span-7">
            <h1 data-aos="fade-right" data-aos-delay="400" className="font-semibold leading-tight tracking-tight text-[clamp(2rem,6vw,4rem)]">
              DISCOVER THE FLAVORS <br />
              OF NORWAY AT OUR <br />
              AUTHENTIC NORWEGIAN <br />
              CUISINE RESTAURANT.
            </h1>
          </div>

          {/* Description */}
          <div data-aos="fade-left" className="md:col-span-4 md:col-start-9 text-md leading-relaxed text-neutral-700">
            Indulge in traditional dishes made with the freshest locally
            sourced ingredients, expertly prepared to showcase the rich
            culinary heritage of Norway.
            <PotatoLottie/>
          </div>

          {/* SEE MENU – hanya desktop */}
          <div data-aos="fade-down" className="hidden xl:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col items-center gap-4">
            <span className="rotate-90 text-xs tracking-widest">
              SEE MENU
            </span>
            <div className="h-20 w-px bg-neutral-800 mt-3" />
            <span className="text-lg">↓</span>
          </div>
        </div>

      </section>




      <section className="bg-[#f4f1ea] px-6 md:px-10 xl:px-12 py-16 overflow-hidden">
        {/* Top label */}
        <div data-aos="fade-up" className="flex justify-between items-center text-xs mb-6 text-neutral-600">
          <span>Northern atmosphere</span>
          <span className="uppercase tracking-wide">
            The restaurant&apos;s kitchen and interior
          </span>
        </div>

        {/* Main grid */}
        <div data-aos="fade-up" className="grid grid-cols-1 xl:grid-cols-12 gap-10">
          {/* Left big image */}
          <div data-aos="fade-right" className="xl:col-span-6">
            <img
              src="/asset/bg-1.jpg"
              alt="Norwegian food"
              className="w-full h-[45vh] md:h-[55vh] xl:h-full object-cover rounded-sm"
            />
          </div>

          {/* Right content */}
          <div className="xl:col-span-6 flex flex-col gap-6">
            <h2 data-aos="fade-left" className="font-semibold leading-tight tracking-tight text-[clamp(1.8rem,3.5vw,3rem)]">
              EMBODY THE COZINESS AND <br />
              WARMTH OF NORWEGIAN FLAVOR
            </h2>

            <p data-aos="fade-left" data-aos-delay="100" className="text-sm leading-relaxed text-neutral-700 max-w-xl">
              Pleasant wooden finishes, natural fabrics and
              traditional decor elements will make you feel
              at home. We have created an atmosphere where
              every guest can relax, enjoy the taste and
              spend time in the company of close friends
              and family.
            </p>

            <Link href={"/contact"} data-aos="fade-left" className="transition ease-in-out w-fit px-6 py-2 rounded-full border border-neutral-800 text-sm hover:bg-neutral-800 hover:text-white transition">
              Reserve a table
            </Link>

            {/* Bottom images */}
            <div data-aos="fade-up" className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6">
              <img
                src="/asset/soup-3.jpg"
                alt="Seafood"
                className="w-full h-100 object-cover rounded-sm"
              />
              <img
                src="/asset/dish-2.jpg"
                alt="Shrimp"
                className="w-full h-100 object-cover rounded-sm"
              />
              <img
                src="/asset/drink-4.jpg"
                alt="Restaurant interior"
                className="hidden md:block w-full h-100 object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}