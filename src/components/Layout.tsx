import { FC, ReactNode } from 'react'
import Footer from './Footer'
import AnnouncementBanner from './AnnouncementBanner'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="app min-h-screen bg-white">
      <AnnouncementBanner />
      {children}
      <Footer />
    </div>
  )
}

export default Layout 