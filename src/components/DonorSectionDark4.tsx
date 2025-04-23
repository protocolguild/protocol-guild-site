// Component imports
import pgIcon from '../assets/images/pg-icon-dark.svg'
// 1% Partners
import etherfiSvg from '../assets/images/donors/etherfi.svg'
import etherfiWhiteSvg from '../assets/images/donors/etherfi-white.svg'
import taikoSvg from '../assets/images/donors/taiko.svg'
import taikoWhiteSvg from '../assets/images/donors/taiko-white.svg'
import eigenlayerSvg from '../assets/images/donors/eigenlayer.svg'
import eigenlayerWhiteSvg from '../assets/images/donors/eigenlayer-white.svg'
import pwnSvg from '../assets/images/donors/pwn.svg'
import pwnWhiteSvg from '../assets/images/donors/pwn-white.svg'
import pufferSvg from '../assets/images/donors/puffer.svg'
import pufferWhiteSvg from '../assets/images/donors/puffer-white.svg'

// Donors
import baseLogo from '../assets/images/base.svg'
import optimismLogo from '../assets/images/optimism.svg'
import polygonLogo from '../assets/images/polygon.svg'
import scrollLogo from '../assets/images/scroll.svg'
import shapeLogo from '../assets/images/shape.svg'
import zksyncLogo from '../assets/images/zksync.svg'
import zoraLogo from '../assets/images/zora.svg'
import arbitrumLogo from '../assets/images/arbitrum.svg'

/*

VanEck
*/

const partners = [
]

const donors = [
  { name: 'Arbitrum', logo: arbitrumLogo },
  { name: 'Base', logo: baseLogo },
  { name: 'Optimism', logo: optimismLogo },
  { name: 'Polygon', logo: polygonLogo },
  { name: 'Scroll', logo: scrollLogo },
  { name: 'Shape', logo: shapeLogo },
  { name: 'zkSync', logo: zksyncLogo },
  { name: 'Zora', logo: zoraLogo },
]


interface DonorSectionProps {
  className?: string
  theme?: 'dark' | 'light'
  type?: 'Donors' | 'Partners'
  featured?: boolean
}

const DonorSection = ({ className = '', theme = 'light', type = 'Donors', featured = false }: DonorSectionProps) => {
  const logos = type === 'Donors' ? donors : partners

return (
  <div className={`donors ${className} pt-4 pb-0`}>
    
    {featured && type === 'Partners' ? (
      <div className="silver-gradient silver-shimmer rounded-xl p-8">
        <div className="flex flex-wrap justify-center gap-6">
          {logos.map((donor) => (
            <a 
              key={donor.name}
              href={donor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-5 md:h-7" // Adjusted height
            >
              <img 
                src={donor.logo} 
                alt={donor.name}
                className="h-full w-auto max-w-[70px]" // Set valid max width
              />
            </a>
          ))}
        </div>
      </div>
    ) : type === 'Donors' ? (
      <div className="p-8">
        <div className="flex flex-wrap justify-center gap-6">
          {logos.map((donor) => (
            <a 
              key={donor.name}
              href={donor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-5 md:h-7" // Adjusted height
            >
              <img 
                src={donor.logo} 
                alt={donor.name}
                className="h-full w-auto max-w-[70px]" // Set valid max width
              />
            </a>
          ))}
        </div>
      </div>
    ) : (
      <div className="donor-logos grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 items-center">
        {logos.map(donor => (
          <a 
            key={donor.name}
            href={donor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-5 md:h-7" // Adjusted height
          >
            <img 
              src={theme === 'light' ? donor.logoWhite || donor.logo : donor.logo} 
              alt={donor.name}
              className="h-full w-auto max-w-[70px]" // Set valid max width
            />
          </a>
        ))}
      </div>
    )}
  </div>
)
}

export default DonorSection
