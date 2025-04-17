import { FC } from 'react'
import FeatureCard from '../components/FeatureCard'
import Section from '../components/Section'
import DonorSectionDark from '../components/DonorSectionDark'
import Grid from '../components/Grid'
import Navbar from '../components/Navbar'
import DonorSection from '../components/DonorSection'
import HeroLockup from '../components/HeroLockup'
import MemberFaces from '../components/MemberFaces'
import { homeContent } from '../content/home'
import chainsImage from '../assets/images/chains.png'

const Home: FC = () => {
  return (
    <main>
      <Section background="white" className="min-h-[500px] md:min-h-[700px] flex flex-col pb-8 md:pb-16 mt-0 relative overflow-hidden">
        <img
          src={chainsImage}
          alt="Ethereum chains"
          className="absolute top-0 right-0 h-full w-auto object-cover object-right z-0 hidden md:block"
          style={{ maxWidth: 'none' }}
        />
        <Section.Row>
          <Grid>
            <Grid.Item span={3} className="flex flex-col">
              <Navbar theme="light" />
            </Grid.Item>
          </Grid>
        </Section.Row>
        <Section.Row 
          className="min-h-0 flex items-center relative z-1"
        >
          <Grid columns={12}>
            <Grid.Item span={6} className="flex flex-col gap-4 min-h-[200px] my-8 md:my-16">
              <HeroLockup theme="color" className="w-[70%] md:w-[75%] lg:w-[60%] h-auto min-h-0 flex-shrink-1"  />
            </Grid.Item>
          </Grid>
        </Section.Row>
        <Section.Row className="flex-none relative z-1">
          <Grid>
            <Grid.Item span={6} className="flex flex-col gap-3 mt-5">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-[-1.44px] text-[var(--gray-dark)]">
                {homeContent.hero.title}
              </h1>
              <p className="text-lg leading-[23px] text-[var(--gray-mid)]">
                {homeContent.hero.subtitle}
              </p>
            </Grid.Item>
          </Grid>
        </Section.Row>
      </Section>
      
      <Section background="gray-light" divider="#ffffff">
        <Section.Row align="start">
          <Grid className="py-16">
            <Grid.Item span={6} className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold leading-[1.1] text-[var(--gray-dark)]">{homeContent.impact.title}</h2>
              <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--gray-dark)]">{homeContent.impact.subtitle1}</h2>
              <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--gray-dark)]">{homeContent.impact.subtitle2}</h2>
              <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--gray-dark)]">
                <a href="https://tim.mirror.xyz/srVdVopOFhD_ZoRDR50x8n5wmW3aRJIrNEAkpyQ4_ng" target="_blank" rel="noopener noreferrer">
                  {homeContent.impact.subtitle3}
                </a>
              </h2>
            </Grid.Item>
            <Grid.Item span={6} className="flex flex-col gap-6">
              <DonorSectionDark theme="dark" type="Partners" featured={true}/>
            </Grid.Item>
          </Grid>
        </Section.Row>
      </Section>

      <Section background="gray-mid" divider="var(--gray-light)">
        <Section.Row align="start" >
          <Grid columns={12} className="py-16">
            <Grid.Item span={6} className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold leading-[1.1] text-[#fff]">{homeContent.mission.title}</h2>
              <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--white)]">{homeContent.mission.subtitle1}</h2>
              <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--white)]">{homeContent.mission.subtitle2}</h2>
            </Grid.Item>
            <Grid.Item span={6} className="flex flex-col gap-6">
              {homeContent.mission.features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  color="var(--white)"
                />
              ))}
            </Grid.Item>
          </Grid>
        </Section.Row>
      </Section>
     
      <Section background="gray-dark" divider="var(--gray-mid)">
        <Section.Row align="start">
          <Grid columns={12} className="py-16">
            <Grid.Item span={6} className="flex flex-col">
              <h2 className="col-span-3 text-3xl font-bold leading-[1.1] text-[#fff] mb-4">
                {homeContent.cta.title}
              </h2>
              <div className="w-fit">
                <a href={homeContent.cta.buttonLink} className="!bg-[var(--brand-primary)] !border-none text-[var(--gray-dark)] px-8 py-3 rounded-lg hover:!opacity-80 transition-colors inline-block">
                  {homeContent.cta.buttonText}
                </a>
              </div>
            </Grid.Item>
            <Grid.Item span={6} className="flex flex-col">
              <DonorSection theme="light" type="Partners" featured={true} />
              <DonorSection theme="light" type="Donors" />
            </Grid.Item>
          </Grid>
        </Section.Row>
      </Section>
    </main>
  )
}

export default Home 
