"use client";

import Link from "next/link";
import {
  ShieldCheckIcon,
  PencilSquareIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import MLogo from "../public/images/m_logo.webp";
import Bg from "../public/images/mactech_store.png";

const features = [
  {
    title: "แข็งแรง ทนทาน",
    desc: "ผลิตจากเหล็กคุณภาพสูง",
    icon: ShieldCheckIcon,
    gold: false,
  },
  {
    title: "ดีไซน์สวยงาม",
    desc: "หลากหลายสไตล์",
    icon: PencilSquareIcon,
    gold: false,
  },
  {
    title: "ติดตั้งง่าย",
    desc: "พร้อมอุปกรณ์ครบชุด",
    icon: WrenchScrewdriverIcon,
    gold: false,
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black pt-[76px] lg:pt-[86px]">
      <div className="relative w-full h-[calc(100vh-76px)] lg:h-[calc(100vh-86px)]">
        {/* Background */}
        <Image
          src={Bg}
          alt="MACTECH"
          className="absolute inset-0 h-full w-full object-cover"
          fill
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.97)_0%,rgba(0,0,0,.94)_18%,rgba(0,0,0,.72)_38%,rgba(0,0,0,.18)_68%,rgba(0,0,0,.30)_100%)]" />

        {/* Content */}
        <div className="container-main px-6 md:px-14 relative z-10 flex h-full items-center">
          <div className="max-w-[560px]">

            {/* Title */}
            <div className="mb-5">
              <h2 className="text-[28px] font-extrabold leading-[1.4] tracking-[-0.02em] text-white sm:text-[38px] sm:leading-[1.3] lg:text-[54px] lg:leading-[1.25]">
                ผู้นำระบบรั้วอุตสาหกรรม{" "}
                <br className="lg:hidden" />
                รั้วสำเร็จรูป
              </h2>

              <h2 className="mt-2 text-[28px] font-extrabold leading-[1.4] tracking-[-0.02em] text-[#d4a63c] sm:text-[38px] sm:leading-[1.3] lg:text-[54px] lg:leading-[1.25]">
                คุณภาพสูง
              </h2>
            </div>

            {/* Description */}
            <p className="mb-10 max-w-[520px] text-[15px] leading-relaxed text-white/78 sm:text-[17px] lg:text-[20px]">
              ครบครัน ตอบโจทย์ทุกการใช้งาน สวย แข็งแรง ทนทานต่อการใช้งานในระยะยาว
            </p>

            {/* Features */}
            <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex items-center gap-3">
                    <div
                      className={`flex h-[54px] w-[54px] shrink-0 items-center justify-center border ${
                        item.gold
                          ? "border-[#d4a63c] text-[#d4a63c]"
                          : "border-white/35 text-white"
                      } bg-black/40`}
                    >
                      <Icon className="h-7 w-7" strokeWidth={2.2} />
                    </div>

                    <div>
                      <h3 className="text-[14px] font-bold leading-tight text-white lg:text-[15px]">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-[11px] leading-tight text-white/65 lg:text-[12px]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="#products"
                className="flex h-[54px] w-full items-center justify-center border border-[#d4a63c] bg-[#d4a63c] px-8 text-[15px] font-bold text-white transition hover:bg-[#bf912e] sm:w-[180px]"
              >
                ดูสินค้า
              </Link>

              <Link
                href="/contact"
                className="flex h-[54px] w-full items-center justify-center border border-white/40 bg-transparent px-8 text-[15px] font-bold text-white transition hover:border-[#d4a63c] hover:text-[#d4a63c] sm:w-[190px]"
              >
                ขอใบเสนอราคา
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}