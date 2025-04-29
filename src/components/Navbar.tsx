import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navigation } from '../content/navigation'
import PGLockup from './PGLockup'
import Section from './Section'

interface NavbarProps {
  theme?: 'light' | 'brand' | 'dark';
}

const Navbar: FC<NavbarProps> = ({ theme = 'light' }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const { main: links } = navigation;

  return (
    <header className="bg-[var(--brand-primary)] pt-16 pb-8">
      <Section background="white">
        <Section.Row>
          <Grid>
            <Grid.Item span={12}>
              <div className="flex flex-col items-start md:flex-row gap-8 md:items-center justify-between w-full">
                <Link to="/">
                  <PGLockup fill="var(--gray-dark)" logoColor="#3cbeed" className="h-8 w-auto max-w-[200px]" />
                </Link>
                <nav className="flex flex-col items-start md:flex-row gap-6 md:gap-8 md:items-center">
                  {links.map(link => (
                    link.target === '_blank' ? (
                      <a
                        key={link.path}
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-sm font-semibold text-[var(--gray-dark)] hover:opacity-80 transition-opacity`}
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        key={link.path}
                        to={link.path}
                        className={`text-sm font-semibold text-[var(--gray-dark)] hover:opacity-80 transition-opacity`}
                      >
                        {link.name}
                      </Link>
                    )
                  ))}
                </nav>
              </div>
            </Grid.Item>
          </Grid>
        </Section.Row>
      </Section>
    </header>
  );
};

export default Navbar;
