import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const body = await request.json();
  const { name, phone, email, subject, message } = body;

  if (!name || !phone || !message) {
    return NextResponse.json(
      { message: "กรุณากรอกข้อมูลให้ครบถ้วน" },
      { status: 400 }
    );
  }

  const isAtomHosting = process.env.SMTP_HOST?.includes("hostatom");

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    ...(isAtomHosting ? { tls: { servername: "thsv31.hostatom.com" } } : {}),
  });

  try {
    await transporter.sendMail({
      from: `"MACTECH Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email || undefined,
      subject: `[ติดต่อจากเว็บไซต์] ${subject || "ข้อความจากฟอร์มติดต่อ"} - ${name}`,
      text: [
        `ชื่อ-นามสกุล: ${name}`,
        `เบอร์โทรศัพท์: ${phone}`,
        `อีเมล: ${email || "-"}`,
        `หัวข้อ: ${subject || "-"}`,
        "",
        "รายละเอียด:",
        message,
      ].join("\n"),
      html: `
        <p><strong>ชื่อ-นามสกุล:</strong> ${name}</p>
        <p><strong>เบอร์โทรศัพท์:</strong> ${phone}</p>
        <p><strong>อีเมล:</strong> ${email || "-"}</p>
        <p><strong>หัวข้อ:</strong> ${subject || "-"}</p>
        <p><strong>รายละเอียด:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ message: "ส่งข้อความสำเร็จ" }, { status: 200 });
  } catch (error) {
    console.error("Contact form email error:", error);
    return NextResponse.json(
      { message: "ส่งข้อความไม่สำเร็จ กรุณาลองใหม่" },
      { status: 500 }
    );
  }
}
