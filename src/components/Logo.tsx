import { useId } from "react";

/**
 * Talaqi Hub mark: a "T" whose crossbar is two paths meeting at a central node (the hub).
 * `plain` draws white strokes only (for use on gradient backgrounds).
 */
export function LogoMark({ className = "logo__mark", plain = false }: { className?: string; plain?: boolean }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      {!plain && (
        <>
          <defs>
            <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#5048E5" />
              <stop offset="1" stopColor="#12B5CB" />
            </linearGradient>
          </defs>
          <rect width="64" height="64" rx="18" fill={`url(#${id})`} />
        </>
      )}
      <path d="M13 24h10.5M40.5 24H51M32 32.5V51" stroke="#fff" strokeWidth="6" strokeLinecap="round" fill="none" />
      <circle cx="32" cy="24" r="5.5" fill="#fff" />
    </svg>
  );
}

export default function Logo() {
  return (
    <span className="logo">
      <LogoMark />
      <span>Talaqi <span className="logo__hub">Hub</span></span>
    </span>
  );
}
