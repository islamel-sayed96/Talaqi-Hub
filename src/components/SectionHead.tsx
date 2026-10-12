type Props = { eyebrow: string; title: React.ReactNode; text?: string };

export default function SectionHead({ eyebrow, title, text }: Props) {
  return (
    <div className="section-head reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
