import Link from "next/link";

export const dynamic = "force-dynamic";

type PolicySection = {
  id: string;
  titleEn: string;
  titleTh: string;
  en: string[];
  th: string[];
};

const sections: PolicySection[] = [
  {
    id: "1",
    titleEn: "Acceptance of Terms",
    titleTh: "การยอมรับข้อกำหนด",
    en: [
      "By accessing this website or engaging Network Man services, you agree to these Terms of Service and all applicable laws and regulations.",
    ],
    th: [
      "เมื่อคุณเข้าถึงเว็บไซต์นี้หรือใช้บริการของ Network Man ถือว่าคุณยอมรับข้อกำหนดการใช้งานฉบับนี้ รวมถึงกฎหมายและข้อบังคับที่เกี่ยวข้องทั้งหมด",
    ],
  },
  {
    id: "2",
    titleEn: "Scope of Services",
    titleTh: "ขอบเขตการให้บริการ",
    en: [
      "Network Man provides private network solution design, consultation, implementation, and maintenance for both On Premises and On Cloud environments.",
      "We also provide integrated Software, Hardware, and IoT Automation development, including POS, ERP, CRM, and HRM systems tailored to each business workflow.",
    ],
    th: [
      "Network Man ให้บริการออกแบบ ให้คำปรึกษา ติดตั้ง และดูแลระบบ Private Network ทั้งรูปแบบ On Premises และ On Cloud",
      "เรายังให้บริการพัฒนา Software, Hardware และ IoT Automation แบบครบวงจร รวมถึงระบบ POS, ERP, CRM และ HRM ที่ปรับให้เหมาะกับกระบวนการทำงานของแต่ละธุรกิจ",
    ],
  },
  {
    id: "3",
    titleEn: "Client Responsibilities",
    titleTh: "หน้าที่ของลูกค้า",
    en: [
      "You agree to provide accurate project requirements, timely access to sites, and relevant technical information needed for delivery.",
      "You are responsible for all legal rights to any data, software, hardware, or content provided to us during the project.",
    ],
    th: [
      "ลูกค้าตกลงที่จะให้ข้อมูลความต้องการของโครงการอย่างถูกต้อง ให้สิทธิ์เข้าพื้นที่ตามเวลาที่กำหนด และให้ข้อมูลทางเทคนิคที่จำเป็นต่อการดำเนินงาน",
      "ลูกค้ารับผิดชอบสิทธิ์ตามกฎหมายของข้อมูล ซอฟต์แวร์ ฮาร์ดแวร์ หรือเนื้อหาที่ส่งมอบให้เราใช้ในโครงการ",
    ],
  },
  {
    id: "4",
    titleEn: "Compliance and Proper Use",
    titleTh: "การใช้งานที่ถูกต้องและสอดคล้องข้อกำหนด",
    en: [
      "Clients must not use systems delivered by Network Man for unlawful activity, unauthorized surveillance, network abuse, or security attacks.",
      "Where third-party platforms or APIs are integrated (for example cloud infrastructure or social APIs), clients must comply with those platform policies.",
    ],
    th: [
      "ลูกค้าต้องไม่ใช้งานระบบที่ Network Man ติดตั้งหรือพัฒนาเพื่อกิจกรรมที่ผิดกฎหมาย การสอดส่องโดยมิชอบ การโจมตีระบบ หรือการใช้งานเครือข่ายที่เป็นอันตราย",
      "หากมีการเชื่อมต่อกับแพลตฟอร์มหรือ API ของบุคคลที่สาม (เช่น cloud infrastructure หรือ social APIs) ลูกค้าต้องปฏิบัติตามนโยบายของผู้ให้บริการนั้นด้วย",
    ],
  },
  {
    id: "5",
    titleEn: "Intellectual Property",
    titleTh: "ทรัพย์สินทางปัญญา",
    en: [
      "Pre-existing frameworks, tools, and know-how remain the property of Network Man.",
      "Ownership of custom deliverables transfers as specified in each service agreement or statement of work.",
    ],
    th: [
      "เครื่องมือ โครงสร้างงาน และองค์ความรู้ที่มีอยู่เดิมยังคงเป็นทรัพย์สินของ Network Man",
      "สิทธิ์ในผลงานพัฒนาเฉพาะจะเป็นไปตามที่ระบุในสัญญาบริการหรือเอกสารขอบเขตงานของแต่ละโครงการ",
    ],
  },
  {
    id: "6",
    titleEn: "Limitation of Liability",
    titleTh: "ข้อจำกัดความรับผิด",
    en: [
      "Services are provided based on agreed scope and technical constraints. Network Man is not liable for indirect damages, loss of profits, or third-party service outages.",
      "We are not responsible for incidents caused by unauthorized modifications, credential leaks, or misuse after system handover.",
    ],
    th: [
      "บริการทั้งหมดดำเนินการตามขอบเขตงานและข้อจำกัดทางเทคนิคที่ตกลงร่วมกัน Network Man ไม่รับผิดชอบต่อความเสียหายทางอ้อม การสูญเสียผลกำไร หรือการหยุดให้บริการของผู้ให้บริการภายนอก",
      "เราไม่รับผิดชอบเหตุการณ์ที่เกิดจากการแก้ไขระบบโดยไม่ได้รับอนุญาต การรั่วไหลของข้อมูลรับรอง หรือการใช้งานผิดวัตถุประสงค์หลังการส่งมอบระบบ",
    ],
  },
  {
    id: "7",
    titleEn: "Updates to These Terms",
    titleTh: "การเปลี่ยนแปลงข้อกำหนด",
    en: [
      "We may revise these Terms of Service from time to time. Updated versions will be posted on this page with a revised effective date.",
    ],
    th: [
      "เราอาจปรับปรุงข้อกำหนดการใช้งานเป็นระยะ โดยจะแสดงฉบับล่าสุดบนหน้านี้พร้อมวันที่มีผลบังคับใช้ที่อัปเดตแล้ว",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="hero-mesh min-h-screen">
      <div className="mx-auto w-full max-w-5xl px-6 pb-16 pt-10 md:px-10">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <Link className="font-display text-lg font-semibold tracking-tight text-slate-950" href="/">
            Network Man
          </Link>
          <div className="flex gap-4 text-sm font-medium text-slate-600">
            <Link className="transition-colors hover:text-slate-950" href="/privacy">
              Privacy
            </Link>
          </div>
        </div>

        <section className="soft-card rounded-3xl p-7 md:p-9">
          <p className="font-display text-sm font-semibold tracking-wider text-sky-700">LEGAL</p>
          <h1 className="font-display mt-2 text-4xl font-semibold tracking-tight text-slate-950">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-slate-500">Effective Date: March 11, 2026</p>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            ข้อกำหนดฉบับนี้ใช้กับบริการของบริษัท Network Man ทั้งด้านออกแบบและติดตั้งระบบ Private
            Network, งานที่ปรึกษา, และงานพัฒนาระบบ Software + Hardware + IoT Automation
          </p>
        </section>

        <section className="mt-6 space-y-4">
          {sections.map((section) => (
            <article key={section.id} className="soft-card rounded-2xl p-6 md:p-7">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-950">
                {section.id}. {section.titleEn}
              </h2>
              <p className="mt-1 text-sm font-medium text-sky-700">{section.titleTh}</p>
              <div className="mt-4 grid gap-5 md:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="mb-2 font-display text-xs tracking-wider text-slate-500">ENGLISH</p>
                  <div className="space-y-3 text-sm leading-7 text-slate-700">
                    {section.en.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="mb-2 font-display text-xs tracking-wider text-slate-500">THAI</p>
                  <div className="space-y-3 text-sm leading-7 text-slate-700">
                    {section.th.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
