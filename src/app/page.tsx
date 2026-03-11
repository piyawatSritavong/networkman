import Link from "next/link";

export const dynamic = "force-dynamic";

const services = [
  {
    title: "Private Network Architecture",
    subtitle: "ออกแบบระบบเครือข่ายส่วนตัว",
    points: [
      "วางแผนระบบ On Premises / On Cloud ให้พร้อม scale",
      "ออกแบบแยก segment, VLAN, security zone แบบใช้งานจริง",
      "ลด downtime ด้วย topology ที่ยืดหยุ่นและดูแลง่าย",
    ],
  },
  {
    title: "Infrastructure Deployment",
    subtitle: "ติดตั้งและ config อุปกรณ์ครบชุด",
    points: [
      "Gateway, MikroTik, Controller, Switch, Hub, Firewall, AP",
      "CCTV และระบบเฝ้าระวังที่เชื่อมเข้ากับ network หลัก",
      "จัดวางห้อง Server และระบบไฟ/สายสัญญาณมาตรฐาน",
    ],
  },
  {
    title: "Business System Integration",
    subtitle: "พัฒนาระบบให้ทำงานร่วมกับเครือข่ายเดียวกัน",
    points: [
      "POS, ERP, CRM, HRM ที่ตรง workflow ของธุรกิจ",
      "เชื่อมข้อมูลหน้าร้าน หลังบ้าน และฝ่ายบริหารแบบ real-time",
      "ลดงานซ้ำซ้อน ด้วยระบบเดียวที่คุมทั้งองค์กร",
    ],
  },
  {
    title: "Software + Hardware + IoT",
    subtitle: "พัฒนาระบบอัตโนมัติครบวงจร",
    points: [
      "พัฒนา custom software และ embedded hardware",
      "วาง sensor/automation เพื่อควบคุมงานภายในสถานที่",
      "ต่อยอด dashboard และแจ้งเตือนเพื่อบริหารเชิงรุก",
    ],
  },
];

const cafeJourney = [
  "สำรวจหน้างานและวางแผนโครงสร้างระบบทั้งหมดของร้าน",
  "ติดตั้งอินเทอร์เน็ตภายในร้าน + AP coverage ให้ครอบคลุมทุกโซน",
  "ออกแบบและติดตั้งกล้องวงจรปิด + ระบบเก็บข้อมูลอย่างปลอดภัย",
  "จัดทำห้อง server และ config อุปกรณ์ network ทั้งระบบ",
  "ติดตั้งหรือพัฒนา POS, ERP, CRM, HRM ให้เข้ากับงานจริง",
  "ส่งมอบระบบเดียวที่เชื่อมต่อทุกฝ่าย ตั้งแต่หน้าร้านถึงผู้บริหาร",
];

export default function Home() {
  return (
    <div className="hero-mesh min-h-screen">
      <div className="grid-overlay min-h-screen">
        <main className="mx-auto w-full max-w-6xl px-6 pb-16 pt-8 md:px-10 md:pt-10">
          <nav className="reveal mb-12 flex items-center justify-between">
            <div className="font-display text-lg font-semibold tracking-tight">Network Man</div>
            <div className="flex items-center gap-4 text-sm font-medium text-slate-600">
              <Link className="transition-colors hover:text-slate-950" href="/terms">
                Terms
              </Link>
              <Link className="transition-colors hover:text-slate-950" href="/privacy">
                Privacy
              </Link>
            </div>
          </nav>

          <section className="mb-14 grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
            <div>
              <p className="reveal font-display mb-5 inline-flex rounded-full border border-sky-200 bg-white px-4 py-1.5 text-xs font-semibold tracking-wider text-sky-700">
                PRIVATE NETWORK + BUSINESS SYSTEM INTEGRATION
              </p>
              <h1 className="reveal reveal-delay-1 font-display text-4xl font-semibold leading-tight tracking-tight text-slate-950 md:text-5xl">
                Network Man
                <br />
                เชื่อมทั้งองค์กรให้เป็นระบบเดียว
              </h1>
              <p className="reveal reveal-delay-2 mt-5 max-w-2xl text-base leading-8 text-slate-600">
                เราให้บริการออกแบบ solution, ติดตั้ง, consult ระบบ{" "}
                <strong>Private Network</strong> ทั้งแบบ On Premises และ On Cloud พร้อมพัฒนา{" "}
                <strong>Software + Hardware + IoT Automation</strong> แบบครบวงจร เพื่อให้ระบบ
                IT ของคุณทำงานร่วมกันจริงตั้งแต่หน้างานถึงผู้บริหาร
              </p>
              <div className="reveal reveal-delay-3 mt-8 flex flex-wrap gap-3">
                <a
                  className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                  href="mailto:hello@networkman.co"
                >
                  Contact Us
                </a>
                <a
                  className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-500 hover:text-slate-950"
                  href="#use-case"
                >
                  ดูตัวอย่างงานจริง
                </a>
              </div>
            </div>

            <div className="soft-card reveal reveal-delay-2 rounded-3xl p-6 md:p-8">
              <div className="mb-6 grid w-40 grid-cols-3 gap-1 rounded-xl bg-slate-950 p-1.5">
                <div className="h-10 rounded-sm bg-[#4f83e8]" />
                <div className="h-10 rounded-sm bg-[#489ee4]" />
                <div className="h-10 rounded-sm bg-[#57c7d9]" />
                <div className="h-10 rounded-sm bg-[#6464e7]" />
                <div className="h-10 rounded-sm bg-[#06080f]" />
                <div className="h-10 rounded-sm bg-[#40b6de]" />
                <div className="h-10 rounded-sm bg-[#6b4be8]" />
                <div className="h-10 rounded-sm bg-[#4f83e8]" />
                <div className="h-10 rounded-sm bg-[#4a9de4]" />
              </div>
              <h2 className="font-display text-2xl font-semibold text-slate-950">Total System Partner</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                จากวางสายและตั้งค่า network ไปจนถึงระบบธุรกิจและ automation เราดูแลให้ทุกชิ้นส่วนทำงานร่วมกันเป็นระบบเดียว ลดปัญหาการเชื่อมต่อข้ามทีมและลดค่าใช้จ่ายระยะยาว
              </p>
              <div className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
                <div className="rounded-xl border border-sky-100 bg-white px-4 py-3">On Premises</div>
                <div className="rounded-xl border border-cyan-100 bg-white px-4 py-3">On Cloud</div>
                <div className="rounded-xl border border-blue-100 bg-white px-4 py-3">Security First</div>
                <div className="rounded-xl border border-violet-100 bg-white px-4 py-3">
                  IoT Automation
                </div>
              </div>
            </div>
          </section>

          <section className="mb-14">
            <div className="mb-6 flex items-end justify-between gap-4">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-950">บริการหลัก</h2>
              <p className="max-w-xl text-right text-sm text-slate-500">
                ครอบคลุมงาน network infrastructure และระบบ software/hardware ที่ต้องเชื่อมกันแบบ end-to-end
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {services.map((service) => (
                <article key={service.title} className="soft-card rounded-2xl p-6">
                  <p className="font-display text-lg font-semibold text-slate-950">{service.title}</p>
                  <p className="mb-4 text-sm text-sky-700">{service.subtitle}</p>
                  <ul className="space-y-2 text-sm leading-7 text-slate-600">
                    {service.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-slate-800" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section id="use-case" className="mb-14 rounded-3xl bg-slate-950 px-6 py-9 text-white md:px-8">
            <p className="font-display mb-3 text-sm tracking-wide text-cyan-300">USE CASE EXAMPLE</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight">ร้านคาเฟ่เปิดใหม่ เริ่มต้นกับเราอย่างไร</h2>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {cafeJourney.map((step, index) => (
                <div
                  key={step}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-slate-100"
                >
                  <p className="font-display mb-2 text-xs tracking-wider text-cyan-200">
                    STEP {String(index + 1).padStart(2, "0")}
                  </p>
                  {step}
                </div>
              ))}
            </div>
          </section>

          <section className="soft-card rounded-3xl p-7 md:p-8">
            <h2 className="font-display text-2xl font-semibold text-slate-950">พร้อมออกแบบระบบให้ธุรกิจของคุณ</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
              เหมาะสำหรับธุรกิจที่ต้องการลดความซับซ้อนของหลายระบบแยกส่วน และต้องการพาร์ทเนอร์ที่เข้าใจทั้ง network, infrastructure และ application พร้อมกัน
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <a
                className="rounded-xl bg-[#4f83e8] px-5 py-3 font-semibold text-white transition hover:bg-[#426ec5]"
                href="mailto:hello@networkman.co"
              >
                hello@networkman.co
              </a>
              <Link
                className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:border-slate-500 hover:text-slate-950"
                href="/terms"
              >
                Terms of Service
              </Link>
              <Link
                className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:border-slate-500 hover:text-slate-950"
                href="/privacy"
              >
                Privacy Policy
              </Link>
            </div>
          </section>

          <footer className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500">
            <p>© {new Date().getFullYear()} Network Man. All rights reserved.</p>
            <p>Private Network Solutions | Software | Hardware | IoT Automation</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
