import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import ProblemSolution from '@/components/sections/ProblemSolution';
import Features from '@/components/sections/Features';
import BuiltForAfrica from '@/components/sections/BuiltForAfrica';
import UseCases from '@/components/sections/UseCases';
import HowItWorks from '@/components/sections/HowItWorks';
import Pricing from '@/components/sections/Pricing';
import Comparison from '@/components/sections/Comparison';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Features />
      <BuiltForAfrica />
      <UseCases />
      <HowItWorks />
      <Pricing />
      <Comparison />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  )
}
