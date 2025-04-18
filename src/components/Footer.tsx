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
                <nav className="flex flex-col items-start md:flex-row gap-6 md:gap-8 md:items-center">
                  <Link to="/" className="text-sm font-semibold text-[var(--gray-dark)] hover:opacity-80 transition-opacity">
                    HOME
                  </Link>
                  <Link to="/about" className="text-sm font-semibold text-[var(--gray-dark)] hover:opacity-80 transition-opacity">
                    ABOUT
                  </Link>
                  <a href="https://calendly.com/vecchiarelli-peter/30min" target="_blank" className="text-sm font-semibold text-[var(--gray-dark)] hover:opacity-80 transition-opacity">
                    CALL
                  </a>
                  <a href="mailto:contact@protocolguild.org" className="text-sm font-semibold text-[var(--gray-dark)] hover:opacity-80 transition-opacity">
                    EMAIL
                  </a>
                </nav>
              </div>
            </Grid.Item>
          </Grid>
        </Section.Row>
      </Section>
    </footer>
  )
}

export default Footer 
