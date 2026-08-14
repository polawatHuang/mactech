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

import StainlessMeshImg from "@/public/products/ตาข่ายกรงไก่สแตนเลส.jpg";
import ColdGalvanizedMeshImg from "@/public/products/ตาข่ายกรงไก่ชุบเย็น.jpg";
import HotGalvanizedMeshImg from "@/public/products/ตาข่ายกรงไก่ชุบร้อน.jpg";
import PvcMeshImg from "@/public/products/ตาข่ายกรงไก่ PVC.jpg";
import BarbedWireImg from "@/public/products/ลวดหนาม.jpg";
import DiamondMeshWireImg from "@/public/products/ตาข่ายถักข้าวหลามตัด.jpg";
import ExpandedMetalMeshImg from "@/public/products/ตะแกรงเหล็กฉีก.jpg";
import WormPatternGratingImg from "@/public/products/ตะแกรงเหล็กตัวหนอน.jpg";
import ArcMeshPanelImg from "@/public/products/แผงตะแกรงอาร์ค.jpg";
import KnottedMeshWireImg from "@/public/products/ลวดตาข่ายถักปม.jpg";
import FenceWireMeshImg from "@/public/products/ลวดตาข่ายรั้ว.jpg";

export const products = [
  {
    id: "galvanized-fence",

    slug: "galvanized-fence",

    category: "แผงรั้วสำเร็จรูป แผงรั้วอุตสาหกรรม แผงรั้วทางด่วน",

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
        value:
          "เหล็กกล้า ชุบสังกะสี (Hot Dip Galvanized) ป้องกันการกัดกร่อน ทนทานต่อการใช้งาน",
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
        label: "เสาเหล็กกล่อง",
        value: "ขนาด 50 x 50 มม. หนา 2.3 มม.",
      },
      {
        label: "ฐานเสาเหล็ก",
        value: "ขนาด 150 x 150 มม. หนา 6 มม.",
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

    category: "แผงรั้วสำเร็จรูป แผงรั้วอุตสาหกรรม แผงรั้วทางด่วน",

    badge: "ยอดนิยม",

    title: "แผงรั้วสำเร็จรูปชุบ PE สีดำ",

    shortTitle: "แผงรั้ว PE สีดำ",

    subtitle: "WELDED WIRE MESH FENCE (BLACK PE)",

    description:
      "แผงรั้วสำเร็จรูปชุบกัลวาไนซ์แล้วเคลือบผิว PE สีดำด้าน ป้องกันสนิมสองชั้น ดีไซน์ทันสมัย เรียบหรู เข้ากับบ้านและอาคารทุกสไตล์ ลวดดัดโค้ง 2 ชั้นเพิ่มความแข็งแรง พร้อมเสาเหล็กกล่องและฐานเสามาตรฐาน ติดตั้งง่าย",

    shortDescription:
      "สวยงาม เรียบหรู ป้องกันสนิมสองชั้น",

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
      {
        height: "1.20 เมตร",
        width: "2.40 เมตร/แผง",
        image: FenceSize3,
      },
    ],

    specs: [
      {
        label: "ประเภทสินค้า",
        value: "แผงรั้วชุบ PE สีดำ",
      },
      {
        label: "วัสดุ",
        value:
          "เหล็กกล้า ชุบสังกะสี (Hot Dip Galvanized) ป้องกันการกัดกร่อน ทนทานต่อการใช้งาน เคลือบผิว PE สีดำ เพิ่มความสวยงามและป้องกันสนิมอีกชั้น",
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
        label: "เสาเหล็กกล่อง",
        value: "ขนาด 50 x 50 มม. หนา 2.3 มม.",
      },
      {
        label: "ฐานเสาเหล็ก",
        value: "ขนาด 150 x 150 มม. หนา 6 มม.",
      },
      {
        label: "สี",
        value: "ดำด้าน",
      },
      {
        label: "การใช้งาน",
        value:
          "บ้านพักอาศัย, โรงงาน, โครงการ, สถานที่ราชการ",
      },
    ],

    features: [
      {
        title: "ป้องกันสนิมสองชั้น",
        description: "ชุบกัลวาไนซ์ก่อนเคลือบผิว PE",
      },
      {
        title: "ดีไซน์โมเดิร์น",
        description: "สีดำด้าน เข้ากับบ้านทุกสไตล์",
      },
      {
        title: "แข็งแรงทนทาน",
        description: "ลวดดัดโค้ง 2 ชั้น เสริมความแข็งแรง",
      },
      {
        title: "ติดตั้งง่าย",
        description: "พร้อมเสาเหล็กกล่องและฐานเสามาตรฐาน",
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

    category: "แผงรั้วสำเร็จรูป แผงรั้วอุตสาหกรรม แผงรั้วทางด่วน",

    badge: "แนะนำ",

    title: "แผงรั้วสำเร็จรูปชุบ PE สีเขียว",

    shortTitle: "แผงรั้ว PE สีเขียว",

    subtitle: "WELDED WIRE MESH FENCE (GREEN PE)",

    description:
      "แผงรั้วสำเร็จรูปชุบกัลวาไนซ์แล้วเคลือบผิว PE สีเขียว ป้องกันสนิมสองชั้น กลมกลืนกับพื้นที่สวนและงาน Landscape ลวดดัดโค้ง 2 ชั้นเพิ่มความแข็งแรง พร้อมเสาเหล็กกล่องและฐานเสามาตรฐาน เหมาะสำหรับบ้าน โครงการ สวน และพื้นที่กลางแจ้ง",

    shortDescription:
      "โดดเด่นเป็นเอกลักษณ์ ป้องกันสนิมสองชั้น",

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
        value: "แผงรั้วชุบ PE สีเขียว",
      },
      {
        label: "วัสดุ",
        value:
          "เหล็กกล้า ชุบสังกะสี (Hot Dip Galvanized) ป้องกันการกัดกร่อน ทนทานต่อการใช้งาน เคลือบผิว PE สีเขียว เพิ่มความสวยงามและป้องกันสนิมอีกชั้น",
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
        label: "เสาเหล็กกล่อง",
        value: "ขนาด 50 x 50 มม. หนา 2.3 มม.",
      },
      {
        label: "ฐานเสาเหล็ก",
        value: "ขนาด 150 x 150 มม. หนา 6 มม.",
      },
      {
        label: "สี",
        value: "เขียว",
      },
      {
        label: "การใช้งาน",
        value:
          "บ้านพักอาศัย, โรงงาน, โครงการ, สถานที่ราชการ",
      },
    ],

    features: [
      {
        title: "สีโดดเด่น",
        description: "เหมาะกับงาน Landscape",
      },
      {
        title: "ป้องกันสนิมสองชั้น",
        description: "ชุบกัลวาไนซ์ก่อนเคลือบผิว PE",
      },
      {
        title: "แข็งแรงทนทาน",
        description: "ลวดดัดโค้ง 2 ชั้น เสริมความแข็งแรง",
      },
      {
        title: "ติดตั้งง่าย",
        description: "พร้อมเสาเหล็กกล่องและฐานเสามาตรฐาน",
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

    category: "ตาข่าย",

    badge: "พรีเมียม",

    title: "ตาข่ายกรงไก่แสตนเลส",

    shortTitle: "ตาข่ายกรงไก่แสตนเลส",

    subtitle: "STAINLESS STEEL CHICKEN WIRE MESH",

    description:
      "ตาข่ายกรงไก่ผลิตจากลวดแสตนเลส ทนสนิม ทนความชื้นสูง เหมาะสำหรับงานที่ต้องการความทนทานเป็นพิเศษ",

    shortDescription:
      "ทนสนิม ทนความชื้น ใช้งานได้ยาวนาน",

    startingPrice: 65,

    currency: "THB",

    coverImage: StainlessMeshImg,

    gallery: [StainlessMeshImg],

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

    category: "ตาข่าย",

    badge: "คุ้มค่า",

    title: "ตาข่ายกรงไก่ชุบเย็น",

    shortTitle: "ตาข่ายกรงไก่ชุบเย็น",

    subtitle: "ELECTRO GALVANIZED CHICKEN WIRE MESH",

    description:
      "ตาข่ายกรงไก่ชุบเย็น (Electro Galvanized) ผิวเรียบ ป้องกันสนิมในระดับใช้งานทั่วไป ราคาคุ้มค่า",

    shortDescription:
      "ผิวเรียบ ป้องกันสนิม ราคาคุ้มค่า",

    startingPrice: 45,

    currency: "THB",

    coverImage: ColdGalvanizedMeshImg,

    gallery: [ColdGalvanizedMeshImg],

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
    id: "hot-dip-galvanized-chicken-wire-mesh",

    slug: "hot-dip-galvanized-chicken-wire-mesh",

    category: "ตาข่าย",

    badge: "แนะนำ",

    title: "ตาข่ายกรงไก่ชุบร้อน",

    shortTitle: "ตาข่ายกรงไก่ชุบร้อน",

    subtitle: "HOT-DIP GALVANIZED CHICKEN WIRE MESH",

    description:
      "ตาข่ายกรงไก่ชุบกัลวาไนซ์แบบจุ่มร้อน (Hot-Dip Galvanized) เคลือบสังกะสีหนากว่าแบบชุบเย็น ทนสนิมและทนต่อสภาพอากาศได้ดีเยี่ยม เหมาะกับงานภายนอกระยะยาว",

    shortDescription:
      "เคลือบสังกะสีหนา ทนสนิมสูงสุด",

    startingPrice: 60,

    currency: "THB",

    coverImage: HotGalvanizedMeshImg,

    gallery: [HotGalvanizedMeshImg],

    sizes: [],

    specs: [
      {
        label: "ประเภทสินค้า",
        value: "ตาข่ายกรงไก่ชุบร้อน",
      },
      {
        label: "วัสดุ",
        value: "ลวดเหล็กชุบกัลวาไนซ์แบบจุ่มร้อน (Hot-Dip Galvanized)",
      },
      {
        label: "ขนาดตาข่ายและความกว้าง/ยาวม้วน",
        value: "มีหลายขนาด ตามหน้างาน กรุณาสอบถามเจ้าหน้าที่",
      },
      {
        label: "การใช้งาน",
        value: "งานภายนอก งานเกษตร งานที่ต้องการความทนทานสูง",
      },
    ],

    features: [
      {
        title: "เคลือบสังกะสีหนา",
        description: "ทนสนิมได้ดีกว่าแบบชุบเย็น",
      },
      {
        title: "ทนทานระยะยาว",
        description: "เหมาะกับงานภายนอก",
      },
    ],

    seo: {
      title: "ตาข่ายกรงไก่ชุบร้อน | MACTECH",
      description:
        "จำหน่ายตาข่ายกรงไก่ชุบกัลวาไนซ์แบบจุ่มร้อน ทนสนิมสูงสุด คุณภาพดี",
      keywords: ["ตาข่ายกรงไก่", "ตาข่ายชุบร้อน", "Hot-Dip Galvanized", "MACTECH"],
    },
  },

  {
    id: "pvc-chicken-wire-mesh",

    slug: "pvc-chicken-wire-mesh",

    category: "ตาข่าย",

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

    coverImage: PvcMeshImg,

    gallery: [PvcMeshImg],

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

    category: "การป้องกัน กั้นพื้นที่",

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

    coverImage: BarbedWireImg,

    gallery: [BarbedWireImg],

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

  {
    id: "diamond-mesh-wire",

    slug: "diamond-mesh-wire",

    category: "การป้องกัน กั้นพื้นที่",

    badge: "สินค้าใหม่",

    title: "ลวดถักตาข่ายข้าวหลามตัด",

    shortTitle: "ตาข่ายข้าวหลามตัด",

    subtitle: "DIAMOND MESH WIRE (CHAIN-LINK)",

    description:
      "ลวดถักตาข่ายลายข้าวหลามตัด (Chain-Link) ผลิตจากลวดเหล็กคุณภาพดี ทอเป็นลายตาข่ายที่ยืดหยุ่นและแข็งแรง เหมาะสำหรับกั้นรั้วบ้าน โรงงาน สนามกีฬา และพื้นที่เกษตร",

    shortDescription:
      "ยืดหยุ่น แข็งแรง ใช้งานได้หลากหลาย",

    startingPrice: 45,

    currency: "THB",

    coverImage: DiamondMeshWireImg,

    gallery: [DiamondMeshWireImg],

    sizes: [],

    specs: [
      {
        label: "ประเภทสินค้า",
        value: "ลวดถักตาข่ายข้าวหลามตัด",
      },
      {
        label: "วัสดุ",
        value: "ลวดเหล็กชุบสังกะสี",
      },
      {
        label: "ลายตาข่าย",
        value: "ข้าวหลามตัด (Chain-Link)",
      },
      {
        label: "ขนาดตาข่ายและความกว้าง/ยาวม้วน",
        value: "มีหลายขนาด ตามหน้างาน กรุณาสอบถามเจ้าหน้าที่",
      },
      {
        label: "การใช้งาน",
        value: "รั้วบ้าน โรงงาน สนามกีฬา พื้นที่เกษตร",
      },
    ],

    features: [
      {
        title: "ยืดหยุ่น ติดตั้งง่าย",
        description: "ทอลายข้าวหลามตัดมาตรฐาน",
      },
      {
        title: "แข็งแรงทนทาน",
        description: "ใช้งานได้หลากหลายรูปแบบ",
      },
    ],

    seo: {
      title: "ลวดถักตาข่ายข้าวหลามตัด | MACTECH",
      description:
        "จำหน่ายลวดถักตาข่ายข้าวหลามตัด (Chain-Link) แข็งแรง ยืดหยุ่น ใช้งานได้หลากหลาย",
      keywords: ["ตาข่ายข้าวหลามตัด", "chain-link", "MACTECH"],
    },
  },

  {
    id: "knotted-mesh-wire",

    slug: "knotted-mesh-wire",

    category: "การป้องกัน กั้นพื้นที่",

    badge: "สินค้าใหม่",

    title: "ลวดถักตาข่ายถักปม",

    shortTitle: "ตาข่ายถักปม",

    subtitle: "KNOTTED MESH WIRE",

    description:
      "ลวดถักตาข่ายแบบถักปม ผลิตจากลวดเหล็กคุณภาพดี จุดเชื่อมถักปมแน่นหนา แข็งแรงทนทาน เหมาะสำหรับกั้นพื้นที่ฟาร์มปศุสัตว์ พื้นที่เกษตร และงานรั้วทั่วไป",

    shortDescription:
      "จุดถักปมแน่นหนา แข็งแรงทนทาน",

    startingPrice: 50,

    currency: "THB",

    coverImage: KnottedMeshWireImg,

    gallery: [KnottedMeshWireImg],

    sizes: [],

    specs: [
      {
        label: "ประเภทสินค้า",
        value: "ลวดถักตาข่ายถักปม",
      },
      {
        label: "วัสดุ",
        value: "ลวดเหล็กชุบสังกะสี",
      },
      {
        label: "ลักษณะจุดเชื่อม",
        value: "ถักปม (Knotted)",
      },
      {
        label: "ขนาดตาข่ายและความกว้าง/ยาวม้วน",
        value: "มีหลายขนาด ตามหน้างาน กรุณาสอบถามเจ้าหน้าที่",
      },
      {
        label: "การใช้งาน",
        value: "ฟาร์มปศุสัตว์ พื้นที่เกษตร งานรั้วทั่วไป",
      },
    ],

    features: [
      {
        title: "จุดถักปมแน่นหนา",
        description: "ไม่หลุดลุ่ยง่าย",
      },
      {
        title: "แข็งแรงทนทาน",
        description: "เหมาะกับงานกลางแจ้ง",
      },
    ],

    seo: {
      title: "ลวดถักตาข่ายถักปม | MACTECH",
      description:
        "จำหน่ายลวดถักตาข่ายถักปม แข็งแรง ทนทาน เหมาะกับงานฟาร์มและพื้นที่เกษตร",
      keywords: ["ตาข่ายถักปม", "knotted mesh", "MACTECH"],
    },
  },

  {
    id: "fence-wire-mesh",

    slug: "fence-wire-mesh",

    category: "การป้องกัน กั้นพื้นที่",

    badge: "คุ้มค่า",

    title: "ลวดตาข่ายรั้ว",

    shortTitle: "ลวดตาข่ายรั้ว",

    subtitle: "FENCE WIRE MESH",

    description:
      "ลวดตาข่ายรั้วอเนกประสงค์ ผลิตจากลวดเหล็กคุณภาพดี เหมาะสำหรับงานกั้นรั้วทั่วไป พื้นที่เกษตร และพื้นที่ก่อสร้าง ราคาคุ้มค่า",

    shortDescription:
      "อเนกประสงค์ ราคาคุ้มค่า",

    startingPrice: 40,

    currency: "THB",

    coverImage: FenceWireMeshImg,

    gallery: [FenceWireMeshImg],

    sizes: [],

    specs: [
      {
        label: "ประเภทสินค้า",
        value: "ลวดตาข่ายรั้ว",
      },
      {
        label: "วัสดุ",
        value: "ลวดเหล็กชุบสังกะสี",
      },
      {
        label: "ขนาดตาข่ายและความกว้าง/ยาวม้วน",
        value: "มีหลายขนาด ตามหน้างาน กรุณาสอบถามเจ้าหน้าที่",
      },
      {
        label: "การใช้งาน",
        value: "งานรั้วทั่วไป พื้นที่เกษตร พื้นที่ก่อสร้าง",
      },
    ],

    features: [
      {
        title: "อเนกประสงค์",
        description: "ใช้งานได้หลากหลาย",
      },
      {
        title: "ราคาคุ้มค่า",
        description: "เหมาะกับงานทั่วไป",
      },
    ],

    seo: {
      title: "ลวดตาข่ายรั้ว | MACTECH",
      description:
        "จำหน่ายลวดตาข่ายรั้วอเนกประสงค์ ราคาคุ้มค่า เหมาะกับงานทั่วไป",
      keywords: ["ลวดตาข่ายรั้ว", "ตาข่ายรั้ว", "MACTECH"],
    },
  },

  {
    id: "expanded-metal-mesh",

    slug: "expanded-metal-mesh",

    category: "ตะแกรงเหล็ก",

    badge: "สินค้าใหม่",

    title: "ตะแกรงเหล็กฉีก",

    shortTitle: "เหล็กฉีก",

    subtitle: "EXPANDED METAL MESH",

    description:
      "ตะแกรงเหล็กฉีก (Expanded Metal) ผลิตจากแผ่นเหล็กฉีกและยืดเป็นลายตาข่าย แข็งแรง ระบายอากาศและแสงได้ดี เหมาะสำหรับงานรั้ว บันได ทางเดิน และงานตกแต่ง",

    shortDescription:
      "แข็งแรง ระบายอากาศได้ดี",

    startingPrice: 350,

    currency: "THB",

    coverImage: ExpandedMetalMeshImg,

    gallery: [ExpandedMetalMeshImg],

    sizes: [],

    specs: [
      {
        label: "ประเภทสินค้า",
        value: "ตะแกรงเหล็กฉีก",
      },
      {
        label: "วัสดุ",
        value: "แผ่นเหล็กฉีก (Expanded Metal)",
      },
      {
        label: "ขนาดแผ่นและลายตาข่าย",
        value: "มีหลายขนาด ตามหน้างาน กรุณาสอบถามเจ้าหน้าที่",
      },
      {
        label: "การใช้งาน",
        value: "งานรั้ว บันได ทางเดิน งานตกแต่ง",
      },
    ],

    features: [
      {
        title: "ระบายอากาศ-แสงได้ดี",
        description: "ลายตาข่ายโปร่ง",
      },
      {
        title: "แข็งแรงทนทาน",
        description: "เหมาะกับงานโครงสร้าง",
      },
    ],

    seo: {
      title: "ตะแกรงเหล็กฉีก | MACTECH",
      description:
        "จำหน่ายตะแกรงเหล็กฉีก (Expanded Metal) แข็งแรง ระบายอากาศได้ดี เหมาะกับงานรั้วและตกแต่ง",
      keywords: ["ตะแกรงเหล็กฉีก", "expanded metal", "MACTECH"],
    },
  },

  {
    id: "worm-pattern-steel-grating",

    slug: "worm-pattern-steel-grating",

    category: "ตะแกรงเหล็ก",

    badge: "สินค้าใหม่",

    title: "ตะแกรงเหล็กตัวหนอน",

    shortTitle: "เหล็กตัวหนอน",

    subtitle: "WORM PATTERN STEEL GRATING",

    description:
      "ตะแกรงเหล็กลายตัวหนอน ผลิตจากเหล็กคุณภาพดี ลวดลายโดดเด่น แข็งแรง เหมาะสำหรับงานรั้ว งานตกแต่ง และงานก่อสร้างทั่วไป",

    shortDescription:
      "ลวดลายโดดเด่น แข็งแรง",

    startingPrice: 320,

    currency: "THB",

    coverImage: WormPatternGratingImg,

    gallery: [WormPatternGratingImg],

    sizes: [],

    specs: [
      {
        label: "ประเภทสินค้า",
        value: "ตะแกรงเหล็กตัวหนอน",
      },
      {
        label: "วัสดุ",
        value: "เหล็กคุณภาพดี",
      },
      {
        label: "ขนาดแผ่นและลวดลาย",
        value: "มีหลายขนาด ตามหน้างาน กรุณาสอบถามเจ้าหน้าที่",
      },
      {
        label: "การใช้งาน",
        value: "งานรั้ว งานตกแต่ง งานก่อสร้างทั่วไป",
      },
    ],

    features: [
      {
        title: "ลวดลายโดดเด่น",
        description: "เพิ่มความสวยงามให้งานรั้ว",
      },
      {
        title: "แข็งแรงทนทาน",
        description: "เหมาะกับงานก่อสร้าง",
      },
    ],

    seo: {
      title: "ตะแกรงเหล็กตัวหนอน | MACTECH",
      description:
        "จำหน่ายตะแกรงเหล็กลายตัวหนอน แข็งแรง ลวดลายสวยงาม เหมาะกับงานรั้วและตกแต่ง",
      keywords: ["ตะแกรงเหล็กตัวหนอน", "MACTECH"],
    },
  },

  {
    id: "arc-mesh-panel",

    slug: "arc-mesh-panel",

    category: "ตะแกรงเหล็ก",

    badge: "แนะนำ",

    title: "แผงตะแกรงอาร์ค",

    shortTitle: "ตะแกรงอาร์ค",

    subtitle: "ARC MESH PANEL",

    description:
      "แผงตะแกรงเหล็กทรงอาร์ค ดีไซน์โค้งสวยงามโดดเด่น ผลิตจากเหล็กคุณภาพดี แข็งแรง เหมาะสำหรับงานรั้วและงานตกแต่งที่ต้องการความสวยงามเป็นพิเศษ",

    shortDescription:
      "ดีไซน์โค้งสวยงาม โดดเด่น",

    startingPrice: 380,

    currency: "THB",

    coverImage: ArcMeshPanelImg,

    gallery: [ArcMeshPanelImg],

    sizes: [],

    specs: [
      {
        label: "ประเภทสินค้า",
        value: "แผงตะแกรงอาร์ค",
      },
      {
        label: "วัสดุ",
        value: "เหล็กคุณภาพดี",
      },
      {
        label: "ดีไซน์",
        value: "ทรงอาร์คโค้ง",
      },
      {
        label: "ขนาดแผง",
        value: "มีหลายขนาด ตามหน้างาน กรุณาสอบถามเจ้าหน้าที่",
      },
      {
        label: "การใช้งาน",
        value: "งานรั้วและงานตกแต่งที่ต้องการความสวยงามเป็นพิเศษ",
      },
    ],

    features: [
      {
        title: "ดีไซน์โค้งสวยงาม",
        description: "โดดเด่นแตกต่างจากรั้วทั่วไป",
      },
      {
        title: "แข็งแรงทนทาน",
        description: "ผลิตจากเหล็กคุณภาพดี",
      },
    ],

    seo: {
      title: "แผงตะแกรงอาร์ค | MACTECH",
      description:
        "จำหน่ายแผงตะแกรงอาร์ค ดีไซน์โค้งสวยงาม แข็งแรง เหมาะกับงานรั้วพิเศษ",
      keywords: ["แผงตะแกรงอาร์ค", "arc mesh panel", "MACTECH"],
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