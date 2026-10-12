import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: "70vh" }}>
      <div className="container">
        <h1 className="text-grad" style={{ fontSize: "6rem" }}>404</h1>
        <p style={{ marginBottom: 30 }}>الصفحة دي مش موجودة.</p>
        <Link href="/" className="btn btn--primary">ارجع للرئيسية</Link>
      </div>
    </section>
  );
}
