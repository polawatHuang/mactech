import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import {
  ChatBubbleLeftRightIcon,
  PencilSquareIcon,
  CalculatorIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  ClipboardDocumentCheckIcon,
  BuildingOffice2Icon,
  PhoneIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import Footer from "@/components/Footer";

export const metadata = {
  title: "บริการให้คำปรึกษาฟรี | MACTECH",
  description:
    "ปรึกษาฟรีเรื่องแผงรั้วเหล็ก ตาข่ายกรงไก่ และลวดหนามกับผู้เชี่ยวชาญ MACTECH ตั้งแต่สำรวจหน้างาน ออกแบบ เสนอราคา ไปจนถึงติดตั้ง ไม่มีค่าใช้จ่าย",
  alternates: {
    canonical: "/consulting",
  },
};

const benefits = [
  {
    title: "ให้คำแนะนำโดยผู้เชี่ยวชาญ",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    title: "ออกแบบรั้วตามความต้องการ",
    icon: PencilSquareIcon,
  },
  {
    title: "ประเมินราคาอย่างเหมาะสม",
    icon: CalculatorIcon,
  },
  {
    title: "มั่นใจในคุณภาพและการบริการ",
    icon: ShieldCheckIcon,
  },
];

const steps = [
  {
    no: "1",
    title: "สอบถามความต้องการ",
    desc: "พูดคุยรายละเอียดพื้นที่ งบประมาณ และรูปแบบรั้วที่ต้องการ",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    no: "2",
    title: "ประเมินพื้นที่หน้างาน",
    desc: "วิเคราะห์ลักษณะพื้นที่ ข้อจำกัด และความเหมาะสมในการติดตั้ง",
    icon: PencilSquareIcon,
  },
  {
    no: "3",
    title: "ออกแบบและเสนอวัสดุ",
    desc: "ออกแบบรั้วที่เหมาะสม พร้อมวัสดุและราคาที่ชัดเจนให้เลือก",
    icon: BuildingOffice2Icon,
  },
  {
    no: "4",
    title: "สรุปแบบและยืนยัน",
    desc: "สรุปรายละเอียดแบบรั้ว วัสดุ ราคา และระยะเวลาในการติดตั้ง",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    no: "5",
    title: "พร้อมดำเนินการติดตั้ง",
    desc: "ทีมงานมืออาชีพพร้อมติดตั้งงานจริงอย่างมีคุณภาพ",
    icon: WrenchScrewdriverIcon,
  },
];

const reasons = [
  "ประสบการณ์ด้านระบบรั้วเหล็กมากกว่า 10 ปี",
  "ทีมงานเชี่ยวชาญ ให้คำแนะนำอย่างมืออาชีพ",
  "แบบรั้วหลากหลาย ครบทุกความต้องการ",
  "วัสดุคุณภาพสูง ได้มาตรฐาน",
  "บริการครบวงจร ตั้งแต่ให้คำปรึกษาจนถึงติดตั้ง",
];

const works = [
  {
    title: "ให้คำแนะนำโดยผู้เชี่ยวชาญ",
    image: "/images/call-center.webp",
  },
  {
    title: "ประเมินพื้นที่หน้างานจริง",
    image: "/images/engineer.png",
  },
  {
    title: "ออกแบบและเลือกวัสดุ",
    image: "/images/beautiful.jpg",
  },
  {
    title: "ติดตั้งโดยทีมงานมืออาชีพ",
    image: "/images/wall-engineer.jpg",
  },
];

export default function ConsultingPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />

      <section className="relative overflow-hidden border-b border-white/10 pt-[76px] lg:pt-[86px]">
        <Image
          src="/images/consult.png"
          alt="บริการให้คำปรึกษา"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.96)_0%,rgba(0,0,0,.86)_38%,rgba(0,0,0,.25)_100%)]" />

        <div className="container-main relative z-10 grid min-h-[620px] items-center gap-10 px-6 py-14 lg:grid-cols-[.92fr_1.08fr] lg:px-14">
          <div>
            <div className="mb-8 text-sm text-white/55">
              หน้าแรก
              <span className="mx-2">›</span>
              <span className="text-[#d4a63c]">บริการให้คำปรึกษา</span>
            </div>

            <p className="text-lg font-bold text-[#d4a63c]">
              บริการให้คำปรึกษา
            </p>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              คำแนะนำจากผู้เชี่ยวชาญ
              <br />
              <span className="text-[#d4a63c]">เพื่อรั้วที่ใช่ สำหรับคุณ</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
              เราให้คำปรึกษา ออกแบบ และวางแผนการติดตั้งรั้ว
              ให้เหมาะสมกับพื้นที่ งบประมาณ และความต้องการของคุณ
              โดยทีมงานมืออาชีพจาก MACTECH
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
              {benefits.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="border-r border-white/10 pr-4 last:border-r-0"
                  >
                    <Icon className="h-10 w-10 text-[#d4a63c]" />
                    <p className="mt-3 text-sm font-bold leading-6 text-white">
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="hidden lg:block" />
        </div>
      </section>

      <section className="container-main px-6 py-14 lg:px-14">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold lg:text-4xl">
            ขั้นตอนการให้คำปรึกษา
          </h2>
          <div className="mx-auto mt-3 h-px w-28 bg-[#d4a63c]" />
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {steps.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.no}
                className="relative border border-white/15 bg-[#0b0b0b] p-6 text-center"
              >
                <div className="mx-auto -mt-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#d4a63c] text-lg font-extrabold text-black">
                  {item.no}
                </div>

                <Icon className="mx-auto mt-5 h-12 w-12 text-[#d4a63c]" />

                <h3 className="mt-5 text-lg font-extrabold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/65">
                  {item.desc}
                </p>

                {index < steps.length - 1 && (
                  <div className="absolute -right-4 top-1/2 hidden text-[#d4a63c]/70 xl:block">
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="container-main grid gap-8 px-6 pb-14 lg:grid-cols-[.75fr_1.25fr] lg:px-14">
        <div>
          <h2 className="text-3xl font-extrabold">
            ทำไมต้องปรึกษากับ{" "}
            <span className="text-[#d4a63c]">MACTECH</span>
          </h2>

          <ul className="mt-6 space-y-3">
            {reasons.map((item) => (
              <li key={item} className="flex gap-3 text-white/80">
                <CheckCircleIcon className="mt-1 h-5 w-5 shrink-0 text-[#d4a63c]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="mt-8 inline-flex h-12 items-center justify-center border border-[#d4a63c] px-7 font-bold text-[#d4a63c] transition hover:bg-[#d4a63c] hover:text-black"
          >
            นัดหมายเข้ารับคำปรึกษา
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {works.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden border border-white/15 bg-[#0b0b0b]"
            >
              <div className="relative aspect-[4/3]">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>

              <div className="p-4 text-center flex md:pt-16 font-bold">
                {item.title}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-main px-6 pb-16 lg:px-14">
        <div className="relative overflow-hidden border border-white/15 bg-[#0b0b0b] p-8 sm:p-10">
          <Image
            src="/images/store_new_2.png"
            alt=""
            fill
            className="object-cover opacity-25"
          />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold leading-tight lg:text-4xl">
                ต้องการรั้วที่สวย แข็งแรง และใช้งานได้จริง
                <br />
                <span className="text-[#d4a63c]">ปรึกษาเราได้ฟรี!</span>
              </h2>

              <p className="mt-4 text-white/70">
                ทีมงานพร้อมดูแลและแนะนำสิ่งที่ดีที่สุดสำหรับคุณ
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col justify-center gap-2 border border-[#d4a63c]/60 bg-black/40 px-4 py-3">
                <a
                  href="tel:0652655539"
                  className="flex items-center gap-3 text-sm font-bold"
                >
                  <PhoneIcon className="h-5 w-5 shrink-0 text-[#d4a63c]" />
                  065-265-5539 (คุณต่อ)
                </a>

                <a
                  href="tel:0659925524"
                  className="flex items-center gap-3 text-sm font-bold"
                >
                  <PhoneIcon className="h-5 w-5 shrink-0 text-[#d4a63c]" />
                  065-992-5524 (ฝ่ายขาย)
                </a>
              </div>

              <a
                href="https://line.me/R/ti/p/@930qheef"
                target="_blank"
                rel="noreferrer"
                className="flex h-16 items-center justify-center gap-3 border border-[#d4a63c]/60 bg-black/40 text-lg font-bold"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d4a63c] text-xs font-black text-black">
                  LINE
                </span>
                @mtthailand
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}