import type { IconName } from "../icons";

export type CategoryId = "tech" | "design" | "marketing" | "production";

export type Service = { id: string; cat: CategoryId; icon: IconName; title: string; short: string; features: string[] };

export type Package = { name: string; price: number; period?: string; desc: string; features: string[]; popular?: boolean };
export type PackageGroup = { id: string; icon: IconName; label: string; packages: Package[] };

/** `photo`: put the image in public/team/ and use "/team/name.jpg". */
export type TeamMember = { name: string; role: string; bio: string; photo?: string };

/**
 * A portfolio project. Put images in public/work/ and reference them as "/work/file.jpg".
 * Without an image, a gradient using `hue` is shown instead.
 */
export type Project = {
  title: string;
  client?: string;
  cat: CategoryId;
  tags: string[];
  year?: string;
  image?: string;
  hue: number;
  link?: string;
};

export type Content = {
  categories: { id: "all" | CategoryId; label: string }[];
  services: Service[];
  process: { n: string; title: string; text: string }[];
  stats: { value: number; suffix: string; label: string }[];
  packages: PackageGroup[];
  team: TeamMember[];
  work: Project[];
  testimonials: { name: string; role: string; text: string }[];
  faq: { q: string; a: string }[];
};
