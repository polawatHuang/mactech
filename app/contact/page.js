"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(e.currentTarget);

    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (res.ok) {
      setStatus("ส่งข้อความสำเร็จ ทีมงานจะติดต่อกลับโดยเร็วที่สุด");
      e.currentTarget.reset();
    } else {
      setStatus(data.message || "ส่งข้อความไม่สำเร็จ กรุณาลองใหม่");
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />

      <section className="relative overflow-hidden border-b border-white/10 pt-[76px] lg:pt-[86px]">
        <img
          src="/images/store.png"
          alt="MACTECH"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.96)_0%,rgba(0,0,0,.82)_42%,rgba(0,0,0,.22)_100%)]" />

        <div className="container-main relative z-10 min-h-[520px] px-6 py-16 lg:px-14">
          <div className="max-w-xl">
            <h1 className="text-5xl font-extrabold leading-tight lg:text-7xl">
              ติดต่อเรา
              <br />
              <span className="text-[#d4a63c]">MACTECH</span>
            </h1>

            <div className="mt-5 h-px w-72 bg-[#d4a63c]/70" />

            <p className="mt-8 text-lg leading-8 text-white/80">
              ทีมงานพร้อมให้คำปรึกษา แนะนำสินค้า
              และช่วยคุณเลือกรั้วที่เหมาะสมที่สุดสำหรับโครงการของคุณ
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
              {[
                "ให้คำปรึกษาฟรีโดยผู้เชี่ยวชาญ",
                "ประเมินราคาไวภายใน 24 ชม.",
                "จัดส่งทั่วประเทศ",
                "สินค้าคุณภาพสูงได้มาตรฐาน",
              ].map((item) => (
                <div key={item} className="border-r border-white/10 pr-4">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center border border-[#d4a63c] text-[#d4a63c]">
                    ✓
                  </div>
                  <p className="text-sm font-bold leading-6">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-main grid gap-10 px-6 py-14 lg:grid-cols-[.8fr_1.2fr] lg:px-14">
        <div>
          <h2 className="text-3xl font-extrabold">ช่องทางการติดต่อ</h2>
          <div className="mt-3 h-px w-20 bg-[#d4a63c]" />

          <div className="mt-8 space-y-7">
            <ContactItem icon={<PhoneIcon />} title="โทรศัพท์" value="065-265-5539" />
            <ContactItem icon={<EnvelopeIcon />} title="อีเมล" value="mactech.fence@gmail.com" />
            <ContactItem icon={<MapPinIcon />} title="ที่อยู่บริษัท" value="219/2 หมู่ 12 ตำบลกระสัง อำเภอเมืองบุรีรัมย์ จังหวัดบุรีรัมย์ 31000" />
            <ContactItem icon={<ClockIcon />} title="เวลาทำการ" value="จันทร์ - เสาร์ 08:30 - 17:30 น." />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <h2 className="text-3xl font-extrabold">ส่งข้อความถึงเรา</h2>
          <div className="mt-3 h-px w-20 bg-[#d4a63c]" />

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Input name="name" placeholder="ชื่อ-นามสกุล *" required />
            <Input name="phone" placeholder="เบอร์โทรศัพท์ *" required />
          </div>

          <div className="mt-4">
            <Input name="email" type="email" placeholder="อีเมล" />
          </div>

          <div className="mt-4">
            <Input name="subject" placeholder="หัวข้อที่ต้องการติดต่อ" />
          </div>

          <textarea
            name="message"
            rows={6}
            placeholder="รายละเอียดเพิ่มเติม"
            required
            className="mt-4 w-full border border-white/15 bg-transparent px-4 py-3 text-white outline-none transition placeholder:text-white/40 focus:border-[#d4a63c]"
          />

          <label className="mt-5 flex items-center gap-3 text-sm text-white/70">
            <input type="checkbox" required className="h-5 w-5 accent-[#d4a63c]" />
            ฉันยอมรับนโยบายความเป็นส่วนตัว
          </label>

          {status && (
            <p className="mt-5 text-sm font-bold text-[#d4a63c]">
              {status}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-7 flex h-14 w-full items-center justify-center gap-3 bg-[#d4a63c] font-bold text-white transition hover:bg-[#bd8f2e] disabled:opacity-60 sm:ml-auto sm:w-[320px]"
          >
            <PaperAirplaneIcon className="h-5 w-5" />
            {loading ? "กำลังส่ง..." : "ส่งข้อความ"}
          </button>
        </form>
      </section>

      <section className="container-main px-6 pb-16 lg:px-14">
        <h2 className="text-3xl font-extrabold">แผนที่การเดินทาง</h2>
        <div className="mt-3 h-px w-20 bg-[#d4a63c]" />

        <div className="mt-8 grid gap-6 lg:grid-cols-[320px_1fr]">
          <div className="border border-white/15 bg-[#0b0b0b] p-7">
            <MapPinIcon className="h-12 w-12 text-[#d4a63c]" />
            <h3 className="mt-4 text-xl font-extrabold">MACTECH STEEL FENCE SYSTEM</h3>
            <p className="mt-4 leading-7 text-white/70">
              219/2 หมู่ 12 ตำบลกระสัง อำเภอเมืองบุรีรัมย์ จังหวัดบุรีรัมย์ 31000
            </p>
            <a
              href="https://www.google.com/maps?q=219/2%20หมู่%2012%20ตำบลกระสัง%20อำเภอเมืองบุรีรัมย์%20จังหวัดบุรีรัมย์%2031000"
              target="_blank"
              className="mt-7 inline-flex h-12 items-center justify-center border border-[#d4a63c] px-6 font-bold text-[#d4a63c] hover:bg-[#d4a63c] hover:text-black"
            >
              ดูเส้นทางใน Google Maps →
            </a>
          </div>

          <div className="min-h-[280px] border border-white/15 bg-[#111]">
            <iframe
              title="MACTECH Map"
              src="https://www.google.com/maps?q=219/2%20หมู่%2012%20ตำบลกระสัง%20อำเภอเมืองบุรีรัมย์%20จังหวัดบุรีรัมย์%2031000&output=embed"
              className="h-full min-h-[280px] w-full grayscale"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Input({ name, type = "text", placeholder, required }) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      className="h-12 w-full border border-white/15 bg-transparent px-4 text-white outline-none transition placeholder:text-white/40 focus:border-[#d4a63c]"
    />
  );
}

function ContactItem({ icon, title, value }) {
  return (
    <div className="flex gap-5">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/20 text-white [&>svg]:h-7 [&>svg]:w-7">
        {icon}
      </div>
      <div>
        <p className="text-white/70">{title}</p>
        <p className="mt-1 text-xl font-extrabold text-[#d4a63c]">{value}</p>
      </div>
    </div>
  );
}