import { ICONS, type IconName } from "@/data/icons";

/** `dir` marks direction-sensitive icons (arrows) so they flip in English. */
export default function Icon({ name, className = "", size, dir = false }: { name: IconName; className?: string; size?: number; dir?: boolean }) {
  return (
    <svg
      className={`icon${dir ? " icon--dir" : ""}${className ? " " + className : ""}`}
      viewBox="0 0 24 24"
      aria-hidden="true"
      style={size ? { width: size, height: size } : undefined}
      dangerouslySetInnerHTML={{ __html: ICONS[name] }}
    />
  );
}
