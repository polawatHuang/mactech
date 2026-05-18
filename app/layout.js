import "./globals.css";

export const metadata = {
  title: "MACTECH - แผงรั้วสำเร็จรูปคุณภาพสูง",
  description: "MACTECH นำเสนอแผงรั้วสำเร็จรูปคุณภาพสูง เหมาะสำหรับบ้านและโครงการต่างๆ ด้วยดีไซน์ทันสมัยและทนทานต่อสภาพอากาศ เลือกแผงรั้วที่เหมาะกับความต้องการของคุณได้ที่นี่",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="th"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
