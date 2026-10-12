import type { Metadata } from "next";
import Icon from "@/components/Icon";
import SectionHead from "@/components/SectionHead";
import { Cta, PageHero, Stats, Testimonials } from "@/components/Sections";
import { SITE } from "@/data/site";
import type { IconName } from "@/data/icons";

export const metadata: Metadata = {
  title: "من نحن",
  description: "تعرف على فريقنا ورؤيتنا: وكالة تسويق رقمي وإنتاج إبداعي بتساعد العلامات التجارية تكبر.",
};

const VALUES: { icon: IconName; title: string; text: string }[] = [
  { icon: "target", title: "نتايج قبل أي حاجة", text: "بنقيس كل حاجة بالأرقام." },
  { icon: "clock", title: "التزام بالمواعيد", text: "جدول واضح من أول يوم." },
  { icon: "users", title: "شفافية كاملة", text: "أنت متابع معانا كل خطوة." },
  { icon: "sparkles", title: "إبداع بجد", text: "مش قوالب جاهزة مكررة." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="من نحن"
        title={<>إحنا <span className="text-grad">شركاء نجاحك</span></>}
        text="فريق من المطورين والمصممين والمسوقين وصناع المحتوى، هدفنا واحد: نتايج حقيقية لعلامتك."
      />
      <section className="section" style={{ paddingTop: 30 }}>
        <div className="container split">
          <div className="reveal">
            <span className="eyebrow">قصتنا</span>
            <h2>وكالة واحدة بدل <span className="text-grad">خمس شركات</span></h2>
            <p className="muted">
              بدأنا لأننا لاحظنا إن أصحاب المشاريع بيضيعوا وقت وفلوس كتير وهم بيتنقلوا بين مبرمج ومصمم ومصور ومسوق — وكل واحد شغال في اتجاه.
            </p>
            <p className="muted">
              عشان كده جمعنا كل التخصصات في فريق واحد بيفهم بعضه: الموقع متصمم عشان يبيع، والفيديو متصور عشان الإعلان، والإعلان متوجه للجمهور الصح.
            </p>
            <div className="values">
              {VALUES.map((v) => (
                <div key={v.title} className="value">
                  <Icon name={v.icon} />
                  <div><h4>{v.title}</h4><p>{v.text}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="split__art reveal"><span>{SITE.nameEn}</span></div>
        </div>
      </section>
      <section className="section section--alt" style={{ padding: "80px 0" }}>
        <div className="container"><Stats /></div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="آراء العملاء" title={<>ثقة <span className="text-grad">عملاءنا</span></>} />
          <Testimonials />
        </div>
      </section>
      <Cta title="يلا نشتغل سوا" text="احكيلنا عن مشروعك وخلّي الباقي علينا." />
    </>
  );
}
