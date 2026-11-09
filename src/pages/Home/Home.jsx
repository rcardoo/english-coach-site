import Comparison from '../../components/Comparison/Comparison.jsx'
import Faq from '../../components/Faq/Faq.jsx'
import FeaturesStrip from '../../components/FeaturesStrip/FeaturesStrip.jsx'
import FinalCta from '../../components/FinalCta/FinalCta.jsx'
import Hero from '../../components/Hero/Hero.jsx'
import HowItWorks from '../../components/HowItWorks/HowItWorks.jsx'
import Pricing from '../../components/Pricing/Pricing.jsx'
import PlanSection from '../../components/PlanSection/PlanSection.jsx'
import ScheduleCta from '../../components/ScheduleCta/ScheduleCta.jsx'
import Teachers from '../../components/Teachers/Teachers.jsx'
import Testimonials from '../../components/Testimonials/Testimonials.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesStrip />
      <HowItWorks />
      <PlanSection />
      <Comparison />
      <Pricing />
      <Teachers />
      <ScheduleCta />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  )
}
