// Demo content for the landing page. Brand names, numbers and quotes are
// placeholders — swap them for real ones before going live.

import type { StaticImageData } from "next/image";
import editPoster from "@/assets/posters/edit.png";
import productPoster from "@/assets/posters/product.png";
import studioPoster from "@/assets/posters/studio.png";
import tvcPoster from "@/assets/posters/tvc.png";

export function unsplash(id: string, width = 1600) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fm=jpg&fit=crop&w=${width}&q=80`;
}

export const navLinks = [
  { label: "Үйлчилгээ", href: "#services" },
  { label: "Бүтээл", href: "#work" },
  { label: "Үйл явц", href: "#process" },
  { label: "Багц", href: "#pricing" },
  { label: "Асуулт", href: "#faq" },
];

export const contact = {
  phone: "+976 7700 1234",
  phoneHref: "tel:+97677001234",
  email: "hello@room.mn",
  address: "Олимпийн гудамж 19, 7 давхар, Сүхбаатар дүүрэг, Улаанбаатар",
  hours: "Даваа–Баасан · 09:00–19:00",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "TikTok", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "Behance", href: "#" },
  ],
};

export const clients = [
  "Nomadic Coffee",
  "Altai Outdoor",
  "Steppe & Co.",
  "Orda Motors",
  "Saruul Skin",
  "Tenger Fitness",
  "UBX Tech",
  "Bloom Florist",
  "Khongor Kitchen",
  "Mazaalai Kids",
];

export type ServiceId = "video" | "photo" | "web" | "ads";

export const services: {
  id: ServiceId;
  index: string;
  title: string;
  description: string;
  deliverables: string[];
  price: string;
  priceNote: string;
  timeline: string;
  image: string;
}[] = [
  {
    id: "video",
    index: "01",
    title: "Видео продакшн & эдит",
    description:
      "Reels, TikTok-оос эхлээд сурталчилгааны видео, брэнд кино хүртэл. Скрипт, зураг авалт, эдит, color grading, дуу засварыг нэг баг хариуцна.",
    deliverables: [
      "Reels · TikTok · Shorts",
      "Сурталчилгааны видео (TVC)",
      "Брэнд & интервью видео",
      "Color grading",
      "Motion graphics",
      "Хадмал & дуу засвар",
    ],
    price: "350,000₮",
    priceNote: "-с эхэлнэ",
    timeline: "3–7 хоног",
    image: unsplash("1574717024653-61fd2cf4d44d", 1200),
  },
  {
    id: "photo",
    index: "02",
    title: "Мэргэжлийн зураг авалт",
    description:
      "Бүтээгдэхүүн, хоол, загвар, корпорэйт хөрөг, арга хэмжээ. Өөрийн 120м² студи, мэргэжлийн гэрэлтүүлэг, ретуштай зураг авалт.",
    deliverables: [
      "Бүтээгдэхүүний зураг",
      "Fashion & lookbook",
      "Хоол & ресторан",
      "Корпорэйт хөрөг",
      "Арга хэмжээ",
      "Ретуш & өнгө засвар",
    ],
    price: "250,000₮",
    priceNote: "-с эхэлнэ",
    timeline: "2–5 хоног",
    image: unsplash("1471341971476-ae15ff5dd4ea", 1200),
  },
  {
    id: "web",
    index: "03",
    title: "Landing page & вэбсайт",
    description:
      "Борлуулалтад чиглэсэн, хурдан ачаалдаг, гар утсанд төгс харагдах landing page, корпорэйт сайт, онлайн дэлгүүрийг дизайнаас хөгжүүлэлт хүртэл.",
    deliverables: [
      "UI/UX дизайн",
      "Landing page",
      "Корпорэйт вэбсайт",
      "Онлайн дэлгүүр",
      "SEO & хурдны оновчлол",
      "Pixel & Analytics холболт",
    ],
    price: "1,200,000₮",
    priceNote: "-с эхэлнэ",
    timeline: "7–21 хоног",
    image: unsplash("1559028012-481c04fa702d", 1200),
  },
  {
    id: "ads",
    index: "04",
    title: "Реклам ажиллуулах",
    description:
      "Facebook, Instagram, TikTok, Google, YouTube дээр зөв хүнд, зөв цагт хүрэх зорилтот реклам. Креатив тест, төсвийн оновчлол, ил тод тайлан.",
    deliverables: [
      "Meta (Facebook & Instagram)",
      "TikTok Ads",
      "Google & YouTube Ads",
      "Аудитори судалгаа",
      "A/B креатив тест",
      "Сарын тайлан & ROAS",
    ],
    price: "600,000₮",
    priceNote: "/сар-с эхэлнэ",
    timeline: "Тасралтгүй",
    image: unsplash("1551288049-bebda4e38f71", 1200),
  },
];

export const workFilters: { id: ServiceId | "all"; label: string }[] = [
  { id: "all", label: "Бүгд" },
  { id: "video", label: "Видео" },
  { id: "photo", label: "Зураг" },
  { id: "web", label: "Вэб" },
  { id: "ads", label: "Реклам" },
];

export const serviceLabels: Record<ServiceId, string> = {
  video: "Видео",
  photo: "Зураг",
  web: "Вэб",
  ads: "Реклам",
};

export type ProjectMedia =
  | { type: "video"; src: string; poster: StaticImageData }
  | { type: "image"; src: string };

export const projects: {
  client: string;
  title: string;
  year: string;
  tags: ServiceId[];
  result: string;
  media: ProjectMedia;
}[] = [
  {
    client: "Orda Motors",
    title: "“Шинэ зам” сурталчилгааны видео",
    year: "2026",
    tags: ["video", "ads"],
    result: "3.1M үзэлт",
    media: { type: "video", src: "/videos/tvc.mp4", poster: tvcPoster },
  },
  {
    client: "Steppe & Co.",
    title: "Өвлийн коллекцийн lookbook",
    year: "2026",
    tags: ["photo", "video"],
    result: "48 зураг · 6 видео",
    media: { type: "video", src: "/videos/studio.mp4", poster: studioPoster },
  },
  {
    client: "UBX Tech",
    title: "SaaS бүтээгдэхүүний landing page",
    year: "2026",
    tags: ["web"],
    result: "Хөрвүүлэлт 2.1% → 6.8%",
    media: { type: "image", src: unsplash("1467232004584-a241de8bcf5d") },
  },
  {
    client: "Saruul Skin",
    title: "Бүтээгдэхүүний контент & реклам",
    year: "2025",
    tags: ["photo", "ads"],
    result: "ROAS 5.2x",
    media: { type: "video", src: "/videos/product.mp4", poster: productPoster },
  },
  {
    client: "Nomadic Coffee",
    title: "Сошиал контентын цуврал зураг",
    year: "2025",
    tags: ["photo"],
    result: "+182% engagement",
    media: { type: "image", src: unsplash("1495474472287-4d71bcdd2085") },
  },
  {
    client: "Tenger Fitness",
    title: "30 хоногийн Reels кампанит ажил",
    year: "2025",
    tags: ["video", "ads"],
    result: "+64K дагагч",
    media: { type: "video", src: "/videos/edit.mp4", poster: editPoster },
  },
  {
    client: "Altai Outdoor",
    title: "Онлайн дэлгүүр & Meta Ads",
    year: "2025",
    tags: ["web", "ads"],
    result: "+240% онлайн борлуулалт",
    media: { type: "image", src: unsplash("1506905925346-21bda4d32df4") },
  },
  {
    client: "Bloom Florist",
    title: "Хаврын кампанит ажлын зураг авалт",
    year: "2025",
    tags: ["photo", "ads"],
    result: "ROAS 4.6x",
    media: { type: "image", src: unsplash("1621155346337-1d19476ba7d6") },
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Танилцах & стратеги",
    duration: "1–2 хоног",
    description:
      "Таны бизнес, хэрэглэгч, өрсөлдөгчдийг судалж, хэмжигдэхүйц зорилго (KPI) тодорхойлно.",
    points: ["Брэнд & зах зээлийн судалгаа", "Зорилтот аудитори", "KPI тодорхойлох"],
  },
  {
    step: "02",
    title: "Креатив төлөвлөлт",
    duration: "2–4 хоног",
    description:
      "Санаа, скрипт, moodboard, контент төлөвлөгөөг гаргаж, таны баталгаажуулалтаар урагшилна.",
    points: ["Санаа & скрипт", "Moodboard & storyboard", "Контент календарь"],
  },
  {
    step: "03",
    title: "Бүтээл",
    duration: "3–14 хоног",
    description:
      "Зураг авалт, видео эдит, дизайн, вэб хөгжүүлэлт. Хоёр удаагийн засвар үнэд багтсан.",
    points: ["Зураг & видео авалт", "Эдит & ретуш", "Дизайн & хөгжүүлэлт"],
  },
  {
    step: "04",
    title: "Нээлт & өсгөлт",
    duration: "Тасралтгүй",
    description:
      "Рекламаа ажиллуулж, үр дүнг өдөр бүр хянан, тоон дээр тулгуурлан сайжруулна.",
    points: ["Реклам ажиллуулах", "A/B тест & оновчлол", "Сарын тайлан"],
  },
];

export const stats = [
  { value: 120, decimals: 0, suffix: "+", label: "Хамтарсан брэнд" },
  { value: 850, decimals: 0, suffix: "+", label: "Бүтээсэн видео" },
  { value: 4.2, decimals: 1, suffix: "x", label: "Рекламын дундаж ROAS" },
  { value: 36, decimals: 0, suffix: "M+", label: "Контентын нийт үзэлт" },
];

export const reasons = [
  {
    title: "Нэг баг, нэг цонх",
    description:
      "Видео, зураг, вэб, реклам — бүгдийг нэг багаас. Олон агентлагтай зохицолдох шаардлагагүй.",
  },
  {
    title: "Тоонд суурилсан",
    description:
      "Гоё харагдах нь эхлэл. Бидний зорилго борлуулалт. Үр дүн бүрийг хэмжиж тайлагнана.",
  },
  {
    title: "Хурдан & ил тод",
    description:
      "Тодорхой хугацаа, тогтсон үнэ, долоо хоног бүрийн тайлан. Далд зардал байхгүй.",
  },
  {
    title: "Өөрийн студи",
    description:
      "120м² студи, кино камер, мэргэжлийн гэрэлтүүлэг — зураг авалтын бүх тоног төхөөрөмж бэлэн.",
  },
];

export const plans = [
  {
    name: "Старт",
    price: "1,490,000₮",
    period: "/сар",
    description: "Сошиал хуудсаа тогтмол, чанартай контенттой болгох жижиг бизнест.",
    features: [
      "8 Reels / TikTok видео",
      "20 бүтээгдэхүүний зураг",
      "Контент төлөвлөгөө",
      "Meta реклам удирдлага",
      "Сарын тайлан",
    ],
    featured: false,
  },
  {
    name: "Өсөлт",
    price: "2,990,000₮",
    period: "/сар",
    description: "Борлуулалтаа идэвхтэй өсгөж, олон сувгаар реклам ажиллуулах брэндэд.",
    features: [
      "16 Reels / TikTok видео",
      "1 сурталчилгааны видео (30–60 сек)",
      "40 мэргэжлийн зураг",
      "Meta + TikTok реклам удирдлага",
      "A/B креатив тест",
      "7 хоног бүрийн тайлан",
    ],
    featured: true,
  },
  {
    name: "Брэнд Про",
    price: "5,490,000₮",
    period: "/сар",
    description: "Маркетингийн бүрэн багийг гэрээгээр авахыг хүсэж буй том брэндэд.",
    features: [
      "30 богино видео",
      "2 сурталчилгааны видео",
      "Landing page (нэг удаа, багтсан)",
      "Бүх платформын реклам удирдлага",
      "Тусгай менежер & стратегич",
      "Шууд хянах dashboard",
    ],
    featured: false,
  },
];

export const testimonials = [
  {
    quote:
      "room-тэй ажилласнаас хойш 3 сарын дотор онлайн борлуулалт маань 2.4 дахин өссөн. Видео, реклам, вэбийг нэг багаас авдаг нь маш их цаг хэмнэдэг.",
    name: "Б. Энхжин",
    role: "Маркетингийн менежер",
    company: "Altai Outdoor",
  },
  {
    quote:
      "Сурталчилгааны видео маань эхний 2 долоо хоногт 3 сая гаруй үзэлт авсан. Скриптээс эцсийн эдит хүртэл бүх зүйл мэргэжлийн түвшинд.",
    name: "Т. Билгүүн",
    role: "Гүйцэтгэх захирал",
    company: "Orda Motors",
  },
  {
    quote:
      "Landing page-ээ шинэчилсний дараа хөрвүүлэлт бараг 3 дахин нэмэгдсэн. Хурдан, ойлгомжтой, гар утсан дээр гайхалтай харагддаг.",
    name: "Г. Номин",
    role: "Үүсгэн байгуулагч",
    company: "UBX Tech",
  },
  {
    quote:
      "Бүтээгдэхүүний зураг, видео маань брэндийн өнгө төрхийг бүрэн өөрчилсөн. Рекламын ROAS 5-аас дээш тогтвортой байгаа.",
    name: "С. Мөнхзул",
    role: "Брэнд менежер",
    company: "Saruul Skin",
  },
];

export const faqs = [
  {
    q: "Төсөл эхлүүлэхэд ямар мэдээлэл хэрэгтэй вэ?",
    a: "Таны бизнес, зорилго, төсөв, хугацааны талаар товч мэдээлэл хангалттай. Үнэгүй 30 минутын уулзалтаар үлдсэнийг нь тодруулж, 24 цагийн дотор үнийн санал илгээнэ.",
  },
  {
    q: "Нэг видео бэлэн болоход хэр хугацаа шаардлагатай вэ?",
    a: "Reels, TikTok видео 3–5 хоног, сурталчилгааны видео скриптээс эцсийн хувилбар хүртэл 7–14 хоног. Яаралтай төсөлд 48 цагийн экспресс үйлчилгээ бий.",
  },
  {
    q: "Засвар хийлгэх боломжтой юу?",
    a: "Тийм. Бүх үйлчилгээнд хоёр удаагийн засвар үнэд багтсан. Нэмэлт засварыг цагийн тарифаар тооцно.",
  },
  {
    q: "Рекламын төсөв үйлчилгээний төлбөрт багтсан уу?",
    a: "Үгүй. Meta, TikTok, Google зэрэг платформд төлөх рекламын төсөв тусдаа бөгөөд таны картаас шууд төлөгдөнө. Бид удирдлага, оновчлол, тайланг хариуцна.",
  },
  {
    q: "Landing page-ээ дараа нь өөрөө засварлаж болох уу?",
    a: "Болно. Домэйн, хостинг, SSL-ийг бүрэн тохируулж өгөхөөс гадна текст, зургаа өөрөө солих удирдлагын систем (CMS) холбож өгнө.",
  },
  {
    q: "Гэрээ хэр хугацаатай байдаг вэ?",
    a: "Сарын багцууд 3 сараас эхэлнэ. Нэг удаагийн төслүүдийг 50% урьдчилгаатайгаар гэрээгүй хийж болно.",
  },
  {
    q: "Улаанбаатараас гадуур зураг авалт хийдэг үү?",
    a: "Тийм. Орон нутаг болон гадаадад зураг авалт хийдэг бөгөөд унаа, байрны зардлыг тусад нь тооцно.",
  },
];

export const budgets = ["1 сая₮ хүртэл", "1–3 сая₮", "3–5 сая₮", "5 сая₮-с дээш"];
