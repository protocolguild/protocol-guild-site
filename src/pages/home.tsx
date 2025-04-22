import { FC, useState } from 'react'
import chainsImage from '../assets/images/chains.png'
import authorImage from '../assets/images/michaelsproul.jpg'
import FeatureCard from '../components/FeatureCard'
import Section from '../components/Section'
import DonorSectionDark from '../components/DonorSectionDark'
import Grid from '../components/Grid'
import Navbar from '../components/Navbar'
import HeroLockup from '../components/HeroLockup'
import MemberFaces from '../components/MemberFaces'
import { homeContent } from '../content/home'
import DuneStat from '../components/DuneStat'
import DuneChart from '../components/DuneChart'

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
      <Section background="white" className="min-h-[500px] md:min-h-[600px] flex flex-col pb-8 md:pb-16 mt-0 relative overflow-hidden">
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
            <Grid.Item span={7} className="flex flex-col gap-4 min-h-[100px] my-8 md:my-16">
              <HeroLockup theme="color" className="w-[100%] md:w-[100%] lg:w-[100%] h-auto min-h-0 flex-shrink-1"  />
            </Grid.Item>
          </Grid>
        </Section.Row>
        <Section.Row className="flex-none relative z-1">
          <Grid>
            <Grid.Item span={7} className="flex flex-col gap-3 mt-5">
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
              <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--gray-dark)]">{homeContent.section1.quote.text}</h2>
              <div className="flex items-center">
                <img src={authorImage} alt="Michael Sproul" className="w-8 h-8 mr-2" />
              <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--gray-dark)]">
                <em>{homeContent.section1.quote.text}</em>
              </h2>
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
              <h2 className="text-3xl font-bold leading-[1.1] text-[#fff]">{homeContent.section2.title}</h2>
              <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--gray-dark)]">{homeContent.section2.subtitle1}</h2>
              <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--gray-dark)]">{homeContent.section2.subtitle2}</h2>
              <h2 className="!text-lg font-bold !leading-[24px] !text-[var(--gray-dark)]">{homeContent.section2.subtitle3}</h2>
            </Grid.Item>
            <Grid.Item span={6} className="flex flex-col gap-6">
            </Grid.Item>
          </Grid>
        </Section.Row>
      </Section>
     
      <Section background="gray-dark" divider="var(--gray-mid)">
        <Section.Row align="start">
          <Grid columns={12} className="py-16">
            <Grid.Item span={6} className="flex flex-col gap-6">
              <h2 className="col-span-3 text-3xl font-bold leading-[1.1] text-[#fff] mb-4">{homeContent.section3.title}</h2>
              <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--white)]">{homeContent.section3.subtitle1}</h2>
              <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--white)]">{homeContent.section3.subtitle2}</h2>
            </Grid.Item>
            <Grid.Item span={6} className="flex flex-col gap-6">
              <div className="relative h-[280px]">
                <div className="overflow-hidden absolute inset-0">
                  <div 
                    className="flex h-full transition-transform duration-500 ease-in-out" 
                    style={{ transform: `translateX(-${currentQuote * 100}%)` }}
                  >
                    {homeContent.quotes.map((quote, index) => (
                      <div key={index} className="min-w-full px-12 md:px-16">
                        <h2 className="!text-[16px] md:!text-lg !font-normal !leading-[20px] md:!leading-[24px] !text-[var(--white)] italic">
                          {quote.text} <span className="block mt-4">-{quote.author}</span>
                        </h2>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button 
                  onClick={previousQuote} 
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-1 md:p-2 bg-white/20 rounded-full shadow hover:bg-white/50 transition-colors z-10 focus:outline-none border-none"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-6 md:h-6"><path d="M15 18l-6-6 6-6"/></svg>
                </button>
                
                <button 
                  onClick={nextQuote} 
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-1 md:p-2 bg-white/20 rounded-full shadow hover:bg-white/50 transition-colors z-10 focus:outline-none border-none"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-6 md:h-6"><path d="M9 18l6-6-6-6"/></svg>
                </button>

                <div className="flex justify-center gap-[8px] absolute -bottom-4 left-0 right-0">
                  {homeContent.quotes.map((_quote, index: number) => (
                    <button
                      key={index}
                      onClick={() => goToQuote(index)}
                      className={`w-[16px] h-[16px] rounded-full transition-colors focus:outline-none p-0 ${
                        currentQuote === index ? 'bg-[var(--brand-primary)]' : 'bg-gray-500'
                      }`}
                      aria-label={`Go to quote ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </Grid.Item>
          </Grid>
        </Section.Row>
      </Section>

      <Section background="gray-light" divider="var(--gray-dark)">
        <Section.Row align="start">
          <Grid className="py-16">
            <Grid.Item span={6} className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold leading-[1.1] text-[var(--gray-dark)]">{homeContent.section4.title}</h2>
              <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--gray-dark)]">{homeContent.section4.subtitle1}</h2>
              <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--gray-dark)]">{homeContent.section4.subtitle2}</h2>
            </Grid.Item>
            <Grid.Item span={6} className="flex flex-col gap-6">
              <div className="w-full flex flex-row justify-between items-center">
                <p className="text-[var(--gray-dark)] text-base sm:text-sm">{homeContent.section4.statsHeader}</p>
                <a href="https://dune.com/protocolguild/protocol-guild" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--gray-dark)] text-base sm:text-sm ">
                  View on Dune
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              </div>
              <DuneStat 
                queryId="4876407" 
                theme="light" 
                title="Median Distributed Last 12 Months"
                suffix="/ contributor"
                variableName="yr_median_vested_hist"
                type="currency"
              />
              <DuneStat 
                queryId="4872646" 
                theme="light" 
                title="Expected Median Distribution Next 12 Months"
                suffix="/ contributor"
                variableName="median_vesting_365_days"
                type="currency"
              />
            </Grid.Item>
          </Grid>
        </Section.Row>
      </Section>

      <Section background="gray-mid" divider="var(--gray-light)">
        <Section.Row align="start" >
          <Grid columns={12} className="py-16">
            <Grid.Item span={6} className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold leading-[1.1] text-[#fff]">{homeContent.section5.title}</h2>
              <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--white)]">{homeContent.section5.subtitle1}</h2>
              <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--white)]">{homeContent.section5.subtitle2}</h2>
              <a href="https://calendly.com/vecchiarelli-peter/30min" target="_blank" rel="noopener noreferrer" className="!bg-[var(--brand-primary)] !border-none text-[var(--gray-dark)] hover:text-[var(--gray-dark)] !hover:text-[var(--gray-dark)] px-8 py-3 rounded-lg hover:!opacity-80 transition-colors w-fit inline-block no-underline">Schedule Call</a>
            </Grid.Item>
          </Grid>
        </Section.Row>
      </Section>

    </main>
  )
}

export default Home 
