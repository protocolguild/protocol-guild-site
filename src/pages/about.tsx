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
        <Section background="gray-dark" className="min-h-[400px] md:min-h-[400px] flex flex-col pb-8 md:pb-16 mt-0">
          <img
            src={chainsImage}
            alt="Ethereum chains"
            className="absolute top-0 right-0 h-full w-auto object-cover object-right z-0 hidden md:block"
            style={{ maxWidth: 'none' }}
          />
          <Section.Row>
            <Grid>
              <Grid.Item span={3}>
                <Navbar theme="dark" />
              </Grid.Item>
            </Grid>
          </Section.Row>
          <Section.Row className="flex flex-col flex-grow justify-center items-center">
            <Grid>
              <Grid.Item span={6} className="flex flex-col gap-3 mt-5">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-[-1.44px] text-[var(--white)]">
                  {aboutContent.hero.title}
                </h1>
              </Grid.Item>
            </Grid>
          </Section.Row>
        </Section>
        
        <Section background="white" divider="var(--brand-primary)" line={true}>
          <Section.Row align="start">
            <Grid columns={12} className="py-16">
              <Grid.Item span={6} className="flex flex-col gap-4">
                <h2 className="col-span-3 text-3xl font-bold leading-[1.1] text-[var(--gray-dark)] mb-4">
                  {aboutContent.organization.title}
                </h2>
                <h2 className="!text-lg mt-5 !font-normal !leading-[24px] !text-[var(--gray-dark)]">{aboutContent.organization.description}</h2>
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
                    title="Membership"
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
                <div className="border-t border-black my-4" />
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
              <Grid.Item span={6} className="flex flex-col gap-6">
                <h2 className="text-3xl font-bold leading-[1.1] text-[var(--gray-dark)]">{aboutContent.section2.title}</h2>
                <h2 className="!text-lg mt-5 !font-normal !leading-[24px] !text-[var(--gray-dark)]">{aboutContent.section2.subtitle}</h2>
                <MemberFaces />
                <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--gray-dark)] flex items-center">
                  <a href="https://protocol-guild.readthedocs.io/en/latest/02-membership.html" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    {aboutContent.section2.link}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"> {/* Add margin to the left for spacing */}
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </h2>
              </Grid.Item>
              <Grid.Item span={6} className="flex flex-col gap-6">
                <Repos />
              </Grid.Item>
            </Grid>
          </Section.Row>
        </Section>
        <Section background="white" divider="var(--brand-primary)" line={true}>
          <Section.Row align="start">
            <Grid columns={12} className="py-16">
              <Grid.Item span={6} className="flex flex-col gap-6">
                <h2 className="text-3xl font-bold leading-[1.1] text-[var(--gray-dark)]">{aboutContent.section3.title}</h2>
                <DonorSectionDark2 theme="dark" type="Partners" featured={true}/>
                <DonorSectionDark2 theme="dark" type="Donors" />
              </Grid.Item>
              <Grid.Item span={6} className="flex flex-col gap-6">
                <div className="w-full flex flex-row justify-between items-center">
                  <p className="text-[var(--gray-dark)] text-base sm:text-sm">{aboutContent.section3.tableHeader}</p>
                  <a href="https://dune.com/protocolguild/protocol-guild" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <span className="text-[var(--gray-dark)] text-base sm:text-sm">View on Dune</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                </div>
                <DuneTable 
                    queryId="4561127"
                    theme="light"
                  />
              </Grid.Item>
            </Grid>
          </Section.Row>
        </Section>
        
        <Section background="white" divider="var(--brand-primary)" line={true}>
          <Section.Row align="start">
            <Grid columns={12} className="py-16">
              <Grid.Item span={6} className="flex flex-col gap-6">
                <h2 className="text-3xl font-bold leading-[1.1] text-[var(--gray-dark)]">{aboutContent.funding.title}</h2>
                <DuneStat 
                  queryId="2478156" 
                  theme="light" 
                  title="Total Donations"
                  variableName="total_donors"
                  type="number"
                />
                <DuneStat 
                  queryId="2478156" 
                  theme="light" 
                  title="Total Donated - Initial value"
                  variableName="total_historical_value"
                  type="currency"
                />
                <DuneStat 
                  queryId="2478156" 
                  theme="light" 
                  title="Total Donated - Current Value"
                  variableName="total_current_value"
                  type="currency"
                />
              </Grid.Item>
              <Grid.Item span={6} className="flex flex-col gap-6">
                <div className="w-full flex flex-row justify-between items-center">
                  <p className="text-[var(--gray-dark)] text-base sm:text-sm"></p>
                  <a href="https://dune.com/protocolguild/protocol-guild" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--gray-dark)] text-base sm:text-sm ">
                    View on Dune
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                </div>
                <DuneStat 
                  queryId="4872646" 
                  theme="light" 
                  title="Total Amount Vesting (4 Years)"
                  variableName="total_vesting"
                  type="currency"
                />
                <DuneChart 
                    queryId="5001842" 
                    theme="light" 
                    title="Vesting Forecast"
                    xAxisKey="date"
                    yAxisKey="total_vesting"
                    formatCurrency
                    formatDate
                  />
              </Grid.Item>
            </Grid>
          </Section.Row>
        </Section>
  
      </main>
    )
  }
  
  export default About
