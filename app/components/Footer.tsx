import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#002E6D] text-white border-t-[5px] border-genoveq-gold-500 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <Link href="/" className="inline-block mb-6">
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
                        <p className="text-slate-300 mb-8 max-w-sm leading-relaxed font-light">
                            ผู้นำด้านสุขภาพแม่นยำที่เข้าถึงได้ ด้วยวิทยาศาสตร์แห่งความสมดุลระดับเซลล์ มุ่งมั่นยกระดับคุณภาพชีวิตด้วยนวัตกรรม
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Placeholders */}
                            <a href="https://www.facebook.com/profile.php?id=61573217351750" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-genoveq-blue-900 flex items-center justify-center hover:bg-genoveq-gold-500 transition-colors text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </a>
                            <div className="w-10 h-10 rounded-full bg-genoveq-blue-900 flex items-center justify-center text-white cursor-default">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M21.5 10.9c0-4.6-4.3-8.4-9.5-8.4S2.5 6.3 2.5 10.9c0 4.1 3.4 7.6 8.2 8.3l.9 2.9c.1.3.5.4.8.2.1-.1.2-.2.2-.2l1.9-2.7c3.9-.9 6.9-4.3 6.9-8.5z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold text-white mb-6 text-lg font-kanit">เมนูหลัก</h4>
                        <ul className="space-y-4 text-slate-300">
                            <li><Link href="#about" className="hover:text-genoveq-gold-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-genoveq-gold-500 rounded-full"></span>เกี่ยวกับเรา</Link></li>
                            <li><Link href="#product" className="hover:text-genoveq-gold-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-genoveq-gold-500 rounded-full"></span>ผลิตภัณฑ์</Link></li>
                            <li><Link href="#article" className="hover:text-genoveq-gold-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-genoveq-gold-500 rounded-full"></span>บทความ</Link></li>
                            <li><Link href="#contact" className="hover:text-genoveq-gold-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-genoveq-gold-500 rounded-full"></span>ติดต่อเรา</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-white mb-6 text-lg font-kanit">ติดต่อเรา</h4>
                        <ul className="space-y-4 text-slate-300">
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-genoveq-gold-500 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </span>
                                <span className="text-sm">บริษัท พี พลัส คอร์ปอเรชั่นไวด์ จำกัด<br />51 ซ.ลาดพร้าววังหิน 68 ถ.ลาดพร้าววังหิน แขวงลาดพร้าว เขตลาดพร้าว กทม.10230</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-genoveq-gold-500 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </span>
                                <a href="tel:086-947-9997" className="hover:text-white transition-colors">086-947-9997</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-genoveq-gold-500 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22 10.4c0-4.8-4.5-8.8-10.2-8.8C6.3 1.6 1.7 5.6 1.7 10.4c0 4.3 3.5 7.9 8.2 8.6v-3H8.3v-3h1.6V10.6c0-1.7 1-2.7 2.6-2.7.8 0 1.5.1 1.7.1v1.9h-1.2c-.8 0-1 .4-1 1v2h2.2l-.3 3h-1.9v3.1c4.8-.4 8.5-4.3 8.5-8.8z" />
                                        <path d="M12 2C6.5 2 2 5.9 2 10.8c0 4.3 3.4 8 7.9 8.7V14h-2v-2.5h2V9.8c0-2 1.2-3.1 3-3.1.9 0 1.8.1 2 .1v2.3h-1.4c-1 0-1.2.5-1.2 1.2v1.3h2.6l-.3 2.5h-2.3v5.6c4.7-.6 8.3-4.5 8.3-9.1C22 5.9 17.5 2 12 2z" />
                                        <path d="M19.7 7.7c-.5-1.9-2-3.3-3.9-3.8-2.6-.7-7.9-.7-7.9-.7s-5.3 0-7.9.7c-1.9.5-3.4 1.9-3.9 3.8-.7 2.6-.7 8.1-.7 8.1s0 5.4.7 8.1c.5 1.9 2 3.3 3.9 3.8 2.6.7 7.9.7 7.9.7s5.3 0 7.9-.7c1.9-.5 3.4-1.9 3.9-3.8.7-2.6.7-8.1.7-8.1s0-5.4-.7-8.1zM11.9 16.5l-2.6-1.5 2.6-1.5V16.5z" opacity="0" />
                                        <path d="M22.3 10.8c0-4.9-4.6-8.8-10.3-8.8C6.3 2 1.7 5.9 1.7 10.8c0 4.3 3.4 7.9 8 8.7V19H2.6c0 .7 0 1.7 0 2 0 1.6 1.3 2.9 2.9 2.9h12.9c1.6 0 2.9-1.3 2.9-2.9 0-.3 0-1.3 0-2h-3.9v.3c4.6-.8 7.9-4.4 7.9-8.4z" opacity="0" />
                                        {/* Simple Chat Bubble for Line */}
                                        <path d="M21.5 10.9c0-4.6-4.3-8.4-9.5-8.4S2.5 6.3 2.5 10.9c0 4.1 3.4 7.6 8.2 8.3l.9 2.9c.1.3.5.4.8.2.1-.1.2-.2.2-.2l1.9-2.7c3.9-.9 6.9-4.3 6.9-8.5z" />
                                    </svg>
                                </span>
                                <span>@genoveq</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-genoveq-gold-500 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                    </svg>
                                </span>
                                <a href="https://www.facebook.com/profile.php?id=61573217351750" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Genoveq Official</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-genoveq-gold-500 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>
                                <span>contact@genoveq.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-genoveq-blue-900 text-center text-slate-400 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>&copy; {new Date().getFullYear()} Genoveq. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
