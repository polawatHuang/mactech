import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ShieldCheckIcon,
  Cog6ToothIcon,
  CheckCircleIcon,
  UserGroupIcon,
  BuildingOffice2Icon,
  FlagIcon,
  HeartIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "เกี่ยวกับเรา | MACTECH",
  description:
    "รู้จัก MACTECH ผู้ผลิตและจำหน่ายแผงรั้วเหล็ก ตาข่ายกรงไก่ และลวดหนาม ก่อตั้งปี 2557 ประสบการณ์กว่า 10 ปีในอุตสาหกรรมเหล็ก พร้อมทีมงานมืออาชีพและบริการครบวงจร",
  alternates: {
    canonical: "/about",
  },
};

const values = [
  {
    title: "คุณภาพมาตรฐาน",
    desc: "ผลิตจากเหล็กคุณภาพสูง ได้มาตรฐาน แข็งแรง ทนทาน ใช้งานได้นาน",
    icon: ShieldCheckIcon,
  },
  {
    title: "เทคโนโลยีการผลิต",
    desc: "กระบวนการผลิตทันสมัย ควบคุมคุณภาพทุกขั้นตอน",
    icon: Cog6ToothIcon,
  },
  {
    title: "บริการครบวงจร",
    desc: "ให้คำปรึกษา ออกแบบ จัดส่ง และบริการหลังการขายโดยทีมงานมืออาชีพ",
    icon: CheckCircleIcon,
  },
  {
    title: "ทีมงานมืออาชีพ",
    desc: "ทีมงานมากประสบการณ์ พร้อมดูแลและให้คำแนะนำในทุกขั้นตอน",
    icon: UserGroupIcon,
  },
];

const timeline = [
  {
    year: "2014",
    title: "เริ่มต้นธุรกิจ",
    desc: "เริ่มต้นจากธุรกิจจัดจำหน่ายวัสดุก่อสร้างและงานเหล็กคุณภาพ",
    icon: BuildingOffice2Icon,
  },
  {
    year: "2017",
    title: "พัฒนาระบบการผลิต",
    desc: "ลงทุนเครื่องจักรที่ทันสมัย เพื่อเพิ่มศักยภาพการผลิตและควบคุมคุณภาพ",
    icon: Cog6ToothIcon,
  },
  {
    year: "2020",
    title: "ขยายทีมงานและบริการ",
    desc: "ขยายทีมงานมืออาชีพและบริการให้ครอบคลุมมากยิ่งขึ้น",
    icon: UserGroupIcon,
  },
  {
    year: new Date().getFullYear().toString(),
    title: "เติบโตอย่างต่อเนื่อง",
    desc: "ได้รับความไว้วางใจจากลูกค้าทั้งภาครัฐ เอกชน และโครงการขนาดใหญ่ทั่วประเทศ",
    icon: FlagIcon,
  },
];

const reasons = [
  {
    title: "วัสดุคุณภาพสูง",
    desc: "เหล็กมาตรฐาน แข็งแรง ทนต่อการกัดกร่อน",
    image: "/images/wall-white.png",
    icon: ShieldCheckIcon,
  },
  {
    title: "ติดตั้งง่าย รวดเร็ว",
    desc: "ออกแบบมาให้ติดตั้งง่าย ประหยัดเวลาและค่าใช้จ่าย",
    image: "/images/wall-engineer.jpg",
    icon: WrenchIcon,
  },
  {
    title: "เคลือบกันสนิม",
    desc: "ชุบหรือเคลือบสีเพื่อเพิ่มความทนทานต่อสภาพแวดล้อม",
    image: "/images/wall-color.png",
    icon: Cog6ToothIcon,
  },
  {
    title: "จัดส่งรวดเร็ว",
    desc: "พร้อมจัดส่งทั่วประเทศ รองรับงานโครงการ",
    image: "/images/fast-delivery.png",
    icon: TruckIcon,
  },
  {
    title: "ดีไซน์สวยงาม",
    desc: "หลากหลายรูปแบบ รองรับทุกความต้องการ",
    image: "/images/beautiful.jpg",
    icon: HeartIcon,
  },
];

// fallback icon because Heroicons has no WrenchIcon in this import block
function WrenchIcon(props) {
  return <Cog6ToothIcon {...props} />;
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 pt-[76px] lg:pt-[86px]">
        <Image
          src="/images/store_new_1.png"
          alt="MACTECH showroom"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.96)_0%,rgba(0,0,0,.82)_42%,rgba(0,0,0,.25)_100%)]" />

        <div className="container-main relative z-10 flex min-h-[520px] items-center px-6 py-16 lg:px-14">
          <div className="max-w-xl">
            <h1 className="text-5xl font-extrabold leading-tight lg:text-7xl">
              เกี่ยวกับเรา
              <br />
              <span className="text-[#d4a63c]">MACTECH</span>
            </h1>

            <div className="mt-5 h-px w-72 bg-[#d4a63c]/70" />

            <p className="mt-8 text-lg leading-8 text-white/80">
              ผู้เชี่ยวชาญด้านระบบรั้วเหล็กคุณภาพสูง เรามุ่งมั่นพัฒนาผลิตภัณฑ์
              สินค้าและบริการสู่มาตรฐานสากล ตอบโจทย์ทุกความต้องการ เพื่อความปลอดภัย ความแข็งแรง และความพึงพอใจสูงสุดของลูกค้า
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT INTRO */}
      <section className="container-main grid gap-10 px-6 py-14 lg:grid-cols-[.95fr_1.05fr] lg:px-14">
        <div className="relative min-h-[280px] overflow-hidden border border-white/15 bg-[#0b0b0b] sm:min-h-[360px]">
          <Image
            src="/images/store_new_2.png"
            alt="MACTECH showroom interior"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d4a63c]">
            About Us
          </p>

          <h2 className="mt-3 text-3xl font-extrabold lg:text-4xl">
            เกี่ยวกับ MACTECH
          </h2>

          <div className="mt-4 h-px w-20 bg-[#d4a63c]" />

          <p className="mt-6 leading-8 text-white/75">
            แมคเทค สตีล เฟนซ์ ซิสเต็ม โรงงานผู้ผลิตและจัดจำหน่าย
            แผงรั้ว เสารั้ว และอุปกรณ์ติดตั้งระบบรั้วเหล็กคุณภาพสูง
            ด้วยประสบการณ์ในอุตสาหกรรมเหล็กมากกว่า 10 ปี
            เราให้ความสำคัญกับคุณภาพของสินค้า มาตรฐานการผลิต
            และบริการที่เป็นเลิศ เพื่อให้ลูกค้าได้รับสินค้าที่ดีที่สุดในทุกโครงการ
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="container-main px-6 pb-14 lg:px-14">
        <div className="grid border border-white/15 bg-[#0b0b0b] sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="border-b border-white/10 p-7 text-center last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0"
              >
                <Icon className="mx-auto h-12 w-12 text-[#d4a63c]" />

                <h3 className="mt-5 text-lg font-extrabold">{item.title}</h3>

                <p className="mt-3 text-sm leading-7 text-white/65">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* JOURNEY */}
      <section className="container-main grid gap-10 px-6 pb-14 lg:grid-cols-[.28fr_.72fr] lg:px-14">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d4a63c]">
            Our Journey
          </p>

          <h2 className="mt-3 text-3xl font-extrabold lg:text-4xl">
            เส้นทางของเรา
          </h2>

          <div className="mt-4 h-px w-20 bg-[#d4a63c]" />

          <p className="mt-6 leading-8 text-white/70">
            ตลอดระยะเวลาที่ผ่านมา เราไม่หยุดพัฒนา
            เพื่อก้าวสู่การเป็นผู้นำด้านระบบรั้วเหล็กที่ลูกค้าไว้วางใจ
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {timeline.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.year} className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-[#0b0b0b] text-[#d4a63c]">
                  <Icon className="h-8 w-8" />
                </div>

                <div className="mx-auto mt-4 h-3 w-3 rounded-full bg-[#d4a63c]" />

                <div className="mx-auto mt-3 h-px w-full bg-[#d4a63c]/40" />

                <p className="mt-4 text-sm font-bold text-[#d4a63c]">
                  {item.year}
                </p>

                <h3 className="mt-2 font-extrabold">{item.title}</h3>

                <p className="mt-3 text-sm leading-7 text-white/65">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* WHY */}
      <section className="container-main px-6 pb-14 lg:px-14">
        <div className="border border-white/15 bg-[#0b0b0b] p-6 sm:p-8">
          <h2 className="text-3xl font-extrabold">
            ทำไมต้องเลือก <span className="text-[#d4a63c]">MACTECH</span>
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {reasons.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="overflow-hidden border border-white/10 bg-black"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-4">
                    <Icon className="h-8 w-8 text-[#d4a63c]" />

                    <h3 className="mt-3 font-extrabold">{item.title}</h3>

                    <p className="mt-2 text-sm leading-6 text-white/65">
                      {item.desc}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-main px-6 pb-16 lg:px-14">
        <div className="relative overflow-hidden border border-[#d4a63c]/35 bg-[#0b0b0b] p-8 sm:p-10">
          <Image
            src="/images/store_new_2.png"
            alt=""
            fill
            className="object-cover opacity-25"
          />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_.85fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold leading-tight lg:text-4xl">
                เราพร้อมดูแลทุกโครงการ
                <span className="text-[#d4a63c]">ของคุณ</span>
              </h2>

              <p className="mt-4 leading-8 text-white/70">
                ให้คำปรึกษาฟรี โดยทีมงานผู้เชี่ยวชาญ
                มั่นใจในคุณภาพสินค้าและบริการจาก MACTECH
              </p>

              <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="flex h-12 items-center justify-center bg-[#d4a63c] px-7 font-bold text-white transition hover:bg-[#bd8f2e]"
                >
                  ขอใบเสนอราคา
                </Link>

                <Link
                  href="/contact"
                  className="flex h-12 items-center justify-center border border-white/25 px-7 font-bold text-white transition hover:border-[#d4a63c] hover:text-[#d4a63c]"
                >
                  ติดต่อเรา
                </Link>
              </div>
            </div>

            <div className="relative min-h-[220px] overflow-hidden border border-white/10">
              <Image
                src="/images/call-center.webp"
                alt="MACTECH"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}