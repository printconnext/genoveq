import Image from "next/image";

export default function FeatureSection() {
    const features = [
        {
            title: "METABOLIC-METHYL SYNC™",
            subtitle: "(กลไกจัดการสมดุลภายใน)",
            concept: "เน้นการจัดการของเสียทางชีวเคมี (Homocysteine) และการเผาผลาญที่แม่นยำ",
            ingredients: "Choline Bitartrate, Zinc และวิตามินบีรวม (B2, B6, B9, B12)",
            quote: "\"Precision nutrients for optimal homocysteine metabolism and internal balance.\"",
            bg: "bg-genoveq-blue-500",
            image: "/sinc1.svg",
        },
        {
            title: "SYSTEMIC INTEGRITY MATRIX™",
            subtitle: "(นวัตกรรมโครงสร้างและระบบนำส่ง)",
            concept: "เน้นความแข็งแรงของโครงสร้าง (หลอดเลือด/กระดูก) และการนำส่งสารอาหารให้ถูกจุด",
            ingredients: "Vitamin K2 (MK-7), Vitamin D3 และ Magnesium Bisglycinate",
            quote: "\"Advanced synergy for structural strength and precise calcium management.\"",
            bg: "bg-gold-gradient",
            image: "/sinc2.svg",
        },
        {
            title: "CYTO-DEFENSE & ENERGEN™",
            subtitle: "(เกราะป้องกันเซลล์และพลังงาน)",
            concept: "เน้นการสร้างพลังงานในระดับไมโทคอนเดรียและการป้องกันอนุมูลอิสระระดับสูง",
            ingredients: "Coenzyme Q10, Astaxanthin และ L-Glutathione Complex",
            quote: "\"Mitochondrial energy support and multi-layer cellular protection.\"",
            bg: "bg-indigo-500",
            image: "/sinc3.svg",
        },
    ];

    return (
        <section className="py-24 bg-genoveq-blue-50/50 dark:bg-slate-900 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-20 right-0 w-64 h-64 bg-genoveq-blue-200/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-0 w-64 h-64 bg-genoveq-gold-200/20 rounded-full blur-3xl"></div>
                {/* Vector Background */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 z-0">
                    <Image
                        src="/vector.svg"
                        alt="Background Pattern"
                        fill
                        className="object-cover object-center mix-blend-multiply dark:mix-blend-overlay"
                    />
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-16 text-center">
                    <span className="text-genoveq-gold-600 font-bold tracking-wider uppercase text-sm mb-2 block">Systematic Synergy</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-genoveq-blue-900 dark:text-white mb-6">
                        3 มิติการดูแลสุขภาพเชิงรุก
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        VectraCore Pro ผสานกลไกการทำงานร่วมกันอย่างเป็นระบบ เพื่อจัดการความเสื่อมที่ต้นตอ
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-genoveq-blue-100 dark:border-slate-700 shadow-lg shadow-genoveq-blue-100/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
                        >
                            <div
                                className={`w-32 h-32 mb-6 mx-auto ${feature.bg}`}
                                style={{
                                    maskImage: `url('${feature.image}')`,
                                    WebkitMaskImage: `url('${feature.image}')`,
                                    maskSize: 'contain',
                                    WebkitMaskSize: 'contain',
                                    maskRepeat: 'no-repeat',
                                    WebkitMaskRepeat: 'no-repeat',
                                    maskPosition: 'center',
                                    WebkitMaskPosition: 'center'
                                }}
                            >
                            </div>
                            <h3 className="text-2xl font-bold font-kanit text-genoveq-blue-900 dark:text-white mb-1 text-center font-sans tracking-wide uppercase">{feature.title}</h3>
                            <p className="text-genoveq-blue-600 dark:text-genoveq-blue-300 text-base mb-6 text-center font-kanit">{feature.subtitle}</p>

                            <div className="space-y-4 mb-6 flex-grow">
                                <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                                    <span className="text-sm font-bold text-genoveq-gold-600 uppercase tracking-wider block mb-2">Concept</span>
                                    <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed font-kanit">
                                        {feature.concept}
                                    </p>
                                </div>
                                <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                                    <span className="text-sm font-bold text-genoveq-gold-600 uppercase tracking-wider block mb-2">Key Ingredients</span>
                                    <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed font-medium">
                                        {feature.ingredients}
                                    </p>
                                </div>
                            </div>

                            <div className="border-t border-slate-100 dark:border-slate-700 pt-4 mt-auto">
                                <p className="text-slate-500 dark:text-slate-400 text-sm italic text-center leading-relaxed">
                                    {feature.quote}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
