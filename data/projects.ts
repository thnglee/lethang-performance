export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  icon: string; // Icon for project cards/tiles
  image: string; // Main hero image for detail page
  video?: string;
  description: string;
  techStack: string[];
  externalLink?: string;
  githubLink?: string;
  gallery?: string[]; // Additional images for detail page
}

export const projects: Project[] = [
  {
    id: "01",
    slug: "sculptique",
    title: "Sculptique",
    category: "DROPSHIPPING STOREFRONT",
    icon: "/sculptique/scul.png",
    image: "/sculptique/scultique.png",
    description:
      "A high-converting Shopify storefront built for the supplements dropshipping niche. Integrated Meta Pixel for accurate conversion tracking, set up Judge.me for social proof, and added Kaching Bundle to drive AOV. Optimized mobile UX to reduce drop-off and support paid traffic landing quality. The goal: a store built to receive Facebook Ads traffic and convert.",
    techStack: [
      "Meta Pixel",
      "Facebook Ads",
      "Shopify",
      "Judge.me",
      "Kaching Bundle",
      "AOV Optimization",
      "Conversion Rate Optimization",
    ],
    externalLink: "https://sculptique-html.vercel.app/",
    githubLink: "https://github.com/thnglee/Sculptique-Shopify",
  },
  {
    id: "02",
    slug: "fiber",
    title: "fiber",
    category: "AI PRODUCTIVITY TOOL",
    icon: "/fiber/fiber-icon.png", // Icon for project card
    image: "/fiber/fiber.png", // Main hero image
    video: "/fiber/fiber.mp4",
    description:
      "An AI-powered browser extension for Vietnamese news summarization and real-time fact-checking. Built to demonstrate applied AI and data synthesis capabilities — the same analytical mindset used to process campaign performance data, identify patterns, and extract actionable insights from large volumes of information.",
    techStack: [
      "Plasmo",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Next.js",
      "OpenAI API",
      "Tavily API",
    ],
    externalLink: "https://fiber.vercel.app",
    githubLink: "https://github.com/thnglee/fiber",
    gallery: [
      "/fiber/fiber1.png",
      "/fiber/fiber2.png",
      "/fiber/fiber3.png",
      "/fiber/fiber4.png",
    ],
  },
  {
    id: "03",
    slug: "nextcapy",
    title: "nextcapy",
    category: "D2C PRODUCT — NEXTSTART",
    icon: "/capy/capy-icon.png", // Icon for project card
    image: "/capy/capy1.jpg", // Main hero image
    description: `A D2C product built during the NextStart Incubator program — an AI companion device for children. My role extended beyond technical work: I conducted market research, defined target audience segments, and helped shape the go-to-market strategy. This project sharpened my ability to connect product positioning with customer acquisition thinking.`,
    techStack: ["Market Research", "Audience Segmentation", "Go-to-Market", "Vue.js", "Docker"],
    externalLink: "https://nextcapy.studio",
    githubLink: "https://github.com/NextCapy/capy-client",
    gallery: ["/capy/capy2.jpg"],
  },
  {
    id: "04",
    slug: "taichinhxanh",
    title: "taichinhxanh.info",
    category: "GROWTH LANDING PAGE",
    icon: "/tcx/tcx-icon.png", // Icon for project card
    image: "/tcx/tcx.jpg", // Main hero image
    video: "/tcx/tcx.mp4",
    description:
      "A conversion-focused landing page for TCX JSC., built under tight deadline to support a funding round. Designed with a clear CTA hierarchy and trust-building elements — applying the same principles used in high-performing ad landing pages to minimize bounce and drive action.",
    techStack: ["Conversion Optimization", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    externalLink: "https://taichinhxanh.info",
    githubLink: "https://github.com/thnglee/tcx",
  },
];
