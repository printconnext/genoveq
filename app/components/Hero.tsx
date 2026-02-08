import Image from "next/image";
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-white to-genoveq-blue-50 dark:from-slate-900 dark:to-slate-800">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-10">
                <Image
                    src="/vector.svg"
                    alt="Decorative Vector"
                    fill
                    className="object-cover object-center mix-blend-multiply dark:mix-blend-overlay"
                />
            </div>
            {/* Subtle Gradient Overlays */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] rounded-full bg-genoveq-blue-500/5 blur-3xl z-0"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] rounded-full bg-genoveq-gold-500/5 blur-3xl z-0"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Content */}
                    <div className="md:w-1/2 text-center md:text-left">
                        <span className="inline-block py-1 px-3 rounded-full bg-genoveq-blue-100 text-genoveq-blue-800 text-sm font-semibold mb-6 border border-genoveq-blue-200">
                            Proactive Precision Health
                        </span>

                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                            คืน <span className="text-genoveq-blue-600">ความสมดุลพื้นฐาน</span> <br />
                            เพื่อศักยภาพสูงสุดของชีวิต
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl font-light">
                            VectraCore Pro นวัตกรรมทางโภชนเภสัชระบุบแบบแม่นยำตามหลักชีวเคมี เพื่อจัดการปัญหาสุขภาพที่ต้นเหตุในระดับเซลล์ พร้อมดูแลคุณแบบองค์รวม
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <a
                                href="#product"
                                className="px-8 py-4 bg-gold-gradient text-white font-medium rounded-full transition-all shadow-lg shadow-genoveq-gold-500/25 flex items-center justify-center gap-2 transform hover:-translate-y-1 hover:opacity-95"
                            >
                                ดูผลิตภัณฑ์ทั้งหมด
                            </a>
                            <Link
                                href="#concept"
                                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full hover:bg-white/20 transition-all font-medium flex items-center justify-center gap-2 group"
                            >
                                <span className="group-hover:text-genoveq-gold-300 transition-colors">รู้จักนวัตกรรม</span><svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Image Placeholder */}
                    <div className="md:w-1/2 relative">
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                            <Image
                                src="/hero-showcase.png"
                                alt="Product Showcase or Happy Family"
                                width={800}
                                height={600}
                                className="w-full h-auto"
                            />
                        </div>
                        {/* Decorative circles */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-genoveq-gold-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-genoveq-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                    </div>
                </div>
            </div>
        </section >
    );
}
