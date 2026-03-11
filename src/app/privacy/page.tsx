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
    titleEn: "Introduction",
    titleTh: "บทนำ",
    en: [
      "This Privacy Policy explains how Network Man collects, uses, stores, and protects information when delivering private network, system integration, and automation services.",
    ],
    th: [
      "นโยบายความเป็นส่วนตัวฉบับนี้อธิบายวิธีที่ Network Man เก็บ ใช้ จัดเก็บ และปกป้องข้อมูลในการให้บริการด้าน Private Network, การเชื่อมต่อระบบ และงาน Automation",
    ],
  },
  {
    id: "2",
    titleEn: "Data We Collect",
    titleTh: "ข้อมูลที่เราเก็บรวบรวม",
    en: [
      "Project and technical data: network topology, device configuration details, system requirements, and operational preferences needed for implementation.",
      "Business operation data: information required to configure POS/ERP/CRM/HRM workflows.",
      "Support data: logs and incident records generated during troubleshooting, monitoring, and maintenance.",
    ],
    th: [
      "ข้อมูลโครงการและข้อมูลเทคนิค: เช่น topology เครือข่าย รายละเอียดการตั้งค่าอุปกรณ์ ข้อกำหนดระบบ และรูปแบบการใช้งานที่จำเป็นต่อการติดตั้ง",
      "ข้อมูลการดำเนินธุรกิจ: ข้อมูลที่จำเป็นต่อการตั้งค่า workflow ของระบบ POS/ERP/CRM/HRM",
      "ข้อมูลเพื่อการซัพพอร์ต: log และบันทึกเหตุการณ์ที่เกิดขึ้นระหว่างการดูแล แก้ไขปัญหา และบำรุงรักษา",
    ],
  },
  {
    id: "3",
    titleEn: "How We Use Data",
    titleTh: "วัตถุประสงค์การใช้ข้อมูล",
    en: [
      "To design, implement, and optimize private network and integrated software/hardware systems.",
      "To deliver customer support, improve reliability, and maintain system security.",
      "To fulfill contractual obligations and comply with applicable legal requirements.",
    ],
    th: [
      "เพื่อออกแบบ ติดตั้ง และปรับแต่งระบบ Private Network รวมถึงระบบ software/hardware ที่เชื่อมต่อกัน",
      "เพื่อให้บริการซัพพอร์ต เพิ่มความเสถียร และรักษาความปลอดภัยของระบบ",
      "เพื่อปฏิบัติตามข้อตกลงทางสัญญาและข้อกำหนดตามกฎหมายที่เกี่ยวข้อง",
    ],
  },
  {
    id: "4",
    titleEn: "Data Sharing",
    titleTh: "การเปิดเผยข้อมูลต่อบุคคลอื่น",
    en: [
      "We do not sell personal or project data.",
      "Data may be shared only with authorized team members, approved implementation partners, or service providers strictly required for project delivery.",
      "When third-party cloud services are used, data handling is also subject to those providers' policies.",
    ],
    th: [
      "เราไม่มีนโยบายขายข้อมูลส่วนบุคคลหรือข้อมูลโครงการ",
      "ข้อมูลจะถูกเปิดเผยเฉพาะกับทีมงานที่ได้รับอนุญาต พาร์ทเนอร์ที่ได้รับอนุมัติ หรือผู้ให้บริการที่จำเป็นต่อการส่งมอบงานเท่านั้น",
      "หากมีการใช้บริการ cloud ของบุคคลที่สาม การจัดการข้อมูลจะอยู่ภายใต้นโยบายของผู้ให้บริการนั้นเพิ่มเติม",
    ],
  },
  {
    id: "5",
    titleEn: "Data Security and Retention",
    titleTh: "ความปลอดภัยและระยะเวลาการจัดเก็บ",
    en: [
      "We apply reasonable administrative and technical safeguards, including access controls and environment isolation where applicable.",
      "Data is retained only as long as needed for operational, contractual, and legal purposes, then securely removed or anonymized.",
    ],
    th: [
      "เราใช้มาตรการด้านการจัดการและเทคนิคที่เหมาะสม เช่น การควบคุมสิทธิ์เข้าถึง และการแยกสภาพแวดล้อมของระบบตามความจำเป็น",
      "ข้อมูลจะถูกเก็บไว้เท่าที่จำเป็นต่อการดำเนินงาน สัญญา และข้อกำหนดทางกฎหมาย ก่อนลบหรือทำให้ไม่สามารถระบุตัวตนได้อย่างเหมาะสม",
    ],
  },
  {
    id: "6",
    titleEn: "Your Rights",
    titleTh: "สิทธิของเจ้าของข้อมูล",
    en: [
      "You may request access, correction, or deletion of your data, subject to legal and contractual limitations.",
      "You may also request clarification on how data is used in your project environment.",
    ],
    th: [
      "คุณสามารถขอเข้าถึง แก้ไข หรือขอลบข้อมูลของคุณได้ ภายใต้ข้อจำกัดตามกฎหมายและเงื่อนไขสัญญา",
      "คุณสามารถขอข้อมูลเพิ่มเติมเกี่ยวกับการใช้ข้อมูลในระบบโครงการของคุณได้เช่นกัน",
    ],
  },
  {
    id: "7",
    titleEn: "Policy Updates",
    titleTh: "การปรับปรุงนโยบาย",
    en: [
      "We may update this Privacy Policy periodically. Any changes will be posted on this page with the latest update date.",
    ],
    th: [
      "เราอาจปรับปรุงนโยบายความเป็นส่วนตัวเป็นระยะ โดยจะแสดงฉบับล่าสุดพร้อมวันที่อัปเดตบนหน้านี้",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="hero-mesh min-h-screen">
      <div className="mx-auto w-full max-w-5xl px-6 pb-16 pt-10 md:px-10">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <Link className="font-display text-lg font-semibold tracking-tight text-slate-950" href="/">
            Network Man
          </Link>
          <div className="flex gap-4 text-sm font-medium text-slate-600">
            <Link className="transition-colors hover:text-slate-950" href="/terms">
              Terms
            </Link>
          </div>
        </div>

        <section className="soft-card rounded-3xl p-7 md:p-9">
          <p className="font-display text-sm font-semibold tracking-wider text-sky-700">LEGAL</p>
          <h1 className="font-display mt-2 text-4xl font-semibold tracking-tight text-slate-950">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-slate-500">Last Updated: March 11, 2026</p>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            นโยบายฉบับนี้ใช้กับการให้บริการของ Network Man ที่เกี่ยวข้องกับงานโครงสร้างเครือข่าย ระบบภายในองค์กร
            และระบบอัตโนมัติ โดยครอบคลุมทั้ง On Premises และ On Cloud
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
