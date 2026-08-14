"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ChatBubbleLeftRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import View4 from "../public/images/views/01.jpg";
import View3 from "../public/images/views/02.jpg";
import View2 from "../public/images/views/03.jpg";
import View1 from "../public/images/views/04.jpg";

const views = [View1, View2, View3, View4];
const AUTOPLAY_MS = 4000;

export default function QuoteCTASection() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % views.length);
    }, AUTOPLAY_MS);

    return () => clearInterval(timerRef.current);
  }, []);

  const goTo = (nextIndex) => {
    clearInterval(timerRef.current);
    setIndex((nextIndex + views.length) % views.length);
  };

  return (
    <section className="bg-[#070707] py-8 sm:py-10 lg:py-12">
      <div className="container-main">
        <div className="relative overflow-hidden border border-white/10 bg-[#0b0b0b]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,166,60,.12),transparent_32%),linear-gradient(90deg,rgba(0,0,0,.18),rgba(0,0,0,.75))]" />

          <div className="relative z-10 grid items-center gap-8 px-6 py-8 sm:px-10 lg:grid-cols-[1.05fr_.95fr] lg:px-14 lg:py-10">
            <div className="flex justify-center lg:justify-start">
              <div className="relative aspect-[4/3] w-full max-w-[520px] overflow-hidden border border-white/10 bg-black">
                {views.map((img, i) => (
                  <Image
                    key={i}
                    src={img}
                    alt="MACTECH fence products"
                    fill
                    priority={i === 0}
                    className={`object-cover transition-opacity duration-700 ${
                      i === index ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}

                <button
                  type="button"
                  onClick={() => goTo(index - 1)}
                  aria-label="รูปก่อนหน้า"
                  className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-white/20 bg-black/50 text-white transition hover:border-[#d4a63c] hover:text-[#d4a63c]"
                >
                  <ChevronLeftIcon className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  onClick={() => goTo(index + 1)}
                  aria-label="รูปถัดไป"
                  className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-white/20 bg-black/50 text-white transition hover:border-[#d4a63c] hover:text-[#d4a63c]"
                >
                  <ChevronRightIcon className="h-5 w-5" />
                </button>

                <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
                  {views.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => goTo(i)}
                      aria-label={`ไปที่รูปที่ ${i + 1}`}
                      className={`h-2 w-2 transition ${
                        i === index ? "bg-[#d4a63c]" : "bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </div>
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
                  href="https://line.me/R/ti/p/@930qheef"
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