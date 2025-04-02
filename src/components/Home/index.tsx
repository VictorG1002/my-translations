import { footerNavigation } from "@/utils/constants";

import { testimonials } from "@/utils/constants";
import { faqs } from "@/utils/constants";
import { features } from "@/utils/constants";
import Features from "../Features";

import Testimonials from "../Testimonials";
import FAQ from "../FAQ";
import { Footer } from "antd/es/layout/layout";
import Hero from "../Hero";

export default function LandingPage() {
  return (
    <div className='bg-white'>
      <main className='isolate'>
        <Hero />

        <Features features={features} />

        <Testimonials testimonials={testimonials} />
        
        <FAQ faqs={faqs} />
      </main>

      <Footer footerNavigation={footerNavigation} />
    </div>
  );
}
