import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navigation } from '../content/navigation'
import HeroLockup from '../components/HeroLockup'

interface NavbarProps {
  theme?: 'light' | 'brand' | 'dark';
}

const Navbar: FC<NavbarProps> = ({ theme = 'light' }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const { main: links } = navigation;

  return (
    <nav className="bg-white py-6">
      <div className="flex flex-col md:flex-row justify-between w-full">
        <div className="flex gap-6 md:gap-8 mb-4 md:mb-0 md:order-2 items-start">
          {links.map(link => {
            return link.target === '_blank' ? (
              <a
                key={link.path}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-medium text-sm transition-opacity flex items-center gap-1 ${
                currentPath === link.path
                  ? theme === 'light' 
                    ? 'text-[var(--brand-primary)]'
                    : theme === 'brand'
                      ? 'text-[var(--bg-white)] hover:!text-[var(--bg-white)] hover:!opacity-50'
                      : 'text-[var(--brand-primary)] hover:!text-[var(--brand-primary)] hover:!opacity-50'
                  : theme === 'light'
                    ? 'text-[#212121] hover:text-[var(--gray-dark)]'
                    : theme === 'brand'
                      ? 'text-[var(--gray-dark)] hover:!text-[var(--gray-dark)] hover:!opacity-50'
                      : 'text-[var(--bg-white)] hover:!text-[var(--bg-white)] hover:!opacity-50'
              }`}
            >
              {link.name}
              {link.target === '_blank' && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-[2px]">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              )}
            </a>
          ) : (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium text-sm transition-opacity flex items-center gap-1 ${
                  currentPath === link.path
                    ? theme === 'light' 
                      ? 'text-[var(--brand-primary)]'
                      : theme === 'brand'
                        ? 'text-[var(--bg-white)] hover:!text-[var(--bg-white)] hover:!opacity-50'
                        : 'text-[var(--brand-primary)] hover:!text-[var(--brand-primary)] hover:!opacity-50'
                    : theme === 'light'
                      ? 'text-[#212121] hover:text-[var(--gray-dark)]'
                      : theme === 'brand'
                        ? 'text-[var(--gray-dark)] hover:!text-[var(--gray-dark)] hover:!opacity-50'
                        : 'text-[var(--bg-white)] hover:!text-[var(--bg-white)] hover:!opacity-50'
                }`}
              >
                {link.name}
                {link.target === '_blank' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-[2px]">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                )}
              </Link>
            )
          })}
        </div>
        <div className="pt-16 md:pt-30 lg:pt-35 md:order-1">
          <HeroLockup theme="color" className="w-[90%] md:w-[80%] lg:w-[70%] h-auto min-h-0 flex-shrink-1" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar
