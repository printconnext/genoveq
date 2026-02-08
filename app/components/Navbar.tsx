import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed w-full z-50 bg-[#002E6D] backdrop-blur-md border-b-[5px] border-genoveq-gold-500 shadow-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="h-12 w-48 bg-gold-logo" style={{
                        maskImage: 'url("/logo-genoveq.png")',
                        WebkitMaskImage: 'url("/logo-genoveq.png")',
                        maskSize: 'contain',
                        WebkitMaskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        WebkitMaskRepeat: 'no-repeat',
                        maskPosition: 'left center',
                        WebkitMaskPosition: 'left center'
                    }}></div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    <NavLink href="/">หน้าหลัก</NavLink>
                    <NavLink href="#article">ศาสตร์แห่งสุขภาพ</NavLink>
                    <NavLink href="#about">เกี่ยวกับเรา</NavLink>
                    <NavLink href="#product">ผลิตภัณฑ์</NavLink>
                    <NavLink href="#join">ร่วมธุรกิจกับเรา</NavLink>

                    <Link
                        href="#contact"
                        className="px-6 py-2.5 bg-gold-gradient text-white font-medium font-kanit rounded-full transition-all shadow-lg shadow-genoveq-gold-500/20 hover:shadow-genoveq-gold-500/40 transform hover:-translate-y-0.5 hover:opacity-95"
                    >
                        ติดต่อเรา
                    </Link>
                </div>

                {/* Mobile Menu Button (Placeholder) */}
                <button className="md:hidden text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="text-slate-200 hover:text-white font-medium transition-colors text-sm uppercase tracking-wide hover:underline underline-offset-4 decoration-genoveq-gold-500 decoration-2"
        >
            {children}
        </Link>
    );
}
