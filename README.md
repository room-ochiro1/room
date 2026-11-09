# room

Креатив маркетингийн агентлагийн landing page — видео эдит, зураг авалт, реклам ажиллуулах.

Next.js 16 · React 19 · Tailwind CSS 4

## Ажиллуулах

```bash
npm install
npm run dev
```

http://localhost:3000 хаягаар нээнэ. Англи хувилбар нь http://localhost:3000/en.

## Агуулга засах

- Текст: `src/dictionaries/mn.ts` (үндсэн, монгол) ба `src/dictionaries/en.ts` (англи). Хоёр файлын бүтэц адилхан байх ёстой — англи орчуулга дутвал TypeScript алдаа заана.
- Зураг, видео холбоос, тоо, брэндийн нэр: `src/lib/data.ts`
- Видео: `public/videos/` (poster зураг: `src/assets/posters/`)
- Өнгө, фонт: `src/app/globals.css`
