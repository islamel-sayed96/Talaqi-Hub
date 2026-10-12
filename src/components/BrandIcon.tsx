import { BRAND_ICONS, type BrandName } from "@/data/brandIcons";

/** A brand logo in its official color (or the current text color for black logos). */
export default function BrandIcon({ name, size, mono = false }: { name: BrandName; size?: number; mono?: boolean }) {
  const icon = BRAND_ICONS[name];
  return (
    <svg
      className="brand-icon"
      viewBox="0 0 24 24"
      role="img"
      aria-label={icon.title}
      style={size ? { width: size, height: size } : undefined}
      fill={mono || !icon.color ? "currentColor" : icon.color}
    >
      <path d={icon.path} />
    </svg>
  );
}
