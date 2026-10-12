/*
 * English content — keep it in sync with ar.ts (same items, same order).
 */
import type { Content } from "./types";

export const en: Content = {
  categories: [
    { id: "all", label: "All" },
    { id: "tech", label: "Development" },
    { id: "design", label: "Design & Brand" },
    { id: "marketing", label: "Marketing & Growth" },
    { id: "production", label: "Production" },
  ],

  services: [
    // ---------- Development ----------
    { id: "web", cat: "tech", icon: "code", title: "Web Design & Development", short: "Fast, responsive, SEO-ready websites.",
      features: ["Corporate sites & landing pages", "Easy content management", "Fast and mobile-friendly", "Google Analytics & Pixel setup"] },
    { id: "mobile", cat: "tech", icon: "mobile", title: "Mobile Apps", short: "iOS & Android apps with a smooth experience.",
      features: ["Flutter / React Native", "App Store & Google Play publishing", "Push notifications & integrations", "Post-launch support and updates"] },
    { id: "ecommerce", cat: "tech", icon: "cart", title: "E-commerce Stores", short: "A store ready to sell from day one.",
      features: ["Shopify / WooCommerce / Salla / Zid", "Payment & shipping integration", "Product pages that convert", "Team training"] },
    { id: "hosting", cat: "tech", icon: "server", title: "Hosting & Support", short: "Domains, hosting, business email and maintenance.",
      features: ["Domain & hosting setup", "Branded business email", "Backups & security", "Monthly maintenance plans"] },
    { id: "ai", cat: "tech", icon: "cpu", title: "AI & Automation", short: "Chatbots and automation that save you time.",
      features: ["WhatsApp & website chatbots", "Automated customer replies", "Tool integrations (CRM, sheets, email)", "AI-assisted content"] },

    // ---------- Design & Brand ----------
    { id: "uiux", cat: "design", icon: "layout", title: "UI / UX Design", short: "Beautiful interfaces, thoughtful experiences.",
      features: ["User research & flows", "Figma wireframes & prototypes", "Complete design systems", "Usability testing"] },
    { id: "branding", cat: "design", icon: "pen", title: "Branding & Visual Identity", short: "A logo and identity people remember.",
      features: ["Logo design", "Colors, typography & brand guide", "Naming & slogan", "Stationery and brand applications"] },
    { id: "graphic", cat: "design", icon: "sparkles", title: "Graphic Design", short: "Social and ad designs that grab attention.",
      features: ["Posts & stories", "Ad creatives", "Infographics", "Presentations"] },
    { id: "print", cat: "design", icon: "printer", title: "Print & Packaging", short: "From business cards to product packaging.",
      features: ["Brochures & flyers", "Packaging design", "Roll-ups & signage", "Print-ready files"] },

    // ---------- Marketing & Growth ----------
    { id: "social", cat: "marketing", icon: "megaphone", title: "Social Media Management", short: "Content plans, publishing and daily engagement.",
      features: ["Monthly content plan", "Design, copy & publishing", "Comment & inbox management", "Monthly performance reports"] },
    { id: "ads", cat: "marketing", icon: "target", title: "Paid Advertising", short: "Data-driven campaigns with the best return.",
      features: ["Meta (Facebook & Instagram)", "Google & YouTube", "TikTok & Snapchat", "Conversion tracking & A/B testing"] },
    { id: "seo", cat: "marketing", icon: "search", title: "SEO", short: "Be found the moment customers search.",
      features: ["Keyword research", "Technical & on-page SEO", "Link building", "Google Business Profile"] },
    { id: "content", cat: "marketing", icon: "type", title: "Content Writing", short: "Words that sell — in Arabic and English.",
      features: ["Ad copywriting", "SEO articles & blogs", "Website copy", "Video & reel scripts"] },
    { id: "influencer", cat: "marketing", icon: "users", title: "Influencer Marketing", short: "The right creators for your audience.",
      features: ["Influencer selection", "Campaign & contract management", "UGC content", "Results tracking"] },
    { id: "email", cat: "marketing", icon: "mail", title: "Email & WhatsApp Marketing", short: "Stay in touch and drive repeat sales.",
      features: ["Email campaigns & newsletters", "WhatsApp broadcasts", "Customer journey automation", "Audience segmentation"] },
    { id: "strategy", cat: "marketing", icon: "compass", title: "Marketing Strategy & Consulting", short: "A clear plan before you spend a cent.",
      features: ["Market & competitor research", "Target audience definition", "Annual marketing plan", "Performance analysis & KPIs"] },

    // ---------- Production ----------
    { id: "photo", cat: "production", icon: "camera", title: "Photography", short: "Professional product and event photography.",
      features: ["Product photography", "Food & restaurant shoots", "Events & portraits", "Editing & retouching"] },
    { id: "videography", cat: "production", icon: "video", title: "Video Production", short: "Ads and films that tell your brand's story.",
      features: ["TV & social ads", "Corporate films", "Reels & TikToks", "Drone footage"] },
    { id: "editing", cat: "production", icon: "film", title: "Editing & Motion Graphics", short: "Sharp editing and eye-catching animation.",
      features: ["Reels & long-form editing", "2D motion graphics", "Color grading", "Sound design & subtitles"] },
    { id: "3d", cat: "production", icon: "cube", title: "3D Design", short: "3D models and animation for products.",
      features: ["3D product modeling", "3D animation", "Architectural & interior visuals", "CGI for ads"] },
  ],

  process: [
    { n: "01", title: "We listen", text: "A call or meeting to understand your goals, audience and budget." },
    { n: "02", title: "We plan", text: "You get a clear plan, a quote and a timeline." },
    { n: "03", title: "We build", text: "Our team delivers while you follow every step." },
    { n: "04", title: "We launch & improve", text: "We launch, measure the results and keep improving." },
  ],

  stats: [
    { value: 150, suffix: "+", label: "Projects delivered" },
    { value: 80, suffix: "+", label: "Happy clients" },
    { value: 20, suffix: "", label: "Services" },
    { value: 5, suffix: "+", label: "Years of experience" },
  ],

  packages: [
    {
      id: "social", icon: "megaphone", label: "Social Media",
      packages: [
        { name: "Starter", price: 7500, period: "/ month", desc: "For brands just getting started.", features: ["2 platforms (Facebook + Instagram)", "12 posts per month", "8 stories", "Copywriting & design", "Comment replies", "Monthly report"] },
        { name: "Growth", price: 14000, period: "/ month", popular: true, desc: "The right fit for most businesses.", features: ["3 platforms", "20 posts + 4 reels per month", "16 stories", "Paid ads management", "Inbox & comment management", "Performance report & plan"] },
        { name: "Pro", price: 24000, period: "/ month", desc: "Strong presence, fast growth.", features: ["4 platforms (+ TikTok)", "30 posts + 8 reels", "Monthly photo shoot", "Meta & TikTok ads", "Dedicated account manager", "Monthly strategy meeting"] },
      ],
    },
    {
      id: "web", icon: "code", label: "Websites & Stores",
      packages: [
        { name: "Landing Page", price: 9000, desc: "One page that sells a product or service.", features: ["Custom design", "Mobile-friendly", "WhatsApp button & contact form", "Pixel & Analytics setup", "Delivered in 7 days"] },
        { name: "Business Website", price: 22000, popular: true, desc: "A complete website for your company.", features: ["Up to 8 pages", "Arabic & English", "Content dashboard", "Basic SEO", "Domain & hosting for a year", "3 months of support"] },
        { name: "Online Store", price: 38000, desc: "A store ready to sell online.", features: ["Unlimited products", "Payment & shipping gateways", "Product page design", "Coupons & offers", "Store management training", "6 months of support"] },
      ],
    },
    {
      id: "branding", icon: "pen", label: "Branding",
      packages: [
        { name: "Logo", price: 5000, desc: "A professional logo for your brand.", features: ["3 initial concepts", "3 revision rounds", "All formats (SVG, PNG, PDF)", "Color and black & white versions"] },
        { name: "Full Identity", price: 12000, popular: true, desc: "Everything your brand needs to look the part.", features: ["Logo", "Colors & typography", "Short brand guide", "Business cards & stationery", "Social media templates"] },
        { name: "Brand 360", price: 25000, desc: "Building a brand from scratch.", features: ["Naming & slogan", "Brand strategy", "Full visual identity", "Packaging design", "Detailed brand book"] },
      ],
    },
    {
      id: "production", icon: "camera", label: "Photo & Video",
      packages: [
        { name: "Photo Session", price: 4000, desc: "Product or venue photography.", features: ["Up to 20 products", "25 edited photos", "Professional lighting & backdrops", "Delivered in 5 days"] },
        { name: "Reels Pack", price: 6500, popular: true, desc: "Video content for social media.", features: ["4 reels", "Concept & script for each", "Shooting & editing", "Music & subtitles"] },
        { name: "Ad Film", price: 15000, desc: "A professional ad for your brand.", features: ["Concept & script", "Full shoot day", "Editing & color grading", "Motion graphics", "Cuts for every platform"] },
      ],
    },
  ],

  team: [
    { name: "Founder name", role: "Founder & CEO", bio: "Leads strategy and oversees every project end to end." },
    { name: "Team member name", role: "Creative Director", bio: "Owns ideas, visual identity and design quality." },
    { name: "Team member name", role: "Full-Stack Developer", bio: "Builds websites, apps and online stores." },
    { name: "Team member name", role: "UI/UX Designer", bio: "Designs easy experiences and beautiful interfaces." },
    { name: "Team member name", role: "Marketing & Ads Manager", bio: "Plans campaigns and runs paid advertising." },
    { name: "Team member name", role: "Videographer & Editor", bio: "Shoots and edits videos and reels." },
  ],

  work: [
    { title: "Fashion Store", cat: "tech", tags: ["E-commerce", "Shopify"], year: "2025", hue: 265 },
    { title: "Burger Restaurant", cat: "production", tags: ["Photography", "Social media"], year: "2025", hue: 20 },
    { title: "Delivery App", cat: "design", tags: ["UI/UX", "Mobile app"], year: "2024", hue: 190 },
    { title: "Dental Clinic", cat: "marketing", tags: ["Website", "SEO"], year: "2024", hue: 160 },
    { title: "Coffee Brand", cat: "design", tags: ["Identity", "Packaging"], year: "2025", hue: 35 },
    { title: "Real Estate Company", cat: "production", tags: ["Ad film", "Paid ads"], year: "2025", hue: 330 },
  ],

  testimonials: [
    { name: "Ahmed Samir", role: "Online store owner", text: "Sales went up noticeably in the first month after they took over our ads. A respectful team that keeps its deadlines." },
    { name: "Sara Mahmoud", role: "Marketing manager", text: "The new identity completely changed how our brand looks. The team really listens." },
    { name: "Mohamed Ali", role: "Startup founder", text: "They built our app, website and ad film — everything in one place, which saved us a lot of time." },
  ],

  faq: [
    { q: "How much does it cost?", a: "It depends on the project size. Check our packages for starting prices, or message us on WhatsApp or email and we'll send a quote within 24 hours." },
    { q: "How long does a project take?", a: "A landing page takes 5–7 days, a full website 2–4 weeks, and apps depend on scope. We agree on a clear timeline before we start." },
    { q: "Can I combine several services?", a: "Absolutely — and it's the better option. We offer bundles (website + social + ads) at a better price." },
    { q: "Do you work with clients outside Egypt?", a: "Yes, we work online with clients in Egypt, the Gulf and anywhere else." },
    { q: "Is there support after delivery?", a: "Every project comes with a free support period, followed by optional monthly maintenance plans." },
  ],
};
