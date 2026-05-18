import Link from "next/link";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import LogoImg from "../public/images/logo.webp";

const mainMenus = [
  { name: "หน้าแรก", href: "/" },
  { name: "สินค้า", href: "/products" },
  { name: "บริการให้คำปรึกษา", href: "/consulting" },
//   { name: "ผลงานของเรา", href: "/projects" },
  { name: "เกี่ยวกับเรา", href: "/about" },
  { name: "ติดต่อเรา", href: "/contact" },
];

const products = [
  { name: "แผงรั้วกัลวาไนซ์", href: "/products/galvanized-fence" },
  { name: "แผงรั้ว เคลือบสีดำ", href: "/products/black-pe-fence" },
  { name: "แผงรั้ว เคลือบสีเขียว", href: "/products/green-pe-fence" },
  // { name: "แผงรั้ว แบบประหยัด", href: "/products/economy" },
  // { name: "เสา / อุปกรณ์", href: "/products/accessories" },
  // { name: "ชุดประตูรั้ว", href: "/products/gate" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070707]">
      <div className="container-main px-6 md:px-14 py-10 sm:py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_.8fr_1fr_1.1fr]">
          <div>
            <Image
              src={LogoImg}
              alt="MACTECH"
              className="w-[180px] h-auto object-contain"
                width={180}
                height={40}
            />

            <p className="mt-5 max-w-[320px] text-sm leading-7 text-white/65">
              จำหน่ายแผงรั้วเหล็ก เสารั้ว และอุปกรณ์ติดตั้งครบวงจร
              คุณภาพสูง แข็งแรง ทนทาน ตอบโจทย์ทุกความต้องการ
            </p>
          </div>

          <FooterColumn title="เมนูหลัก" items={mainMenus} />

          <FooterColumn title="สินค้าของเรา" items={products} />

          <div>
            <h3 className="text-sm font-bold text-white">ติดต่อเรา</h3>

            <div className="mt-5 space-y-3 text-sm text-white/75">
              <a href="tel:0652655539" className="flex items-center gap-3">
                <PhoneIcon className="h-5 w-5 text-[#d4a63c]" />
                065-2655539
              </a>

              <div className="flex items-center gap-3">
                <a href="https://line.me/ti/p/~mack.656" target="_blank" rel="noreferrer" className="flex items-center gap-3">
                <span className="flex h-5 w-5 text-[5px] items-center justify-center rounded bg-[#00c300] font-black text-white">
                  LINE
                </span>
                mack.656
                </a>
              </div>

              <a
                href="mailto:mactech.fence@gmail.com"
                className="flex items-center gap-3"
              >
                <EnvelopeIcon className="h-5 w-5 text-[#d4a63c]" />
                mactech.fence@gmail.com
              </a>

              <div className="flex items-center gap-3">
                <MapPinIcon className="h-5 w-5 text-[#d4a63c]" />
                219/2 หมู่ 12 ตำบลกระสัง อำเภอเมืองบุรีรัมย์ จังหวัดบุรีรัมย์ 31000
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-main px-6 md:px-14 flex flex-col gap-4 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-center">
          <p>© {new Date().getFullYear()} MACTECH STEEL FENCE SYSTEM. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <h3 className="text-sm font-bold text-white">{title}</h3>

      <ul className="mt-5 space-y-2.5">
        {items.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="text-sm text-white/55 transition hover:text-[#d4a63c]"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}