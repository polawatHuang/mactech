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

  {
    id: "stainless-chicken-wire-mesh",

    slug: "stainless-chicken-wire-mesh",

    category: "ตาข่ายกรงไก่",

    badge: "สินค้าใหม่",

    title: "ตาข่ายกรงไก่แสตนเลส",

    shortTitle: "ตาข่ายกรงไก่แสตนเลส",

    subtitle: "STAINLESS STEEL CHICKEN WIRE MESH",

    description:
      "ตาข่ายกรงไก่ผลิตจากลวดแสตนเลส ทนสนิม ทนความชื้นสูง เหมาะสำหรับงานที่ต้องการความทนทานเป็นพิเศษ",

    shortDescription:
      "ทนสนิม ทนความชื้น ใช้งานได้ยาวนาน",

    startingPrice: 65,

    currency: "THB",

    coverImage: WhiteWall,

    gallery: [WhiteWall],

    sizes: [],

    specs: [
      {
        label: "ประเภทสินค้า",
        value: "ตาข่ายกรงไก่แสตนเลส",
      },
      {
        label: "วัสดุ",
        value: "ลวดแสตนเลส (Stainless Steel Wire)",
      },
      {
        label: "ขนาดตาข่ายและความกว้าง/ยาวม้วน",
        value: "มีหลายขนาด ตามหน้างาน กรุณาสอบถามเจ้าหน้าที่",
      },
      {
        label: "การใช้งาน",
        value: "งานกรงสัตว์ปีก งานเกษตร งานอุตสาหกรรมที่สัมผัสความชื้น",
      },
    ],

    features: [
      {
        title: "ทนสนิมสูง",
        description: "เหมาะกับพื้นที่ชื้นหรือใกล้ทะเล",
      },
      {
        title: "แข็งแรง ทนทาน",
        description: "ใช้งานได้ยาวนาน",
      },
    ],

    seo: {
      title: "ตาข่ายกรงไก่แสตนเลส | MACTECH",
      description:
        "จำหน่ายตาข่ายกรงไก่แสตนเลส ทนสนิม ทนความชื้น คุณภาพสูง",
      keywords: ["ตาข่ายกรงไก่", "ตาข่ายแสตนเลส", "MACTECH"],
    },
  },

  {
    id: "galvanized-chicken-wire-mesh",

    slug: "galvanized-chicken-wire-mesh",

    category: "ตาข่ายกรงไก่",

    badge: "สินค้าใหม่",

    title: "ตาข่ายกรงไก่ชุบเย็น",

    shortTitle: "ตาข่ายกรงไก่ชุบเย็น",

    subtitle: "ELECTRO GALVANIZED CHICKEN WIRE MESH",

    description:
      "ตาข่ายกรงไก่ชุบเย็น (Electro Galvanized) ผิวเรียบ ป้องกันสนิมในระดับใช้งานทั่วไป ราคาคุ้มค่า",

    shortDescription:
      "ผิวเรียบ ป้องกันสนิม ราคาคุ้มค่า",

    startingPrice: 45,

    currency: "THB",

    coverImage: WhiteWall,

    gallery: [WhiteWall],

    sizes: [],

    specs: [
      {
        label: "ประเภทสินค้า",
        value: "ตาข่ายกรงไก่ชุบเย็น",
      },
      {
        label: "วัสดุ",
        value: "ลวดเหล็กชุบสังกะสีแบบเย็น (Electro Galvanized)",
      },
      {
        label: "ขนาดตาข่ายและความกว้าง/ยาวม้วน",
        value: "มีหลายขนาด ตามหน้างาน กรุณาสอบถามเจ้าหน้าที่",
      },
      {
        label: "การใช้งาน",
        value: "งานกรงสัตว์ปีก งานเกษตร งานทั่วไป",
      },
    ],

    features: [
      {
        title: "ราคาคุ้มค่า",
        description: "เหมาะกับงานทั่วไป",
      },
      {
        title: "ป้องกันสนิม",
        description: "ผิวชุบสังกะสีเรียบ",
      },
    ],

    seo: {
      title: "ตาข่ายกรงไก่ชุบเย็น | MACTECH",
      description:
        "จำหน่ายตาข่ายกรงไก่ชุบเย็น (Electro Galvanized) คุณภาพดี ราคาคุ้มค่า",
      keywords: ["ตาข่ายกรงไก่", "ตาข่ายชุบเย็น", "MACTECH"],
    },
  },

  {
    id: "pvc-chicken-wire-mesh",

    slug: "pvc-chicken-wire-mesh",

    category: "ตาข่ายกรงไก่",

    badge: "สินค้าใหม่",

    title: "ตาข่ายกรงไก่ PVC",

    shortTitle: "ตาข่ายกรงไก่ PVC",

    subtitle: "PVC COATED CHICKEN WIRE MESH",

    description:
      "ตาข่ายกรงไก่เคลือบ PVC เพิ่มความทนทานและความสวยงาม ป้องกันสนิมได้ดีกว่าแบบชุบเย็น",

    shortDescription:
      "เคลือบ PVC ทนทาน สวยงาม",

    startingPrice: 55,

    currency: "THB",

    coverImage: WhiteWall,

    gallery: [WhiteWall],

    sizes: [],

    specs: [
      {
        label: "ประเภทสินค้า",
        value: "ตาข่ายกรงไก่ PVC",
      },
      {
        label: "วัสดุ",
        value: "ลวดเหล็กชุบสังกะสี เคลือบผิว PVC",
      },
      {
        label: "สี",
        value: "เขียว / ดำ (ตามหน้างาน)",
      },
      {
        label: "ขนาดตาข่ายและความกว้าง/ยาวม้วน",
        value: "มีหลายขนาด ตามหน้างาน กรุณาสอบถามเจ้าหน้าที่",
      },
      {
        label: "การใช้งาน",
        value: "งานกรงสัตว์ปีก งานสวน งานที่ต้องการความสวยงาม",
      },
    ],

    features: [
      {
        title: "เคลือบ PVC",
        description: "ป้องกันสนิมได้ดี สีสวยงาม",
      },
      {
        title: "ทนทาน",
        description: "ใช้งานได้ยาวนาน",
      },
    ],

    seo: {
      title: "ตาข่ายกรงไก่ PVC | MACTECH",
      description:
        "จำหน่ายตาข่ายกรงไก่เคลือบ PVC ทนทาน สวยงาม หลากสี",
      keywords: ["ตาข่ายกรงไก่", "ตาข่าย PVC", "MACTECH"],
    },
  },

  {
    id: "barbed-wire",

    slug: "barbed-wire",

    category: "ลวดหนาม",

    badge: "สินค้าใหม่",

    title: "ลวดหนาม",

    shortTitle: "ลวดหนาม",

    subtitle: "BARBED WIRE",

    description:
      "ลวดหนามชุบกัลวาไนซ์ ป้องกันสนิม แข็งแรง เหมาะสำหรับงานรั้วกันขโมยและพื้นที่เกษตร",

    shortDescription:
      "แข็งแรง ป้องกันสนิม เหมาะกับรั้วกันขโมย",

    startingPrice: 850,

    currency: "THB",

    coverImage: WhiteWall,

    gallery: [WhiteWall],

    sizes: [],

    specs: [
      {
        label: "ประเภทสินค้า",
        value: "ลวดหนาม",
      },
      {
        label: "วัสดุ",
        value: "เหล็กชุบกัลวาไนซ์ (Galvanized)",
      },
      {
        label: "ความยาว",
        value: "ตามม้วน กรุณาสอบถามเจ้าหน้าที่",
      },
      {
        label: "การใช้งาน",
        value: "รั้วกันขโมย พื้นที่เกษตร แนวเขตที่ดิน",
      },
    ],

    features: [
      {
        title: "ป้องกันการบุกรุก",
        description: "เหมาะกับแนวรั้วกันขโมย",
      },
      {
        title: "ชุบกัลวาไนซ์",
        description: "ป้องกันสนิม ใช้งานได้นาน",
      },
    ],

    seo: {
      title: "ลวดหนาม | MACTECH",
      description:
        "จำหน่ายลวดหนามชุบกัลวาไนซ์ แข็งแรง ป้องกันสนิม เหมาะกับงานรั้ว",
      keywords: ["ลวดหนาม", "รั้วลวดหนาม", "MACTECH"],
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