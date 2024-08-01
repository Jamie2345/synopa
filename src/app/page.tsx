import { Navbar } from "@/components/Navbar";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import '../css/style.css';
import FAQs from "@/components/FAQs";

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth" data-theme="bumblebee">
      <Navbar />
      <section id="hero" className="w-full h-screen flex items-center justify-center p-4 snap-start">
        <div className="w-full flex items-center justify-between mx-40 mb-8">
          <div className="grid gap-6 max-w-[50%]">
            <h1 id="hometitle" className="grid gap-6">
              <span className="text-3xl text-primary-content">Learn faster. Learn better</span>
              <span className="text-6xl">Summarize YouTube Videos In Seconds</span>
              <span className="text-xl">Summarize videos, take notes, and much more. Synopa gives you all the tools needed to learn efficiently and effectively.</span>
            </h1>
            <div className="flex mt-3">
              <a href="/register" className="btn btn-secondary btn-lg mr-3 text-white">Start for Free</a>
              <a href="/login" className="btn btn-ghost btn-lg">Login</a>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="w-full h-full flex items-center justify-center p-4 pt-16 snap-start">
        <Features />
      </section>
      <section id="testimonials" className="w-full h-full flex items-center justify-center p-4 snap-start">
        <Testimonials />
      </section>
      <section id="pricing" className="w-full h-full flex items-center justify-center p-4 snap-start">
        <Pricing />
      </section>
      <section id="faqs" className="w-full h-full flex items-center justify-center p-4 snap-start">
        <FAQs />
      </section>
      <section id="cta" className="w-full h-full flex items-center justify-center p-4 snap-start">
        <CTA />
      </section>
    </main>
  );
}
