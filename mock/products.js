import WhiteWall from "@/public/images/wall-white.png";
import BlackWall from "@/public/images/wall-black.png";
import GreenWall from "@/public/images/wall-green.png";

import Store1 from "@/public/images/f1.png";
import Store2 from "@/public/images/f2.png";
import Store3 from "@/public/images/f3.png";
import Store4 from "@/public/images/f4.png";
import Store5 from "@/public/images/f5.png";

import FenceSize1 from "@/public/images/FenceSize1.png";
import FenceSize2 from "@/public/images/FenceSize2.png";
import FenceSize3 from "@/public/images/FenceSize3.png";

import PostGalvanized from "@/public/images/wall-white.png";
import BasePlate from "@/public/images/wall-white.png";
import Bolt from "@/public/images/wall-white.png";
import PostCap from "@/public/images/wall-white.png";
import Wrench from "@/public/images/wall-white.png";

export const products = [
  {
    id: "galvanized-fence",

    slug: "galvanized-fence",

    category: "แผงรั้วเหล็ก",

    badge: "สินค้าขายดี",

    title: "แผงรั้วสำเร็จรูปกัลวาไนซ์",

    shortTitle: "แผงรั้วกัลวาไนซ์",

    subtitle: "WELDED WIRE MESH FENCE (GALVANIZED)",

    description:
      "แผงรั้วสำเร็จรูปผลิตจากเหล็กคุณภาพสูง ชุบกัลวาไนซ์ป้องกันสนิม แข็งแรง ทนทาน ติดตั้งง่าย ใช้งานได้ยาวนาน",

    shortDescription:
      "แข็งแรง ทนทุกสภาพอากาศ ป้องกันสนิม",

    startingPrice: 1250,

    currency: "THB",

    coverImage: WhiteWall,

    gallery: [
      WhiteWall,
      Store1,
      Store3,
    ],

    sizes: [
      {
        height: "2.00 เมตร",
        width: "2.40 เมตร/แผง",
        image: FenceSize1,
      },
      {
        height: "1.50 เมตร",
        width: "2.40 เมตร/แผง",
        image: FenceSize2,
      },
      {
        height: "1.20 เมตร",
        width: "2.40 เมตร/แผง",
        image: FenceSize3,
      },
    ],

    specs: [
      {
        label: "ประเภทสินค้า",
        value: "แผงรั้วสำเร็จรูปกัลวาไนซ์",
      },
      {
        label: "วัสดุ",
        value: "เหล็กกล้า ชุบกัลวาไนซ์ (Hot Dip Galvanized)",
      },
      {
        label: "ความสูง",
        value: "2.00 เมตร / 1.50 เมตร / 1.20 เมตร",
      },
      {
        label: "ความยาว",
        value: "2.40 เมตร/แผง",
      },
      {
        label: "ขนาดช่องลวด",
        value: "6 x 20 ซม. (กว้าง x สูง)",
      },
      {
        label: "ขนาดลวดแนวตั้ง",
        value: "5 มม.",
      },
      {
        label: "ขนาดลวดแนวนอน",
        value: "6 มม.",
      },
      {
        label: "ลวดดัดโค้ง",
        value: "2 ชั้น เพิ่มความแข็งแรง",
      },
      {
        label: "สี",
        value: "กัลวาไนซ์ เงิน",
      },
      {
        label: "การใช้งาน",
        value:
          "บ้านพักอาศัย, โรงงาน, โครงการ, สถานที่ราชการ",
      },
    ],

    features: [
      {
        title: "ชุบกัลวาไนซ์",
        description: "ป้องกันสนิม ใช้งานได้นาน",
      },
      {
        title: "แข็งแรง ทนทาน",
        description: "ผลิตจากเหล็กคุณภาพสูง",
      },
      {
        title: "ติดตั้งง่าย",
        description: "ประหยัดเวลา ติดตั้งสะดวก",
      },
      {
        title: "จัดส่งทั่วประเทศ",
        description: "บริการจัดส่งรวดเร็ว",
      },
    ],

    seo: {
      title:
        "แผงรั้วสำเร็จรูปกัลวาไนซ์ | MACTECH",
      description:
        "จำหน่ายแผงรั้วสำเร็จรูปกัลวาไนซ์ คุณภาพสูง แข็งแรง ทนทาน ป้องกันสนิม",
      keywords: [
        "แผงรั้ว",
        "รั้วเหล็ก",
        "รั้วกัลวาไนซ์",
        "MACTECH",
      ],
    },
  },

  {
    id: "black-pe-fence",

    slug: "black-pe-fence",

    category: "แผงรั้วเหล็ก",

    badge: "ยอดนิยม",

    title: "แผงรั้วสำเร็จรูปชุบ PE สีดำ",

    shortTitle: "แผงรั้ว PE สีดำ",

    subtitle: "WELDED WIRE MESH FENCE (BLACK PE)",

    description:
      "แผงรั้วเคลือบ PE สีดำ ดีไซน์ทันสมัย เรียบหรู แข็งแรง ป้องกันสนิมและรอยขีดข่วน",

    shortDescription:
      "สวยงาม เรียบหรู ป้องกันสนิม",

    startingPrice: 1450,

    currency: "THB",

    coverImage: BlackWall,

    gallery: [
      BlackWall,
      Store2,
      Store4,
    ],

    sizes: [
      {
        height: "2.00 เมตร",
        width: "2.40 เมตร/แผง",
        image: FenceSize1,
      },
      {
        height: "1.50 เมตร",
        width: "2.40 เมตร/แผง",
        image: FenceSize2,
      },
    ],

    specs: [
      {
        label: "ประเภทสินค้า",
        value: "แผงรั้วชุบ PE สีดำ",
      },
      {
        label: "สี",
        value: "ดำด้าน",
      },
      {
        label: "วัสดุ",
        value: "เหล็กเคลือบ PE",
      },
    ],

    features: [
      {
        title: "ดีไซน์โมเดิร์น",
        description: "สวยงาม ทันสมัย",
      },
      {
        title: "ป้องกันสนิม",
        description: "ใช้งานได้ยาวนาน",
      },
    ],

    seo: {
      title:
        "แผงรั้วสำเร็จรูปชุบ PE สีดำ | MACTECH",
      description:
        "แผงรั้วเหล็กชุบ PE สีดำ ดีไซน์ทันสมัย แข็งแรง ทนทาน",
      keywords: [
        "แผงรั้วสีดำ",
        "รั้ว PE ดำ",
      ],
    },
  },

  {
    id: "green-pe-fence",

    slug: "green-pe-fence",

    category: "แผงรั้วเหล็ก",

    badge: "แนะนำ",

    title: "แผงรั้วสำเร็จรูปชุบ PE สีเขียว",

    shortTitle: "แผงรั้ว PE สีเขียว",

    subtitle: "WELDED WIRE MESH FENCE (GREEN PE)",

    description:
      "แผงรั้วชุบ PE สีเขียว เหมาะสำหรับบ้าน โครงการ สวน และพื้นที่กลางแจ้ง",

    shortDescription:
      "โดดเด่นเป็นเอกลักษณ์",

    startingPrice: 1450,

    currency: "THB",

    coverImage: GreenWall,

    gallery: [
      GreenWall,
      Store2,
      Store5,
    ],

    sizes: [
      {
        height: "2.00 เมตร",
        width: "2.40 เมตร/แผง",
        image: FenceSize1,
      },
    ],

    specs: [
      {
        label: "ประเภทสินค้า",
        value: "แผงรั้วชุบ PE สีเขียว",
      },
      {
        label: "สี",
        value: "เขียว",
      },
    ],

    features: [
      {
        title: "สีโดดเด่น",
        description: "เหมาะกับงาน Landscape",
      },
    ],

    seo: {
      title:
        "แผงรั้วสำเร็จรูปชุบ PE สีเขียว | MACTECH",
      description:
        "แผงรั้วสีเขียว แข็งแรง สวยงาม เหมาะกับสวนและโครงการ",
      keywords: [
        "รั้วสีเขียว",
        "แผงรั้วสวน",
      ],
    },
  },
];

export const relatedProducts = [
  {
    id: "post-galvanized",
    title: "เสาเหล็กกล่องกัลวาไนซ์",
    price: 450,
    image: PostGalvanized,
  },

  {
    id: "base-plate",
    title: "ฐานเสาเหล็ก",
    price: 250,
    image: BasePlate,
  },

  {
    id: "bolt-set",
    title: "ชุดสกรูและน็อตยึดแผงรั้ว",
    price: 35,
    image: Bolt,
  },

  {
    id: "post-cap",
    title: "ฝาปิดเสาเหล็ก",
    price: 25,
    image: PostCap,
  },

  {
    id: "wrench",
    title: "ประแจขันน็อต",
    price: 150,
    image: Wrench,
  },
];