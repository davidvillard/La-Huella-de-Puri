import Banner from "@/components/Banner/banner";
import Products from "@/components/Products/products";
import About from "@/components/About/about";
import Steps from "@/components/Steps/steps";
import Faq from "@/components/Faq/faq";
import Cta from "@/components/Cta/cta";

export default function Home() {
  return (
    <main className="flex flex-col gap-[80px] lg:gap-[180px] px-6 sm:px-10 md:px-16 py-10 md:py-12">
      <Banner />
      <Products />
      <About />
      <Steps />
      <Faq />
      <Cta />
    </main>
  );
}
