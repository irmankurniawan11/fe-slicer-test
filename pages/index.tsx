import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Navbar/>
      <div>Hello</div>
    </>
  )
}

const Navbar = () => {
  return (
    <div className="py-[2.5rem] px-[3.88rem] flex items-center justify-between">
      <Image src="/logo.svg" alt="Logo" width={147} height={42}/>
      <div className="flex items-center gap-8 font-bold">
        <div>Tentang Kami</div>
        <div className="text-brand-red">Produk & Layanan</div>
        <div>Blog</div>
        <div>FAQ</div>
      </div>
      <div className="flex items-center justify-end gap-4">
        <Link href="#" className="flex items-center justify-center px-4 py-[0.625rem] font-semibold text-black">Masuk</Link>
        <Link href="#" className="flex items-center justify-center px-4 py-[0.625rem] rounded-md bg-brand-red font-semibold text-white">Masuk</Link>
      </div>
    </div>
  )
}