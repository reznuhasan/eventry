import Link from "next/link"

const Header = () => {
    return (
        <div className="flex justify-between items-center bg-black/80 backdrop-transparent sticky top-0 z-10 border-b-2 border-yellow-200 px-8 py-4">
            <div className="text-white text-3xl">
                <Link href="/"><h1>Eventry<span className="text-yellow-400 w-50 h-50">.</span></h1></Link>
            </div>
            <div className="text-white flex gap-3">
                <Link href="/about">About</Link>
                <Link href="/contact">Contact Us</Link>
            </div>
        </div>
    )
}

export default Header
