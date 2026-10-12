import { ICONS, type IconName } from "@/data/icons";

export default function Icon({ name, className = "icon", size }: { name: IconName; className?: string; size?: number }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      style={size ? { width: size, height: size } : undefined}
      dangerouslySetInnerHTML={{ __html: ICONS[name] }}
    />
  );
}
