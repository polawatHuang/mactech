import "./globals.css";

const siteUrl = "https://www.mactechthailand.com";
const title = "MACTECH - แผงรั้วเหล็ก ตาข่ายกรงไก่ ลวดหนาม สำเร็จรูปคุณภาพสูง";
const description =
  "MACTECH จำหน่ายแผงรั้วเหล็กสำเร็จรูป ตาข่ายกรงไก่ และลวดหนามคุณภาพสูง เหมาะสำหรับบ้านและโครงการต่างๆ ด้วยดีไซน์ทันสมัยและทนทานต่อสภาพอากาศ เลือกสินค้าที่เหมาะกับความต้องการของคุณได้ที่นี่";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "แผงรั้วเหล็ก",
    "รั้วสำเร็จรูป",
    "ตาข่ายกรงไก่",
    "ลวดหนาม",
    "รั้วกัลวาไนซ์",
    "MACTECH",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "MACTECH",
    locale: "th_TH",
    type: "website",
    images: [
      {
        url: "/ogimage.png",
        width: 1707,
        height: 921,
        alt: "MACTECH - แผงรั้วเหล็ก ตาข่ายกรงไก่ ลวดหนาม",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/ogimage.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MACTECH",
  url: siteUrl,
  logo: `${siteUrl}/images/logo.webp`,
  description,
  telephone: "+66652655539",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="th"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </body>
    </html>
  );
}
