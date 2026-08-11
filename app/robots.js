export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://mactechfence.vercel.app/sitemap.xml",
  };
}
