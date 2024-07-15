import Features from '@/components/Features'
import Hero from '@/components/Hero'
import { HowItWorks } from '@/components/HowItWorks'
import { InfoBanner } from '@/components/InfoBanner'
import OverflowBox from '@/components/Overflow'
import Pricing from '@/components/Pricing'
import SectionHeader from '@/components/SectionHeader'
import Image from 'next/image'

export default function Home() {
  return (
    <main >
      <Hero />
      {/* <SectionHeader /> */}
      {/* <Features /> */}
      {/* <SectionHeader title="Pricing"/> */}
      {/* <Pricing /> */}
      <HowItWorks/>
      <InfoBanner/>
    </main>
  )
}
