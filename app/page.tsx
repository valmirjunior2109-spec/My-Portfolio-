import Hero from "@/components/Hero";
import Cases from "@/components/Cases";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Cases />
      <Services />
      <HowItWorks />
      <CtaFinal />
      <Footer />
    </main>
  );
}
