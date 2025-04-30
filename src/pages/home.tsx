import { FC, useState } from 'react'
import Section from '../components/Section'
import Grid from '../components/Grid'
import Navbar from '../components/Navbar'
import HeroLockup from '../components/HeroLockup'
import chainsImage from '../assets/images/chains.png'
import { homeContent } from '../content/home'
import authorImage from '../assets/images/michaelsproul.jpg'
import DuneChart from '../components/DuneChart'
import MemberFaces from '../components/MemberFaces'
import Repos from '../components/Repos'
import DonorSectionDark2 from '../components/DonorSectionDark2'

const Home: FC = () => {

const [currentQuote, setCurrentQuote] = useState(0);

const nextQuote = () => {
  setCurrentQuote((prev) => (prev + 1) % homeContent.quotes.length);
};

const previousQuote = () => {
  setCurrentQuote((prev) => (prev - 1 + homeContent.quotes.length) % homeContent.quotes.length);
};

const goToQuote = (index: number) => {
  setCurrentQuote(index);
};

return (
  <main>
    
<Section background="white" className="flex flex-col relative overflow-hidden">
  <img
    src={chainsImage}
    alt="Ethereum chains"
    className="absolute top-0 right-0 h-full w-full object-cover object-right z-0 hidden md:block"
    style={{ maxWidth: 'none' }}
  />
  <Section.Row className="relative z-1">
    <Grid>
      <Grid.Item span={12} className="flex flex-col">
        <Navbar theme="light" />
      </Grid.Item>
    </Grid>
  </Section.Row>
  <Section.Row className="flex-1 flex items-center justify-center relative z-1 mt-4 mb-8 pt-4 pb-8 md:mt-16 md:mb-16 md:pt-16 md:pb-16">
    <Grid>
      <Grid.Item span={8} className="flex flex-col gap-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-[-1.44px] text-[var(--gray-dark)]">
          {homeContent.hero.title}
        </h1>
        <p className="text-lg leading-[23px] text-[var(--gray-mid)]">
          {homeContent.hero.subtitle1}
          <br/><br/>
          {homeContent.hero.subtitle2}
        </p>
      </Grid.Item>
    </Grid>
  </Section.Row>
</Section>

      
    <Section background="white" divider="var(--brand-primary)" line={true}>
      <Section.Row align="start">
        <Grid className="py-16">
          <Grid.Item span={6} className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold leading-[1.1] text-[var(--gray-dark)]">{homeContent.section1.title}</h2>
            <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--gray-dark)]">
              <em>{homeContent.section1.quote.text}</em>
            </h2>
            <div className="flex items-center">
              <img src={authorImage} alt="Michael Sproul" className="w-8 h-8 mr-2" />
              <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--gray-dark)]">{homeContent.section1.quote.author}</h2>
            </div>
          </Grid.Item>
          <Grid.Item span={6} className="flex flex-col gap-6">
            <div className="w-full flex flex-row justify-between items-center">
              <p className="text-[var(--gray-dark)] text-base sm:text-sm">{homeContent.section1.statsHeader}</p>
              <a href="https://dune.com/protocolguild/protocol-guild" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--gray-dark)] text-base sm:text-sm ">
                View on Dune
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </div>
            <DuneChart 
                queryId="5001629" 
                theme="light" 
                xAxisKey="date"
                yAxisKey="cumulative_historical_value"
                formatCurrency
                formatDate
              />
          </Grid.Item>
        </Grid>
      </Section.Row>
    </Section>

    <Section background="white" divider="var(--brand-primary)" line={true}>
      <Section.Row align="start" >
        <Grid columns={12} className="py-16">
          <Grid.Item span={6} className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold leading-[1.1] text-[var(--gray-dark)]">{homeContent.section2.title}</h2>
            <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--gray-dark)]">{homeContent.section2.subtitle1}</h2>
            <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--gray-dark)]">{homeContent.section2.subtitle2}</h2>
            <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--gray-dark)]">{homeContent.section2.subtitle3}</h2>
            <h2 className="!text-lg font-bold !leading-[24px] !text-[var(--gray-dark)]">{homeContent.section2.subtitle4}</h2>
          </Grid.Item>
          <Grid.Item span={6} className="flex flex-col gap-6">
            <MemberFaces />
            <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--gray-dark)] flex items-center">
              <a href="https://protocol-guild.readthedocs.io/en/latest/02-membership.html" target="_blank" rel="noopener noreferrer" className="flex items-center">
                {homeContent.section2.link}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </h2>
            <Repos />
          </Grid.Item>
        </Grid>
      </Section.Row>
    </Section>

    <Section background="white" divider="var(--brand-primary)" line={true}>
      <Section.Row align="start" >
        <Grid columns={12} className="py-16">
          <Grid.Item span={6} className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold leading-[1.1] text-[var(--gray-dark)]">{homeContent.section3.title}</h2>
            <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--gray-dark)]">{homeContent.section3.subtitle1}</h2>
            <a href={homeContent.section3.buttonLink} rel="noopener noreferrer" className="!bg-[var(--brand-primary)] !border-none text-[var(--gray-dark)] hover:text-[var(--gray-dark)] !hover:text-[var(--gray-dark)] px-8 py-3 rounded-lg hover:!opacity-80 transition-colors w-fit inline-block no-underline">Fund our Work</a>
          </Grid.Item>
          <Grid.Item span={6} className="flex flex-col gap-6">
            <DonorSectionDark2 theme="dark" type="Partners" featured={true}/>
            <DonorSectionDark2 theme="dark" type="Donors" />
          </Grid.Item>
        </Grid>
      </Section.Row>
    </Section>

    </main>
  )
}

export default Home
