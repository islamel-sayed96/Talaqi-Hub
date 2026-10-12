import { DEFAULT_WA_TEXT, waLink } from "@/data/site";

type Props = { text?: string; className?: string; children: React.ReactNode };

export default function WhatsAppButton({ text = DEFAULT_WA_TEXT, className = "btn btn--wa", children }: Props) {
  return (
    <a className={className} href={waLink(text)} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
