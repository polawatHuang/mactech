"use client";

import Link from "next/link";
import { Fragment, useState } from "react";
import { Popover, Transition, Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import LogoImg from "@/public/images/logo.webp";

const productCategories = [
  {
    category: "สินค้าแผงรั้ว",
    items: [
      {
        name: "แผงรั้วสำเร็จรูปกัลวาไนซ์",
        href: "/products/galvanized-fence",
        desc: "แข็งแรง ทนสนิม สำหรับงานมาตรฐาน",
      },
      {
        name: "แผงรั้วสำเร็จรูปกัลวาไนซ์ชุบ PE ดำ",
        href: "/products/black-pe-fence",
        desc: "โทนดำพรีเมียม เหมาะกับบ้านและโครงการ",
      },
      {
        name: "แผงรั้วสำเร็จรูปกัลวาไนซ์ชุบ PE เขียว",
        href: "/products/green-pe-fence",
        desc: "สีเขียวกลมกลืน เหมาะกับสวนและพื้นที่ภายนอก",
      },
    ],
  },
  {
    category: "สินค้าตาข่าย",
    items: [
      {
        name: "ตาข่ายกรงไก่แสตนเลส",
        href: "/products/stainless-chicken-wire-mesh",
        desc: "ทนสนิม ทนความชื้น ใช้งานได้ยาวนาน",
      },
      {
        name: "ตาข่ายกรงไก่ชุบเย็น",
        href: "/products/galvanized-chicken-wire-mesh",
        desc: "ผิวเรียบ ป้องกันสนิม ราคาคุ้มค่า",
      },
      {
        name: "ตาข่ายกรงไก่ชุบร้อน",
        href: "/products/hot-dip-galvanized-chicken-wire-mesh",
        desc: "เคลือบสังกะสีหนา ทนสนิมสูงสุด",
      },
      {
        name: "ตาข่ายกรงไก่ PVC",
        href: "/products/pvc-chicken-wire-mesh",
        desc: "เคลือบ PVC ทนทาน สวยงาม",
      },
    ],
  },
  {
    category: "สินค้าลวดหนาม",
    items: [
      {
        name: "ลวดหนาม",
        href: "/products/barbed-wire",
        desc: "แข็งแรง ป้องกันสนิม เหมาะกับรั้วกันขโมย",
      },
    ],
  },
];

const menus = [
  { name: "หน้าแรก", href: "/" },
  { name: "เกี่ยวกับเรา", href: "/about" },
  { name: "บริการให้คำปรึกษา", href: "/consulting" },
  { name: "ติดต่อเรา", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);

  return (
    <header className="fixed font-sans left-0 top-0 z-50 w-full border-b border-white/10 bg-[#050505]/95 backdrop-blur-xl">
      <div className="container-main px-6 flex h-[64px] items-center justify-between lg:h-[74px] max-w-[1280px] mx-auto">
        <Link href="/" className="shrink-0">
          <Image
            src={LogoImg}
            alt="MACTECH"
            width={190}
            height={40}
            className="w-[150px] sm:w-[170px] lg:w-[190px]"
            loading="lazy"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex xl:gap-10">
          <Link href="/" className="text-sm font-semibold text-[#d4a63c]">
            หน้าแรก
          </Link>

          <Link
            href={menus[1].href}
            className="text-sm font-semibold text-white transition hover:text-[#d4a63c]"
          >
            {menus[1].name}
          </Link>

          <Popover className="relative">
            {({ open, close }) => (
              <>
                <Popover.Button
                  className={`flex items-center gap-1.5 text-sm font-semibold outline-none transition ${
                    open ? "text-[#d4a63c]" : "text-white hover:text-[#d4a63c]"
                  }`}
                >
                  สินค้าและผลิตภัณฑ์
                  <ChevronDownIcon
                    className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`}
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-2 scale-95"
                  enterTo="opacity-100 translate-y-0 scale-100"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0 scale-100"
                  leaveTo="opacity-0 translate-y-2 scale-95"
                >
                  <Popover.Panel className="absolute left-1/2 top-9 max-h-[75vh] w-[420px] -translate-x-1/2 overflow-y-auto border border-[#d4a63c]/30 bg-[#080808] p-3 shadow-[0_24px_80px_rgba(0,0,0,.65)]">
                    <div className="mb-2 border-b border-white/10 px-3 pb-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4a63c]">
                        Products
                      </p>
                      <h3 className="mt-1 text-lg font-bold text-white">
                        สินค้า MACTECH
                      </h3>
                    </div>

                    <div className="space-y-3">
                      {productCategories.map((group) => (
                        <div
                          key={group.category}
                          className="border-t border-white/10 pt-3 first:border-t-0 first:pt-0"
                        >
                          <p className="px-3 pb-1 text-xs font-bold uppercase tracking-wide text-[#d4a63c]">
                            {group.category}
                          </p>

                          <div className="space-y-1">
                            {group.items.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => close()}
                                className="group block border border-transparent px-3 py-3 transition hover:border-[#d4a63c]/25 hover:bg-[#d4a63c]/10"
                              >
                                <div className="flex items-start justify-between gap-4">
                                  <div>
                                    <p className="text-sm font-bold text-white transition group-hover:text-[#d4a63c]">
                                      {item.name}
                                    </p>
                                    <p className="mt-1 text-xs leading-relaxed text-white/55">
                                      {item.desc}
                                    </p>
                                  </div>

                                  <span className="mt-1 h-2 w-2 shrink-0 bg-[#d4a63c]" />
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          {menus.slice(2).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-white transition hover:text-[#d4a63c]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden h-10 items-center justify-center border border-[#d4a63c] bg-[#d4a63c] px-5 text-sm font-bold text-white transition hover:bg-[#bd8f2e] md:flex"
          >
            ขอใบเสนอราคา
          </Link>

          <a
            href="tel:0652655539"
            className="hidden h-10 w-10 items-center justify-center border border-[#d4a63c] text-[#d4a63c] transition hover:bg-[#d4a63c] hover:text-black sm:flex"
          >
            <PhoneIcon className="h-5 w-5" />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="flex h-10 w-10 items-center justify-center border border-[#d4a63c] text-[#d4a63c] lg:hidden"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </div>

      <Dialog
        open={mobileOpen}
        onClose={setMobileOpen}
        className="relative z-[60] lg:hidden"
      >
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />

        <Dialog.Panel className="fixed right-0 top-0 h-full w-[86%] max-w-sm overflow-y-auto border-l border-[#d4a63c]/25 bg-[#050505] p-5 shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <img src="/images/logo.png" alt="MACTECH" className="w-[165px]" />

            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="flex h-10 w-10 items-center justify-center border border-white/15 text-white"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-5 space-y-1">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="flex h-12 items-center border-b border-white/10 font-semibold text-[#d4a63c]"
            >
              หน้าแรก
            </Link>

            <Link
              href={menus[1].href}
              onClick={() => setMobileOpen(false)}
              className="flex h-12 items-center border-b border-white/10 font-semibold text-white"
            >
              {menus[1].name}
            </Link>

            <button
              type="button"
              onClick={() => setMobileProductOpen((prev) => !prev)}
              className="flex h-12 w-full items-center justify-between border-b border-white/10 font-semibold text-white"
            >
              สินค้าและผลิตภัณฑ์
              <ChevronDownIcon
                className={`h-5 w-5 transition ${
                  mobileProductOpen ? "rotate-180 text-[#d4a63c]" : ""
                }`}
              />
            </button>

            {mobileProductOpen && (
              <div className="space-y-4 border-b border-white/10 py-3">
                {productCategories.map((group) => (
                  <div key={group.category} className="space-y-2">
                    <p className="px-1 text-xs font-bold uppercase tracking-wide text-[#d4a63c]">
                      {group.category}
                    </p>

                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block border-l-4 border-[#d4a63c] bg-white/[0.04] px-4 py-3"
                      >
                        <p className="text-sm font-bold text-white">
                          {item.name}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-white/55">
                          {item.desc}
                        </p>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {menus.slice(2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex h-12 items-center border-b border-white/10 font-semibold text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-[1fr_48px] gap-3">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex h-12 items-center justify-center bg-[#d4a63c] font-bold text-white"
            >
              ขอใบเสนอราคา
            </Link>

            <a
              href="tel:0652655539"
              className="flex h-12 items-center justify-center border border-[#d4a63c] text-[#d4a63c]"
            >
              <PhoneIcon className="h-5 w-5" />
            </a>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
