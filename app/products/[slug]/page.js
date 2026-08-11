"use client";

import { use, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  HeartIcon,
  MagnifyingGlassIcon,
  MinusIcon,
  PlusIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ShieldCheckIcon,
  TruckIcon,
  Cog6ToothIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import {
  products,
  relatedProducts,
} from "../../../mock/products";

export default function ProductDetailPage({ params }) {
  const resolvedParams = use(params);

  const product = products.find(
    (item) => item.slug === resolvedParams.slug
  );

  const isMeshOrWireProduct =
    product?.category === "ตาข่ายกรงไก่" ||
    product?.category === "ลวดหนาม";

  const [activeImage, setActiveImage] = useState(
    product?.gallery?.[0]
  );

  const [selectedHeight, setSelectedHeight] = useState(
    product?.sizes?.[0]?.height
  );

  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <main className="min-h-screen bg-[#050505] text-white">
        <Header />

        <div className="container-main flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
          <h1 className="text-4xl font-extrabold">
            ไม่พบสินค้า
          </h1>

          <p className="mt-4 text-white/60">
            ขออภัย ไม่พบสินค้าที่คุณกำลังค้นหา
          </p>

          <Link
            href="/products"
            className="mt-8 flex h-12 items-center justify-center bg-[#d4a63c] px-8 font-bold text-white"
          >
            กลับหน้าสินค้า
          </Link>
        </div>

        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />

      <section className="container-main px-6 pb-10 pt-[90px] lg:px-14 lg:pt-[110px]">
        <div className="mb-6 text-sm text-white/45">
          <Link href="/" className="hover:text-[#d4a63c]">
            หน้าแรก
          </Link>

          <span className="mx-2">›</span>

          <Link
            href="/products"
            className="hover:text-[#d4a63c]"
          >
            สินค้า
          </Link>

          <span className="mx-2">›</span>

          <span className="text-[#d4a63c]">
            {product.title}
          </span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr]">
          {/* LEFT */}
          <div>
            <div className="relative overflow-hidden border border-white/10 bg-white">
              <Image
                src={activeImage}
                alt={product.title}
                className="h-[320px] w-full object-contain sm:h-[500px] lg:h-[620px]"
                width={1200}
                height={1200}
                priority
              />

              <button className="hidden bottom-5 right-5 flex h-12 w-12 items-center justify-center bg-black/60 text-white backdrop-blur-sm transition hover:bg-[#d4a63c]">
                <MagnifyingGlassIcon className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <button className="hidden h-20 w-10 items-center justify-center border border-white/10 bg-[#0b0b0b] text-white/60 transition hover:border-[#d4a63c] hover:text-[#d4a63c] sm:flex">
                <ChevronLeftIcon className="h-5 w-5" />
              </button>

              <div className="grid flex-1 grid-cols-4 gap-2 sm:grid-cols-5">
                {product.gallery.map((img) => (
                  <button
                    key={img.src}
                    onClick={() => setActiveImage(img)}
                    className={`overflow-hidden border bg-white ${
                      activeImage === img
                        ? "border-[#d4a63c]"
                        : "border-white/10"
                    }`}
                  >
                    <Image
                      src={img}
                      alt=""
                      className="h-20 w-full object-cover"
                      width={180}
                      height={120}
                    />
                  </button>
                ))}
              </div>

              <button className="hidden h-20 w-10 items-center justify-center border border-white/10 bg-[#0b0b0b] text-white/60 transition hover:border-[#d4a63c] hover:text-[#d4a63c] sm:flex">
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center border border-[#d4a63c]/60 px-3 py-1 text-xs font-bold text-[#d4a63c]">
              {product.badge}
            </div>

            <h1 className="text-4xl font-extrabold leading-tight lg:text-5xl">
              {product.title}
            </h1>

            <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-white/75">
              {product.subtitle}
            </p>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/70">
              {product.description}
            </p>

            {/* HEIGHT */}
            <div className="mt-8">
              <p className="mb-3 font-bold text-white">
                ความสูง
              </p>

              {isMeshOrWireProduct ? (
                <div className="inline-flex h-12 items-center border border-[#d4a63c]/60 px-5 text-sm font-bold text-white">
                  -
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-3">
                  {product.sizes.map((item) => (
                    <button
                      key={item.height}
                      onClick={() =>
                        setSelectedHeight(item.height)
                      }
                      className={`h-12 border text-sm font-bold transition ${
                        selectedHeight === item.height
                          ? "border-[#d4a63c] text-[#d4a63c]"
                          : "border-white/20 text-white/75 hover:border-[#d4a63c]"
                      }`}
                    >
                      {item.height}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* WIDTH */}
            <div className="mt-7">
              <p className="mb-3 font-bold text-white">
                ความยาว
              </p>

              <div className="inline-flex h-12 items-center border border-[#d4a63c]/60 px-5 text-sm font-bold text-white">
                {isMeshOrWireProduct ? "-" : "2.40 เมตร/แผง"}
              </div>
            </div>

            {/* PRICE */}
            <div className="hidden mt-8">
              <p className="text-sm text-white/60">
                ราคาเริ่มต้น
              </p>

              <div className="mt-2 flex items-end gap-2">
                <span className="text-5xl font-extrabold text-[#d4a63c]">
                  {product.startingPrice.toLocaleString()}
                </span>

                <span className="pb-2 text-lg font-bold">
                  บาท/แผง
                </span>
              </div>

              <p className="mt-2 text-sm text-white/45">
                *ราคานี้ยังไม่รวมเสารั้วและอุปกรณ์ติดตั้ง
              </p>
            </div>

            {/* ACTION */}
            <div className="mt-8 grid gap-4 sm:grid-cols-[180px_1fr]">
              <div className="grid h-12 grid-cols-3 border border-white/20">
                <button
                  onClick={() =>
                    setQty((prev) =>
                      Math.max(1, prev - 1)
                    )
                  }
                  className="flex items-center justify-center border-r border-white/20 hover:bg-white/5"
                >
                  <MinusIcon className="h-4 w-4" />
                </button>

                <div className="flex items-center justify-center font-bold">
                  {qty}
                </div>

                <button
                  onClick={() =>
                    setQty((prev) => prev + 1)
                  }
                  className="flex items-center justify-center border-l border-white/20 hover:bg-white/5"
                >
                  <PlusIcon className="h-4 w-4" />
                </button>
              </div>

              <Link
                href="/contact"
                className="flex h-12 items-center justify-center bg-[#d4a63c] text-sm font-bold text-white transition hover:bg-[#bf912e]"
              >
                ขอใบเสนอราคา
              </Link>
            </div>

            <button className="hidden mt-4 flex h-12 items-center justify-center gap-2 border border-white/20 text-sm font-bold text-white/75 transition hover:border-[#d4a63c] hover:text-[#d4a63c]">
              <HeartIcon className="h-5 w-5" />
              บันทึกสินค้า
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-y border-white/10 bg-[#090909]">
        <div className="container-main grid gap-6 px-6 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:px-14">
          {product.features.map((item) => (
            <FeatureCard
              key={item.title}
              title={item.title}
              desc={item.description}
            />
          ))}
        </div>
      </section>

      {/* DETAIL */}
      <section
        className={`container-main grid gap-1 px-6 py-10 lg:px-14 ${
          isMeshOrWireProduct ? "" : "lg:grid-cols-2"
        }`}
      >
        <div className="bg-white p-6 text-black sm:p-8">
          <h2 className="mb-6 text-2xl font-extrabold">
            รายละเอียดสินค้า
          </h2>

          <table className="w-full text-sm">
            <tbody>
              {product.specs.map((item) => (
                <tr
                  key={item.label}
                  className="border-b border-black/10"
                >
                  <td className="w-[35%] py-3 font-bold">
                    {item.label}
                  </td>

                  <td className="py-3 text-black/70">
                    {item.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {!isMeshOrWireProduct && (
          <div className="bg-white p-6 text-black sm:p-8">
            <h2 className="mb-6 text-2xl font-extrabold">
              ขนาดสินค้า
            </h2>

            <div className="space-y-6">
              {product.sizes.map((item) => (
                <div
                  key={item.height}
                  className="grid grid-cols-[110px_1fr] gap-4"
                >
                  <div className="h-fit bg-black px-3 py-2 text-center text-sm font-bold text-white">
                    สูง {item.height}
                  </div>

                  <Image
                    src={item.image}
                    alt={item.height}
                    className="w-full object-contain"
                    width={900}
                    height={300}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* RELATED */}
      <section className="hidden container-main px-6 pb-14 lg:px-14">
        <div className="bg-white p-6 text-black sm:p-8">
          <h2 className="mb-6 text-2xl font-extrabold">
            สินค้าที่เกี่ยวข้อง
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {relatedProducts.map((item) => (
              <article
                key={item.id}
                className="bg-[#f5f5f5] p-4"
              >
                <div className="aspect-square bg-white">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-contain"
                    width={500}
                    height={500}
                  />
                </div>

                <h3 className="mt-4 font-bold">
                  {item.title}
                </h3>

                <p className="mt-1 font-bold text-black">
                  {item.price} บาท/ชิ้น
                </p>

                <Link
                  href={`/products/${item.slug}`}
                  className="mt-4 flex h-10 items-center justify-center border border-black text-sm font-bold transition hover:bg-black hover:text-white"
                >
                  ดูรายละเอียด
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function FeatureCard({ title, desc }) {
  const icons = {
    "ชุบกัลวาไนซ์": ShieldCheckIcon,
    "แข็งแรง ทนทาน": LinkIcon,
    "ติดตั้งง่าย": Cog6ToothIcon,
    "จัดส่งทั่วประเทศ": TruckIcon,
  };

  const Icon = icons[title] || ShieldCheckIcon;

  return (
    <div className="flex items-center gap-4 border-r border-white/10 pr-4 last:border-r-0">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#d4a63c]/60 text-[#d4a63c]">
        <Icon className="h-7 w-7" />
      </div>

      <div>
        <h3 className="font-bold text-white">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-white/55">
          {desc}
        </p>
      </div>
    </div>
  );
}