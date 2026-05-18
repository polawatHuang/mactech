import Link from "next/link";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import FenceGroupImg from "../public/images/fence-group.webp";

export default function QuoteCTASection() {
  return (
    <section className="bg-[#070707] py-8 sm:py-10 lg:py-12">
      <div className="container-main">
        <div className="relative overflow-hidden border border-white/10 bg-[#0b0b0b]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,166,60,.12),transparent_32%),linear-gradient(90deg,rgba(0,0,0,.18),rgba(0,0,0,.75))]" />

          <div className="relative z-10 grid items-center gap-8 px-6 py-8 sm:px-10 lg:grid-cols-[1.05fr_.95fr] lg:px-14 lg:py-10">
            <div className="flex justify-center lg:justify-start">
              <Image
                src={FenceGroupImg}
                alt="MACTECH fence products"
                className="w-full max-w-[520px] object-contain"
                width={520}
                height={300}
              />
            </div>

            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[42px]">
                <span className="text-[#d4a63c]">
                  สนใจสินค้า หรือขอใบเสนอราคา
                </span>
                <br />
                ติดต่อเราได้เลย!
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
                ทีมงานพร้อมให้บริการและคำแนะนำ
                <br className="hidden sm:block" />
                ฟรี! ไม่มีค่าใช้จ่าย
              </p>

              <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                <Link
                  href="/contact"
                  className="flex h-12 items-center justify-center bg-[#d4a63c] px-10 text-sm font-bold text-white transition hover:bg-[#bd8f2e]"
                >
                  ขอใบเสนอราคา
                </Link>

                <a
                  href="https://line.me/ti/p/~mack.656"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 items-center justify-center gap-2 border border-white/45 px-8 text-sm font-bold text-white transition hover:border-[#d4a63c] hover:text-[#d4a63c]"
                >
                  <ChatBubbleLeftRightIcon className="h-5 w-5" />
                  แชทผ่าน LINE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}