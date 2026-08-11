import { products } from "@/mock/products";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: "ไม่พบสินค้า | MACTECH",
      description: "ขออภัย ไม่พบสินค้าที่คุณกำลังค้นหา",
    };
  }

  return {
    title: product.seo.title,
    description: product.seo.description,
    keywords: product.seo.keywords,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      title: product.seo.title,
      description: product.seo.description,
      url: `/products/${product.slug}`,
      images: [
        {
          url: product.coverImage.src,
          width: product.coverImage.width,
          height: product.coverImage.height,
          alt: product.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.seo.title,
      description: product.seo.description,
      images: [product.coverImage.src],
    },
  };
}

export default function ProductDetailLayout({ children }) {
  return children;
}
