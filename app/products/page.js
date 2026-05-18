"use client";

import Link from "next/link";
import { Listbox } from "@headlessui/react";
import {
  ChevronDownIcon,
  PhoneIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Image from "next/image";

import { products } from "../../mock/products";

const categories = [
  "สินค้าทั้งหมด",
  "แผงรั้วเหล็ก",
  "เสารั้ว",
  "อุปกรณ์ติดตั้ง",
  "ชุดประตูรั้ว",
];

const sortOptions = [
  "เรียงตาม: ล่าสุด",
  "ราคาต่ำ - สูง",
  "ราคาสูง - ต่ำ",
];

export default function ProductsPage() {
  const [selectedSort, setSelectedSort] =
    useState(sortOptions[0]);

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 px-6 pt-[76px] md:px-14 lg:pt-[86px]">
        <div className="absolute inset-0">
          <Image
            src="/images/store.png"
            alt="MACTECH products"
            className="h-full w-full object-cover"
            fill
            priority
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.94),rgba(0,0,0,.72),rgba(0,0,0,.18))]" />
        </div>

        <div className="container-main relative z-10 flex min-h-[320px] items-center py-14">
          <div className="max-w-xl">
            <h1 className="text-4xl font-extrabold sm:text-5xl">
              สินค้าของเรา
            </h1>

            <p className="mt-2 text-lg font-bold uppercase tracking-wide text-[#d4a63c]">
              Products
            </p>

            <p className="mt-6 max-w-md leading-8 text-white/75">
              จำหน่ายแผงรั้วเหล็ก เสารั้ว และอุปกรณ์ติดตั้งครบวงจร
              คุณภาพสูง แข็งแรง ทนทาน ได้มาตรฐาน
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container-main grid gap-8 px-6 py-10 md:px-14 lg:grid-cols-[280px_1fr] lg:py-14">
        {/* SIDEBAR */}
        <aside className="space-y-6">
          {/* CATEGORY */}
          <div className="border border-white/10 bg-[#0b0b0b]">
            <h2 className="border-b border-white/10 px-5 py-4 font-bold">
              หมวดหมู่สินค้า
            </h2>

            <div>
              {categories.map((item, index) => (
                <button
                  key={item}
                  className={`block w-full border-b border-white/10 px-5 py-4 text-left text-sm transition last:border-b-0 ${
                    index === 0
                      ? "bg-[#d4a63c] font-bold text-black"
                      : "text-white/75 hover:bg-white/5 hover:text-[#d4a63c]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* CONSULT CARD */}
          <div className="relative overflow-hidden border border-white/10 bg-[#0b0b0b] p-5">
            <Image
              src="/images/store2.png"
              alt="Store"
              className="absolute inset-0 h-full w-full object-cover opacity-25"
              fill
            />

            <div className="relative z-10">
              <h3 className="text-xl font-extrabold">
                ไม่แน่ใจว่าจะเลือกแบบไหนดี?
              </h3>

              <p className="mt-2 text-2xl font-extrabold text-[#d4a63c]">
                ให้เราช่วยแนะนำ
              </p>

              <p className="mt-4 text-sm leading-7 text-white/70">
                ทีมงานพร้อมให้คำปรึกษาฟรี ไม่มีค่าใช้จ่าย
              </p>

              <Link
                href="/contact"
                className="mt-6 flex h-12 items-center justify-center gap-2 border border-[#d4a63c] text-sm font-bold text-[#d4a63c] transition hover:bg-[#d4a63c] hover:text-black"
              >
                <PhoneIcon className="h-5 w-5" />
                ติดต่อเรา
              </Link>
            </div>
          </div>
        </aside>

        {/* PRODUCTS */}
        <div>
          {/* TOP BAR */}
          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-extrabold sm:text-3xl">
                สินค้าทั้งหมด
              </h2>

              <p className="mt-2 text-sm text-white/55">
                พบสินค้า {products.length} รายการ
              </p>
            </div>

            {/* SORT */}
            <Listbox
              value={selectedSort}
              onChange={setSelectedSort}
            >
              <div className="relative w-full sm:w-[220px]">
                <Listbox.Button className="flex h-12 w-full items-center justify-between border border-white/15 bg-[#0b0b0b] px-4 text-sm text-white">
                  {selectedSort}

                  <ChevronDownIcon className="h-4 w-4 text-white/60" />
                </Listbox.Button>

                <Listbox.Options className="absolute right-0 z-20 mt-2 w-full border border-[#d4a63c]/30 bg-[#0b0b0b] p-1 shadow-2xl">
                  {sortOptions.map((option) => (
                    <Listbox.Option
                      key={option}
                      value={option}
                      className="cursor-pointer px-4 py-3 text-sm text-white/75 hover:bg-[#d4a63c]/10 hover:text-[#d4a63c]"
                    >
                      {option}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>
          </div>

          {/* PRODUCT GRID */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {products.map((item) => (
              <Link
                key={item.id}
                href={`/products/${item.slug}`}
                className="group overflow-hidden border border-white/10 bg-[#0b0b0b] transition duration-300 hover:-translate-y-1 hover:border-[#d4a63c]/60"
              >
                <div className="aspect-[4/3] overflow-hidden bg-black">
                  <Image
                    src={item.coverImage}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    width={500}
                    height={500}
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-white transition group-hover:text-[#d4a63c]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-white/55">
                    {item.shortDescription}
                  </p>

                  <div className="hidden mt-4 flex items-end gap-2">
                    <span className="text-xl font-extrabold text-[#d4a63c]">
                      {item.startingPrice.toLocaleString()}
                    </span>

                    <span className="pb-[2px] text-sm text-white/55">
                      บาท/แผง
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="mt-8 flex justify-center gap-2">
            {[1].map((page) => (
              <button
                key={page}
                className={`h-11 w-11 border text-sm font-bold ${
                  page === 1
                    ? "border-[#d4a63c] text-[#d4a63c]"
                    : "border-white/10 text-white/60 hover:border-[#d4a63c] hover:text-[#d4a63c]"
                }`}
              >
                {page}
              </button>
            ))}

            <button className="flex h-11 w-11 items-center justify-center border border-white/10 text-white/60 hover:border-[#d4a63c] hover:text-[#d4a63c]">
              <ChevronRightIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}