import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import WhyUsImg from "../public/images/store2.png";
import Image from "next/image";

const reasons = [
  "วัสดุคุณภาพสูง ได้มาตรฐาน",
  "เคลือบกันสนิม ทนทุกสภาพอากาศ",
  "ดีไซน์สวย ตอบโจทย์ทุกการใช้งาน",
  "มีสินค้าให้เลือกหลากหลาย",
  "บริการให้คำปรึกษาและออกแบบ",
];

export default function WhyMactechSection() {
  return (
    <section className="bg-[#070707] py-8 sm:py-10 lg:py-12">
      <div className="container-main">
        <div className="relative overflow-hidden border border-white/15 bg-black">
          <Image
            src={WhyUsImg}
            alt="MACTECH showroom"
            className="absolute inset-0 h-full w-full object-cover"
            fill
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.88)_0%,rgba(0,0,0,.68)_30%,rgba(0,0,0,.12)_62%,rgba(0,0,0,.22)_100%)]" />

          <div className="relative z-10 min-h-[300px] px-6 py-8 sm:px-10 lg:min-h-[360px] lg:px-12 lg:py-12">
            <div className="max-w-[360px] md:px-3">
              <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                ทำไมต้องเลือก
                <br />
                <span className="text-[#d4a63c]">MACTECH</span>
              </h2>

              <ul className="mt-6 space-y-2.5">
                {reasons.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-white/85"
                  >
                    <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#d4a63c]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/about"
                className="mt-7 inline-flex h-11 items-center justify-center bg-[#d4a63c] px-6 text-sm font-bold text-white transition hover:bg-[#bf912e]"
              >
                อ่านเพิ่มเติมเกี่ยวกับเรา
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}