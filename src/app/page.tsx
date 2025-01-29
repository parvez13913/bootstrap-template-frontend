import DocumentationLanding from "./ui/documentation-landing/documentation-landing";
import Footer from "./ui/footer/footer";
import Hero from "./ui/hero/hero";
import TypographyShowcase from "./ui/typography/typography-showcase";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="mt-24 sm:mt-32 md:mt-64 lg:mt-72 xl:mt-80">
        <TypographyShowcase />
      </div>
      <DocumentationLanding />
      <Footer />
    </main>
  );
}
