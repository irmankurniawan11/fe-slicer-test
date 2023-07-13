import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.svg"
import KeyboardArrowDownIcon from "./icons/KeyboardArrowDownIcon";

const Navbar = () => {
    const links = [
        {
            text: 'Tentang Kami', url: '#', child: [
                { text: 'Child 1', url: '#' },
                { text: 'Child 2', url: '#' }
            ]
        },
        {
            text: 'Produk & Layanan', url: '#', selected: true, child: [
                { text: 'Child 1', url: '#' },
                { text: 'Child 2', url: '#' }
            ]
        },
        { text: 'Blog', url: '#' },
        { text: 'FAQ', url: '#' }
    ]
    return (
        <nav className="bg-brand-grey-white py-10 px-16">
            <div className="max-w-[1440px] mx-auto flex items-center justify-between">
                <Link href="/" className="flex-none">
                    <Image src={logo} alt="Logo" width={147} height={42} />
                </Link>
                <div className="hidden md:flex items-center gap-8 font-bold">
                    {links.map((link, i) => (
                        <Link key={i} href={link.url} className={`${link.selected ? "text-brand-red" : "text-black"} flex items-center gap-2`}>{link.text}
                            {link.child && <KeyboardArrowDownIcon className={`w-5 h-5 ${link.selected ? "fill-brand-red" : "fill-black"}`}/>}
                        </Link>
                    ))}
                </div>
                <div className="hidden md:flex items-center justify-end gap-4">
                    <Link href="#" className="flex items-center justify-center px-4 py-2.5 font-semibold text-black">Daftar</Link>
                    <Link href="#" className="flex items-center justify-center px-4 py-2.5 rounded-md bg-brand-red font-semibold text-white leading-none">Masuk</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;