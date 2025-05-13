import { FC } from 'react'
import { Link } from 'react-router-dom'
import Section from './Section'
import Grid from './Grid'
import PGLockup from './PGLockup'

const Footer: FC = () => {
  return (
    <footer className="bg-[var(--brand-primary)] pt-16 pb-8">
      <Section background="brand-primary">
        <Section.Row>
          <Grid>
            <Grid.Item span={12}>
              <div className="flex flex-col items-start md:flex-row gap-8 md:items-center justify-between w-full">
                <Link to="/">
                  <PGLockup fill="var(--gray-dark)" className="h-8 w-auto max-w-[200px]" />
                </Link>
                <div className="flex flex-row gap-6 md:gap-8 items-center">
                  <a href="https://dune.com/protocolguild/protocol-guild" target="_blank" rel="noopener noreferrer">
                    <img src={require('src/assets/images/Dune.png')} alt="Dune" className="h-8 w-auto" />
                  </a>
                  <a href="https://x.com/ProtocolGuild" target="_blank" rel="noopener noreferrer">
                    <img src={require('src/assets/images/Twitter.png')} alt="Twitter" className="h-8 w-auto" />
                  </a>
                  <a href="https://warpcast.com/protocolguild" target="_blank" rel="noopener noreferrer">
                    <img src={require('src/assets/images/Warpcast.png')} alt="Warpcast" className="h-8 w-auto" />
                  </a>
                  <a href="https://discord.gg/54JUcFSJ7u" target="_blank" rel="noopener noreferrer">
                    <img src={require('src/assets/images/Discord.png')} alt="Discord" className="h-8 w-auto" />
                  </a>
                  <a href="https://github.com/protocolguild/protocol-guild-site" target="_blank" rel="noopener noreferrer">
                    <img src={require('src/assets/images/Github.png')} alt="Github" className="h-8 w-auto" />
                  </a>
                </div>
              </div>
            </Grid.Item>
          </Grid>
        </Section.Row>
      </Section>
    </footer>
  )
}

export default Footer
