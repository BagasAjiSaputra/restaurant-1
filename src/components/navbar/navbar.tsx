import Link from "next/link"

export default function Navbar() {

    return (
        <>
            <div className="sticky top-0 z-99">
                <div className="flex justify-evenly w-full h-[5vh]">
                    <Link data-aos="fade-right" data-aos-delay="100" href={"/menu"} className="bg-black/60 backdrop-blur-md w-full px-4 py-2 flex justify-center items-center hover:bg-[#eeede4] hover:text-black text-white transition ease-in-out delay-150">Menu</Link>
                    {/* <Link href={"/about"} className="bg-black w-full px-4 py-2 flex justify-center items-center hover:bg-[#eeede4] hover:text-black text-white transition ease-in-out delay-150">About</Link> */}
                    <Link data-aos="fade-left" data-aos-delay="100" href={"/contact"} className="bg-black/60 backdrop-blur-xs w-full px-4 py-2 flex justify-center items-center hover:bg-[#eeede4] hover:text-black text-white transition ease-in-out delay-150">Contact</Link>
                </div>
            </div>
        </>
    )
}