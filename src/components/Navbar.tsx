import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navigation } from '../content/navigation'
import PGLockup from './PGLockup'

interface NavbarProps {
  theme?: 'light' | 'brand' | 'dark';
}

const Navbar: FC<NavbarProps> = ({ theme = 'light' }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const { main: links } = navigation;

  return (
    <nav className="bg-white py-6">
      <div className="flex flex-col items-start md:flex-row gap-8 md:items-center justify-between w-full">
        <Link to="/">
          <PGLockup fill="var(--gray-dark)" logoColor="#3cbeed" className="h-8 w-auto max-w-[200px]" />
        </Link>
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 md:ml-auto md:items-center">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar
