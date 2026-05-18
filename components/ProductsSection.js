import Link from "next/link";
import WhiteWallImg from "../public/images/wall-white.png";
import GreenWallImg from "../public/images/wall-green.png";
import BlackWallImg from "../public/images/wall-black.png";
import Image from "next/image";

const products = [
  {
    title: "แผงรั้วกัลวาไนซ์",
    image: WhiteWallImg,
    href: "/products/galvanized",
  },
  {
    title: "แผงรั้ว เคลือบสีดำ",
    image: BlackWallImg,
    href: "/products/pe-black",
  },
  {
    title: "แผงรั้ว เคลือบสีเขียว",
    image: GreenWallImg,
    href: "/products/pe-green",
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

export default function ProductsSection() {
  return (
    <section className="bg-[#070707] px-6 md:px-14 py-8 sm:py-10 lg:py-12">
      <div className="container-main">
        <div className="mb-7 border-b border-[#d4a63c]/30 pb-3">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            สินค้าของเรา
          </h2>
          <p className="mt-1 text-sm text-white/55">
            จำหน่ายแผงรั้วเหล็ก เสารั้ว และอุปกรณ์ติดตั้งครบวงจร
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-6">
          {products.map((item) => (
            <article
              key={item.title}
              className="group border border-white/10 bg-[#0b0b0b] p-2 transition duration-300 hover:-translate-y-1 hover:border-[#d4a63c]/60 hover:shadow-[0_18px_50px_rgba(0,0,0,.55)]"
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
    </section>
  );
}