/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `npm run build` produces a plain HTML/CSS/JS site in `out/`
  // that can be uploaded to any host (Hostinger public_html, Netlify, Vercel, GitHub Pages...).
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // Lets src/app/global-not-found.tsx render 404.html with its own <html> (Arabic + English use separate root layouts).
  experimental: { globalNotFound: true },
};

export default nextConfig;
