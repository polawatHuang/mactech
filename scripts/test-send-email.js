/**
 * Standalone SMTP test script — sends one real email using the credentials in .env
 * so you can verify SMTP settings without going through the website's contact form.
 *
 * Usage: node scripts/test-send-email.js
 */

const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");

function loadEnv(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const env = {};
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const idx = trimmed.indexOf("=");
    if (idx === -1) continue;
    env[trimmed.slice(0, idx).trim()] = trimmed.slice(idx + 1).trim();
  }
  return env;
}

(async () => {
  const env = loadEnv(path.join(__dirname, "..", ".env"));

  console.log("Using SMTP config:");
  console.log("  host:", env.SMTP_HOST);
  console.log("  port:", env.SMTP_PORT);
  console.log("  user:", env.SMTP_USER);
  console.log("  to:  ", env.CONTACT_TO_EMAIL);
  console.log("");

  // Atom hosting's SSL cert is issued for the shared server hostname, not the
  // customer domain, so pin servername here to avoid a cert altnames mismatch.
  const isAtomHosting = env.SMTP_HOST?.includes("hostatom");

  const transporter = nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: Number(env.SMTP_PORT),
    secure: true,
    auth: {
      user: env.SMTP_USER,
      pass: env.SMTP_PASS,
    },
    ...(isAtomHosting ? { tls: { servername: "thsv31.hostatom.com" } } : {}),
    connectionTimeout: 15000,
  });

  console.log("Step 1: verifying SMTP connection + login...");
  try {
    await transporter.verify();
    console.log("  ✔ Connected and authenticated successfully.\n");
  } catch (error) {
    console.log("  ✘ FAILED:", error.code, "-", error.message);
    process.exit(1);
  }

  console.log("Step 2: sending a real test email...");
  try {
    const info = await transporter.sendMail({
      from: `"MACTECH Website Test" <${env.SMTP_USER}>`,
      to: env.CONTACT_TO_EMAIL,
      subject: "[ทดสอบระบบ] ทดสอบส่งอีเมลจากฟอร์มติดต่อ MACTECH",
      text: "นี่คือข้อความทดสอบระบบส่งอีเมลจาก MACTECH website contact form test script",
      html: "<p>นี่คือข้อความทดสอบระบบส่งอีเมลจาก MACTECH website contact form test script</p>",
    });
    console.log("  ✔ Sent successfully.");
    console.log("  messageId:", info.messageId);
    console.log("  response: ", info.response);
  } catch (error) {
    console.log("  ✘ FAILED:", error.code, "-", error.message);
    process.exit(1);
  }
})();
