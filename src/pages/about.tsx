import { FC } from 'react'
import FeatureCard from '../components/FeatureCard'
import Section from '../components/Section'
import Grid from '../components/Grid'
import PGLogo from '../components/PGLogo'
import PGStack from '../components/PGStack'
import trentImg from '../assets/images/trent.jpg'
import cheekyImg from '../assets/images/cheeky.jpg'
import timImg from '../assets/images/tim.jpg'
import peterImg from '../assets/images/peter.jpg'
import Navbar from '../components/Navbar'
import { aboutContent } from '../content/about'
import chainsImage from '../assets/images/chains.png'
import HeroLockup from '../components/HeroLockup'
import DuneStat from '../components/DuneStat'
import DuneChart from '../components/DuneChart'
import DuneTable from '../components/DuneTable'
import MemberFaces from '../components/MemberFaces'
import Repos from '../components/Repos'
import DonorSectionDark2 from '../components/DonorSectionDark2'

const About: FC = () => {

return (
  <main>
    
    <Section background="white" className="flex flex-col pb-8 md:pb-16 mt-0 relative overflow-hidden">
      <Section.Row>
        <Grid>
          <Grid.Item span={12} className="flex flex-col">
            <Navbar theme="light" />
          </Grid.Item>
        </Grid>
      </Section.Row>
      <Section.Row className="flex-1 flex items-center justify-center relative z-1 pt-7 md:pb-15">
        <Grid>
          <Grid.Item span={8} className="flex flex-col gap-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-[-1.44px] text-[var(--gray-dark)]">
              {aboutContent.hero.title}
            </h1>
            <p className="text-lg leading-[23px] text-[var(--gray-mid)]">
              {aboutContent.hero.subtitle1}
            </p>
          </Grid.Item>
        </Grid>
      </Section.Row>
    </Section>
        
    <Section background="white" divider="var(--brand-primary)" line={true}>
      <Section.Row align="start">
        <Grid columns={12} className="py-16">
          <Grid.Item span={6} className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold leading-[1.1] text-[var(--gray-dark)]">{aboutContent.organization.title}</h2>
            <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--gray-dark)]">{aboutContent.organization.description1}</h2>
            <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--gray-dark)]">{aboutContent.organization.description2}</h2>
            <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--gray-dark)]">{aboutContent.organization.description3}</h2>
            <a href="https://calendly.com/vecchiarelli-peter/30min" target="_blank" rel="noopener noreferrer" className="!bg-[var(--brand-primary)] !border-none text-[var(--gray-dark)] hover:text-[var(--gray-dark)] !hover:text-[var(--gray-dark)] px-8 py-3 rounded-lg hover:!opacity-80 transition-colors w-fit inline-block no-underline">Schedule Call</a>
          </Grid.Item>
          <Grid.Item span={6} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-6">
              <FeatureCard
                title="Protocol Guild Members"
                description="Over 190 researchers and developers are members of Protocol Guild"
                color="var(--gray-dark)"
              />
              <DuneChart 
                queryId="2665887" 
                theme="light" 
                xAxisKey="time2"
                yAxisKey="total_count"
                formatDate
              />
              <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--gray-dark)] flex items-center">
                <a href="https://protocol-guild.readthedocs.io/en/latest/02-membership.html" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  {aboutContent.organization.link}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </h2>
            </div>
            <br />
            <div>
              <h3 className="text-lg font-bold leading-[1.1] text-[var(--gray-dark)] mb-4">{aboutContent.organization.team}</h3>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex flex-col items-start">
                  <img src={trentImg} alt="Trent Van Epps" className="w-full aspect-square object-cover" />
                  <div className="mt-2 flex flex-col items-start w-full gap-1">
                    <p className="text-sm font-bold">Trent Van Epps</p>
                    <a href="https://x.com/trent_vanepps" target="_blank" rel="noopener noreferrer" className="text-[var(--gray-dark)] text-sm font-normal">@trent_vanepps
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block ml-1">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                    <p className="text-xs">Strategy, fundraising, internal gov.</p>
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <img src={cheekyImg} alt="Cheeky Gorilla" className="w-full aspect-square object-cover" />
                  <div className="mt-2 flex flex-col items-start w-full gap-1">
                    <p className="text-sm font-bold">Cheeky Gorilla</p>
                    <a href="https://x.com/cheekygorilla0x" target="_blank" rel="noopener noreferrer" className="text-[var(--gray-dark)] text-sm font-normal">@cheekygorilla0x
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block ml-1">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                    <p className="text-xs">Internal ops, legal, fundraising</p>
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <img src={peterImg} alt="Peter Vecchiarelli" className="w-full aspect-square object-cover" />
                  <div className="mt-2 flex flex-col items-start w-full gap-1">
                    <p className="text-sm font-bold">Peter Vecchiarelli</p>
                    <a href="https://x.com/AlphaLemonade" target="_blank" rel="noopener noreferrer" className="text-[var(--gray-dark)] text-sm font-normal">@AlphaLemonade
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block ml-1">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                    <p className="text-xs">Fundraising, comms</p>
                  </div>
                </div>
              </div>
            </div>
          </Grid.Item>
        </Grid>
      </Section.Row>
    </Section>
     
    <Section background="white" divider="var(--brand-primary)" line={true}>
      <Section.Row align="start">
        <Grid columns={12} className="py-16">
          <Grid.Item span={6} className="flex flex-col gap-6 md:h-full">
            <h2 className="text-3xl font-bold leading-[1.1] text-[var(--gray-dark)]">{aboutContent.impactAreas.title}</h2>
            <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--gray-dark)]">{aboutContent.impactAreas.subtitle}</h2>
            <DuneStat 
              queryId="5021583" 
              theme="light" 
              title="Cumulative Years Contributed"
              suffix="years"
              variableName="time"
              type="number"
            />
            <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--gray-dark)] flex items-center">
              <a href="https://protocol-guild.readthedocs.io/en/latest/01-eligibility.html" target="_blank" rel="noopener noreferrer" className="flex items-center">
                {aboutContent.impactAreas.link}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </h2>
          </Grid.Item>
          <Grid.Item span={6} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aboutContent.impactAreas.areas.map((area, index) => (
                <FeatureCard
                  key={index}
                  title={area.title}
                  description={area.description}
                  color="var(--gray-dark)"
                />
              ))}
            </div>
          </Grid.Item>
        </Grid>
      </Section.Row>
    </Section>
      
    <Section background="white" divider="var(--brand-primary)" line={true}>
      <Section.Row align="start">
        <Grid columns={12} className="py-16">
          <Grid.Item span={6} className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold leading-[1.1] text-[var(--gray-dark)]">{aboutContent.funding.title}</h2>
            <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--gray-dark)]">{aboutContent.funding.description1}</h2>
            <h2 className="!text-lg !font-bold !leading-[24px] !text-[var(--gray-dark)]">{aboutContent.funding.description2}</h2>
            <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--gray-dark)]">{aboutContent.funding.description3}</h2>
            <h2 className="!text-lg !font-bold !leading-[24px] !text-[var(--gray-dark)]">{aboutContent.funding.description4}</h2>
            <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--gray-dark)]">{aboutContent.funding.description5}</h2>
          </Grid.Item>
          <Grid.Item span={6} className="flex flex-col gap-6">
            <div className="w-full flex flex-row justify-between items-center">
              <p className="text-[var(--gray-dark)] text-base sm:text-sm">{aboutContent.funding.statsHeader}</p>
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
              title="Median Vesting Next 12 Months"
              suffix="/ contributor"
              variableName="median_vesting_365_days"
              type="currency"
            />
            <DuneStat 
              queryId="4876407" 
              theme="light" 
              title="Total Amount Distributed"
              variableName="total_vested_hist"
              type="currency"
            />
            <DuneChart 
                queryId="3851797" 
                theme="light" 
                title="Vesting History + Forecast"
                xAxisKey="date"
                yAxisKey="total_vesting"
                formatCurrency
                formatDate
              />
          </Grid.Item>
        </Grid>
      </Section.Row>
    </Section>
    
    <Section background="white" divider="var(--brand-primary)" line={true}>
      <Section.Row align="start">
        <Grid columns={12} className="py-16">
          <Grid.Item span={6} className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold leading-[1.1] text-[var(--gray-dark)]">{aboutContent.docs.title}</h2>
            <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--gray-dark)]">{aboutContent.docs.description}</h2>
            <a href="https://protocol-guild.readthedocs.io" rel="noopener noreferrer" className="!bg-[var(--brand-primary)] !border-none text-[var(--gray-dark)] hover:text-[var(--gray-dark)] !hover:text-[var(--gray-dark)] px-8 py-3 rounded-lg hover:!opacity-80 transition-colors w-fit inline-block no-underline">{aboutContent.docs.link}</a>
          </Grid.Item>
        </Grid>
      </Section.Row>
    </Section>

  </main>
)
}

export default About
