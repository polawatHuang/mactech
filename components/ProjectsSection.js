import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const projects = [
  {
    title: "โครงการหมู่บ้านจัดสรร",
    subtitle: "รั้วเหล็กเคลือบสีเขียว",
    image: "/images/project-1.jpg",
    href: "/projects/village",
  },
  {
    title: "โรงงานอุตสาหกรรม",
    subtitle: "รั้วเหล็กแบบประหยัด",
    image: "/images/project-2.jpg",
    href: "/projects/factory",
  },
  {
    title: "โครงการบ้านพักอาศัย",
    subtitle: "รั้วเหล็กเคลือบสีดำ",
    image: "/images/project-3.jpg",
    href: "/projects/home",
  },
  {
    title: "สถานที่ราชการ",
    subtitle: "รั้วเหล็กกัลวาไนซ์",
    image: "/images/project-4.jpg",
    href: "/projects/government",
  },
];

export default function ProjectsSection() {
  return (
    <section className="bg-[#070707] px-6 md:px-14 py-8 sm:py-10 lg:py-12">
      <div className="container-main">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="flex flex-1 items-center gap-5">
            <h2 className="shrink-0 text-2xl font-extrabold text-white sm:text-3xl">
              ผลงานของเรา
            </h2>

            <div className="h-px flex-1 bg-[#d4a63c]/45" />
          </div>

          <Link
            href="/projects"
            className="hidden border border-[#d4a63c]/60 px-5 py-2 text-sm font-bold text-[#d4a63c] transition hover:bg-[#d4a63c] hover:text-black sm:inline-flex"
          >
            ดูผลงานทั้งหมด
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((item) => (
            <Link
              href={item.href}
              key={item.title}
              className="group border border-white/15 bg-[#0b0b0b] transition hover:-translate-y-1 hover:border-[#d4a63c]/60"
            >
              <div className="aspect-[16/9] overflow-hidden bg-black">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-4">
                <h3 className="text-base font-bold text-white sm:text-lg">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-white/65">
                  {item.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/projects"
          className="mt-5 flex h-11 items-center justify-center border border-[#d4a63c]/60 text-sm font-bold text-[#d4a63c] transition hover:bg-[#d4a63c] hover:text-black sm:hidden"
        >
          ดูผลงานทั้งหมด
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}