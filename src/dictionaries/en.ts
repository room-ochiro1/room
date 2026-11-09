import type { Dictionary } from "./mn";

export const en: Dictionary = {
  meta: {
    title: "room — Creative marketing agency",
    description:
      "Video production & editing, professional photography, Facebook · TikTok · Google ads — all from one team.",
  },

  nav: {
    services: "Services",
    work: "Work",
    process: "Process",
    faq: "FAQ",
  },

  header: {
    home: "room — home",
    mainNav: "Main menu",
    mobileNav: "Mobile menu",
    menu: "Menu",
    close: "Close",
    cta: "Start a project",
    clock: "UB",
    language: "Language",
  },

  hero: {
    status: "Booking open for December",
    headline: ["From idea", "to results."],
    mark: "results",
    intro: "Video, photography and ads — all from one team.",
    primary: "Start a project",
    secondary: "See our work",
    videoAlt: "room studio showreel — cinema camera and edit suite",
  },

  clients: {
    label: "Brands we’ve worked with",
  },

  services: {
    label: "Services",
    title: "Everything a brand needs, from one team.",
    items: {
      video: {
        title: "Video production & editing",
        timeline: "3–7 days",
        deliverables: [
          "Reels · TikTok · Shorts",
          "TV commercials",
          "Brand & interview films",
          "Color grading",
          "Motion graphics",
          "Subtitles & sound",
        ],
      },
      photo: {
        title: "Professional photography",
        timeline: "2–5 days",
        deliverables: [
          "Product photography",
          "Fashion & lookbook",
          "Food & restaurants",
          "Corporate portraits",
          "Events",
          "Retouching & color",
        ],
      },
      ads: {
        title: "Paid advertising",
        timeline: "Ongoing",
        deliverables: [
          "Meta (Facebook & Instagram)",
          "TikTok Ads",
          "Google & YouTube Ads",
          "Audience research",
          "A/B creative testing",
          "Monthly reports & ROAS",
        ],
      },
    },
  },

  work: {
    label: "Work",
    title: "Work that speaks in results.",
    filterLabel: "Filter by type",
    count: "{n} projects",
    filters: {
      all: "All",
      video: "Video",
      photo: "Photo",
      ads: "Ads",
    },
    projects: {
      orda: { title: "“New Road” TV commercial", result: "3.1M views" },
      steppe: { title: "Winter collection lookbook", result: "48 photos · 6 videos" },
      saruul: { title: "Product content & ads", result: "ROAS 5.2x" },
      nomadic: { title: "Social content photo series", result: "+182% engagement" },
      tenger: { title: "30-day Reels campaign", result: "+64K followers" },
      bloom: { title: "Spring campaign shoot", result: "ROAS 4.6x" },
    },
  },

  process: {
    label: "Process",
    title: "Four clear steps.",
    stepColumn: "Step",
    start: "Start",
    day: "Day {n}",
    legend: {
      shortest: "Shortest",
      longest: "Longest",
      ongoing: "Ongoing",
    },
    steps: {
      discover: {
        title: "Discovery & strategy",
        duration: "1–2 days",
        description:
          "We study your business, customers and competitors, and set measurable goals (KPIs).",
      },
      plan: {
        title: "Creative planning",
        duration: "2–4 days",
        description:
          "Ideas, scripts, moodboards and a content plan — we move on once you approve.",
      },
      produce: {
        title: "Production",
        duration: "3–14 days",
        description: "Shooting, editing and design. Two rounds of revisions included.",
      },
      grow: {
        title: "Launch & growth",
        duration: "Ongoing",
        description:
          "We run your ads, track results daily and keep improving on the numbers.",
      },
    },
  },

  why: {
    label: "Why room",
    title: "We make more than pretty content.",
    stats: {
      brands: "Brands worked with",
      videos: "Videos produced",
      roas: "Average ad ROAS",
      views: "Total content views",
    },
    shots: {
      studio: "Lit studio",
      commercial: "Commercial shoot",
      product: "Product photography",
      sound: "Sound & edit suite",
      location: "Location shoot",
    },
    pick: "this one!",
  },

  testimonials: {
    label: "Testimonials",
    title: "What our clients say.",
    items: [
      {
        quote:
          "Within three months of working with room, our online sales grew 2.4×. Getting video, photos and ads from one team saves us a lot of time.",
        name: "B. Enkhjin",
        role: "Marketing manager",
        company: "Altai Outdoor",
      },
      {
        quote:
          "Our commercial passed 3 million views in its first two weeks. Everything from the script to the final cut was done properly.",
        name: "T. Bilguun",
        role: "CEO",
        company: "Orda Motors",
      },
    ],
  },

  faq: {
    label: "FAQ",
    title: "Got questions?",
    items: [
      {
        q: "What do you need from me to start a project?",
        a: "A short overview of your business, goals and timeline is enough. We’ll cover the rest in a free 30-minute meeting.",
      },
      {
        q: "How long does a video take?",
        a: "Reels and TikTok videos take 3–5 days; a commercial takes 7–14 days from script to final cut. A 48-hour express option is available for urgent projects.",
      },
      {
        q: "Can I ask for revisions?",
        a: "Yes. Every service includes two rounds of revisions.",
      },
      {
        q: "Do you shoot outside Ulaanbaatar?",
        a: "Yes. We shoot across Mongolia and abroad.",
      },
    ],
  },

  contact: {
    label: "Contact",
    title: "Let’s start your next project.",
    email: "Email",
    phone: "Phone",
    studio: "Studio",
    address: "19 Olympic Street, 7th floor, Sukhbaatar District, Ulaanbaatar",
    hours: "Mon–Fri · 09:00–19:00",
  },

  form: {
    title: "Project brief",
    name: "Name *",
    namePlaceholder: "Your name",
    phone: "Phone *",
    email: "Email",
    services: "Services you need",
    message: "About the project",
    messagePlaceholder: "A few words about your brand, goals and timeline",
    submit: "Send request",
    sending: "Sending…",
    stamp: "Received",
    thanks: "Thank you",
    sentBody:
      "We’ve got your request. Our manager will get back to you within 24 hours with a free consultation.",
    again: "Send another",
  },

  footer: {
    tagline: ["All in one ", "room."],
    pages: "Pages",
    social: "Social",
    city: "Ulaanbaatar",
    top: "Back to top ↑",
  },
};
