import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 selection:bg-genoveq-blue-100 selection:text-genoveq-blue-900">
      <Navbar />
      <Hero />
      {/* Health Science (Article) Section */}
      <section id="article" className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-genoveq-blue-900 dark:text-white mb-6">ศาสตร์แห่งสุขภาพ</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-lg mb-8">
              เข้าใจร่างกายผ่านวิทยาศาสตร์: Homocysteine (HCY) คือกุญแจสำคัญ
            </p>
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-genoveq-blue-800 mb-4">ภัยเงียบ: Homocysteine (HCY)</h3>
              <p className="text-slate-600 mb-8">
                HCY คือ "ของเสียชีวเคมี" ที่เกิดขึ้นในร่างกาย หากมีระดับสูงเกินไป จะกลายเป็น "พายุทำลายล้าง" ในระดับเซลล์ ซึ่งเป็นรากฐานของความเสื่อมและโรคเรื้อรัง (NCDs)
              </p>
            </div>
          </div>

          {/* Text Content Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 bg-red-50 rounded-xl border-t-4 border-red-500 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold font-kanit text-red-700 text-lg mb-2">ต่อระบบหัวใจและหลอดเลือด</h4>
              <p className="text-sm text-red-600">ทำลายผนังหลอดเลือด เพิ่มความเสี่ยงลิ่มเลือดและหลอดเลือดแข็งตัว</p>
            </div>
            <div className="p-6 bg-orange-50 rounded-xl border-t-4 border-orange-500 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold font-kanit text-orange-700 text-lg mb-2">ต่อสมองและความจำ</h4>
              <p className="text-sm text-orange-600">เร่งอัตราการฝ่อลีบของสมอง เพิ่มความเสี่ยงภาวะสมองเสื่อม</p>
            </div>
            <div className="p-6 bg-yellow-50 rounded-xl border-t-4 border-yellow-500 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold font-kanit text-yellow-700 text-lg mb-2">ต่อการแก่ชราของเซลล์</h4>
              <p className="text-sm text-yellow-600">สัมพันธ์กับการหดสั้นของเทโลเมียร์ (Telomere) และการอักเสบเรื้อรัง</p>
            </div>
          </div>

          {/* Image Grid - Horizontal Emphasis */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[3/2] group border border-slate-100">
              <Image
                src="/science-hcy-new.png"
                alt="Scientific Mechanism Diagram 1"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[3/2] group border border-slate-100">
              <Image
                src="/science-hcy-2.png"
                alt="Scientific Mechanism Diagram 2"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[3/2] group border border-slate-100">
              <Image
                src="/science-hcy-3.png"
                alt="Scientific Mechanism Diagram 3"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      <FeatureSection />

      {/* About Us Section */}
      <section id="about" className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-genoveq-blue-900 dark:text-white mb-8">เกี่ยวกับ GENOVEQ</h2>
            <div className="prose prose-lg mx-auto text-slate-600 dark:text-slate-400 mb-8">
              <p className="font-semibold text-xl text-genoveq-gold-600 mb-4">
                "Proactive Precision Health" (สุขภาพแม่นยำเชิงรุก)
              </p>
              <p className="mb-6">
                GENOVEQ ไม่ได้เป็นเพียงแบรนด์ผลิตภัณฑ์เสริมอาหาร แต่เราคือผู้บุกเบิกที่กำลังพลิกโฉมแนวคิดการดูแลสุขภาพแบบเดิม
                ปรัชญาของเราคือการเปลี่ยนจากการ "รักษา" ที่ปลายเหตุ ไปสู่การ "ป้องกัน" ที่ต้นตอในระดับที่ลึกซึ้งที่สุด
              </p>
              <p>
                <strong>พันธกิจ (Mission):</strong> มอบพลังให้แต่ละบุคคลด้วยโซลูชันโภชนาการที่ผ่านการวิจัยทางวิทยาศาสตร์
                และออกแบบมาอย่างแม่นยำ เพื่อปรับปรุงสุขภาพให้เหมาะสมและป้องกันโรคภัยไข้เจ็บ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="relative py-24 bg-genoveq-blue-50/50 dark:bg-slate-800 overflow-hidden">
        {/* Background Vector */}
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none opacity-10">
          <Image
            src="/vector.svg"
            alt="Decorative Vector"
            fill
            className="object-cover object-center mix-blend-multiply dark:mix-blend-overlay"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-wrap items-center -mx-6">
            <div className="w-full md:w-1/2 px-6 mb-12 md:mb-0">
              <div className="relative w-full aspect-square rounded-3xl shadow-xl overflow-hidden border-4 border-white">
                <Image
                  src="/product-vectracore.png"
                  alt="VectraCore Pro Product"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-6">
              <span className="text-genoveq-gold-600 font-bold tracking-wider uppercase text-sm mb-2 block">The Master Guide</span>
              <h2 className="text-3xl md:text-4xl font-bold text-genoveq-blue-900 dark:text-white mb-6">VectraCore Pro (เวคตราคอร์ โปร)</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg">
                นวัตกรรมทางโภชนเภสัชที่ก้าวข้ามขีดจำกัดของผลิตภัณฑ์เสริมอาหารทั่วไป ด้วยการผสานแนวคิดเวชศาสตร์ฟังก์ชัน (Functional Medicine) และชีวเคมีเชิงลึก
              </p>
              <ul className="space-y-3 text-slate-700 dark:text-slate-300 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-genoveq-gold-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span><strong>Precisely Formulated:</strong> ออกแบบอย่างแม่นยำตามหลักชีวเคมี</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-genoveq-gold-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span><strong>Root Cause Focus:</strong> จัดการปัญหาที่ระดับกลไกเซลล์ (Cellular Mechanism)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-genoveq-gold-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span><strong>Systematic Synergy:</strong> การทำงานร่วมกันของสารอาหารเพื่อผลลัพธ์สูงสุด</span>
                </li>
              </ul>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-genoveq-blue-100 shadow-sm">
                <h4 className="font-bold text-genoveq-blue-900 dark:text-white mb-2">ขนาดและวิธีใช้</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">รับประทานวันละ 1 แคปซูล พร้อมมื้ออาหารเช้า หรือมื้อที่มีไขมันดีเพื่อการดูดซึมที่ดีที่สุด</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Join Us Section */}
      <section id="join" className="py-24 bg-genoveq-gold-50/50 dark:bg-slate-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-genoveq-blue-900 dark:text-white mb-6">ร่วมเป็นส่วนหนึ่งของ GENOVEQ</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 text-lg">
            เรากำลังมองหาพันธมิตรที่มีวิสัยทัศน์เดียวกัน "Certified Ambassador" ที่พร้อมส่งต่อความรู้ด้านสุขภาพที่ถูกต้องและแม่นยำ
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-genoveq-gold-600 mb-2">Education First</h3>
              <p className="text-sm text-slate-600">เน้นการให้ความรู้เชิงลึกที่ถูกต้องตามหลักวิทยาศาสตร์</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-genoveq-gold-600 mb-2">High Standards</h3>
              <p className="text-sm text-slate-600">ผลิตภัณฑ์มาตรฐานการผลิตระดับสากล และผ่านการรับรองจาก อย.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-genoveq-gold-600 mb-2">Growth Together</h3>
              <p className="text-sm text-slate-600">เติบโตไปพร้อมกับแบรนด์นวัตกรรมสุขภาพระดับโลก</p>
            </div>
          </div>

          <div className="relative w-full max-w-4xl mx-auto h-[500px] rounded-2xl overflow-hidden mb-12 shadow-lg">
            <Image
              src="/business-partner.png"
              alt="Business Partnership"
              fill
              className="object-cover"
            />
          </div>

          <a href="#" className="px-8 py-4 bg-genoveq-blue-900 text-white rounded-full hover:bg-genoveq-blue-800 transition-colors shadow-lg font-medium inline-block">
            สมัครเป็นพันธมิตรกับเรา
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-genoveq-blue-900 to-genoveq-blue-800 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
            {/* Decorative Circle */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-genoveq-gold-500 opacity-20 rounded-full -ml-16 -mb-16"></div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">ปรึกษาเราเพื่อสุขภาพที่ดีกว่า</h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8 relative z-10">
              พร้อมให้คำปรึกษาและดูแลสุขภาพของคุณด้วยทีมงานมืออาชีพ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <a href="https://line.me/ti/p/@genoveq" className="px-8 py-3 bg-white text-genoveq-blue-900 rounded-full hover:bg-blue-50 transition-colors font-bold flex items-center justify-center gap-2">
                <span>LINE: @genoveq</span>
              </a>
              <a href="mailto:contact@genoveq.com" className="px-8 py-3 bg-gold-gradient text-white rounded-full hover:opacity-95 transition-all font-medium flex items-center justify-center gap-2 shadow-lg shadow-genoveq-gold-500/20">
                <span>ส่งข้อความหาเรา</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
