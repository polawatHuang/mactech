"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import GalvanizedFence01 from "../public/products/แผงรั้วสำเร็จรูปกัลวาไนซ์/01.jpg";
import BlackPeFence01 from "../public/products/แผงรั้วสำเร็จรูปชุบ PE สีดำ/01.jpg";
import GreenPeFence01 from "../public/products/แผงรั้วสำเร็จรูปชุบ PE สีเขียว/01.jpg";
import StainlessMeshImg from "../public/products/ตาข่ายกรงไก่สแตนเลส.jpg";
import ColdGalvanizedMeshImg from "../public/products/ตาข่ายกรงไก่ชุบเย็น.jpg";
import HotGalvanizedMeshImg from "../public/products/ตาข่ายกรงไก่ชุบร้อน.jpg";
import PvcMeshImg from "../public/products/ตาข่ายกรงไก่ PVC.jpg";
import BarbedWireImg from "../public/products/ลวดหนาม.jpg";
import DiamondMeshWireImg from "../public/products/ตาข่ายถักข้าวหลามตัด.jpg";
import ExpandedMetalMeshImg from "../public/products/ตะแกรงเหล็กฉีก.jpg";
import WormPatternGratingImg from "../public/products/ตะแกรงเหล็กตัวหนอน.jpg";
import ArcMeshPanelImg from "../public/products/แผงตะแกรงอาร์ค.jpg";
import KnottedMeshWireImg from "../public/products/ลวดตาข่ายถักปม.jpg";
import FenceWireMeshImg from "../public/products/ลวดตาข่ายรั้ว.jpg";
import Image from "next/image";

const products = [
  {
    title: "แผงรั้วกัลวาไนซ์",
    image: GalvanizedFence01,
    href: "/products/galvanized-fence",
  },
  {
    title: "แผงรั้ว เคลือบสีดำ",
    image: BlackPeFence01,
    href: "/products/black-pe-fence",
  },
  {
    title: "แผงรั้ว เคลือบสีเขียว",
    image: GreenPeFence01,
    href: "/products/green-pe-fence",
  },
  {
    title: "ตาข่ายกรงไก่แสตนเลส",
    image: StainlessMeshImg,
    href: "/products/stainless-chicken-wire-mesh",
  },
  {
    title: "ตาข่ายกรงไก่ชุบเย็น",
    image: ColdGalvanizedMeshImg,
    href: "/products/galvanized-chicken-wire-mesh",
  },
  {
    title: "ตาข่ายกรงไก่ชุบร้อน",
    image: HotGalvanizedMeshImg,
    href: "/products/hot-dip-galvanized-chicken-wire-mesh",
  },
  {
    title: "ตาข่ายกรงไก่ PVC",
    image: PvcMeshImg,
    href: "/products/pvc-chicken-wire-mesh",
  },
  {
    title: "ลวดหนาม",
    image: BarbedWireImg,
    href: "/products/barbed-wire",
  },
  {
    title: "ลวดถักตาข่ายข้าวหลามตัด",
    image: DiamondMeshWireImg,
    href: "/products/diamond-mesh-wire",
  },
  {
    title: "ลวดถักตาข่ายถักปม",
    image: KnottedMeshWireImg,
    href: "/products/knotted-mesh-wire",
  },
  {
    title: "ลวดตาข่ายรั้ว",
    image: FenceWireMeshImg,
    href: "/products/fence-wire-mesh",
  },
  {
    title: "ตะแกรงเหล็กฉีก",
    image: ExpandedMetalMeshImg,
    href: "/products/expanded-metal-mesh",
  },
  {
    title: "ตะแกรงเหล็กตัวหนอน",
    image: WormPatternGratingImg,
    href: "/products/worm-pattern-steel-grating",
  },
  {
    title: "แผงตะแกรงอาร์ค",
    image: ArcMeshPanelImg,
    href: "/products/arc-mesh-panel",
  },
//   {
//     title: "แผงรั้ว แบบประหยัด",
//     image: "/images/product-economy.jpg",
//     href: "/products/economy",
//   },
//   {
//     title: "เสา / อุปกรณ์",
//     image: "/images/product-parts.jpg",
//     href: "/products/accessories",
//   },
//   {
//     title: "ชุดประตูรั้ว",
//     image: "/images/product-gate.jpg",
//     href: "/products/gate",
//   },
];

const AUTOPLAY_MS = 3000;

function slideTrack(track, direction) {
  const card = track.firstElementChild;
  if (!card) return;

  const gap = parseFloat(getComputedStyle(track).columnGap || "0");
  const step = card.getBoundingClientRect().width + gap;

  if (direction > 0 && track.scrollLeft + track.clientWidth >= track.scrollWidth - 4) {
    track.scrollTo({ left: 0, behavior: "smooth" });
    return;
  }

  if (direction < 0 && track.scrollLeft <= 4) {
    track.scrollTo({
      left: track.scrollWidth - track.clientWidth,
      behavior: "smooth",
    });
    return;
  }

  track.scrollBy({ left: direction * step, behavior: "smooth" });
}

export default function ProductsSection() {
  const trackRef = useRef(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const timer = setInterval(() => {
      if (pausedRef.current) return;
      slideTrack(track, 1);
    }, AUTOPLAY_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="products" className="bg-[#070707] px-6 md:px-14 py-8 sm:py-10 lg:py-12">
      <div className="container-main">
        <div className="mb-7 border-b border-[#d4a63c]/30 pb-3">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            สินค้าของเรา
          </h2>
          <p className="mt-1 text-sm text-white/55">
            จำหน่ายแผงรั้วเหล็ก เสารั้ว และอุปกรณ์ติดตั้งครบวงจร
          </p>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => slideTrack(trackRef.current, -1)}
            aria-label="สินค้าก่อนหน้า"
            className="absolute -left-3 top-[calc(50%-1.25rem)] z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-white/20 bg-black/70 text-white transition hover:border-[#d4a63c] hover:text-[#d4a63c] sm:-left-4"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={() => slideTrack(trackRef.current, 1)}
            aria-label="สินค้าถัดไป"
            className="absolute -right-3 top-[calc(50%-1.25rem)] z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-white/20 bg-black/70 text-white transition hover:border-[#d4a63c] hover:text-[#d4a63c] sm:-right-4"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>

          <div
            ref={trackRef}
            onMouseEnter={() => (pausedRef.current = true)}
            onMouseLeave={() => (pausedRef.current = false)}
            className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {products.map((item) => (
            <article
              key={item.title}
              className="group w-[calc((100%-0.75rem)/2)] shrink-0 snap-start border border-white/10 bg-[#0b0b0b] p-2 transition duration-300 hover:-translate-y-1 hover:border-[#d4a63c]/60 hover:shadow-[0_18px_50px_rgba(0,0,0,.55)] md:w-[calc((100%-1.5rem)/3)] xl:w-[calc((100%-3.75rem)/6)]"
            >
              <Link href={item.href}>
                <div className="relative aspect-[4/5] overflow-hidden bg-black">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    fill
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent opacity-80" />
                </div>

                <div className="px-2 pb-3 pt-4 text-center">
                  <h3 className="line-clamp-1 text-sm font-bold text-white sm:text-base">
                    {item.title}
                  </h3>

                  <span className="mx-auto mt-4 flex h-9 w-[88px] items-center justify-center border border-[#d4a63c]/70 text-xs font-bold text-[#d4a63c] transition group-hover:bg-[#d4a63c] group-hover:text-black">
                    ดูสินค้า
                  </span>
                </div>
              </Link>
            </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}