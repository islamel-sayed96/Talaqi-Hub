import type { Metadata } from "next";
import SectionHead from "@/components/SectionHead";
import ServicesExplorer from "@/components/ServicesExplorer";
import { Cta, PageHero, Process } from "@/components/Sections";

export const metadata: Metadata = {
  title: "خدماتنا",
  description: "كل خدماتنا: تطوير مواقع وتطبيقات، UI/UX، هوية بصرية، سوشيال ميديا، إعلانات ممولة، SEO، تصوير، مونتاج، موشن جرافيك و3D.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="خدماتنا"
        title={<>خدمات <span className="text-grad">متكاملة</span> تحت سقف واحد</>}
        text="تطوير، تصميم، تسويق، وإنتاج — اختار اللي محتاجه وإحنا نهتم بالباقي."
      />
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container"><ServicesExplorer /></div>
      </section>
      <section className="section section--alt">
        <div className="container">
          <SectionHead eyebrow="طريقة شغلنا" title={<>إزاي <span className="text-grad">بنشتغل</span></>} />
          <Process />
        </div>
      </section>
      <Cta title="مش لاقي الخدمة اللي محتاجها؟" text="كلمنا واحكيلنا عن مشروعك — أكيد عندنا الحل أو نقدر نعمله لك." />
    </>
  );
}
