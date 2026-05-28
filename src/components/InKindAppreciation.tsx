import { FC } from 'react'

/* ─── Conference / hardware logos ────────────────────────────────────────── */

const EthCCLogo: FC = () => (
  <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" aria-label="EthCC" className="h-full w-auto">
    <clipPath id="ethcc-top"><rect x="0" y="0" width="60" height="30" /></clipPath>
    <clipPath id="ethcc-bot"><rect x="0" y="30" width="60" height="30" /></clipPath>
    <polygon points="30,4 56,30 30,56 4,30" fill="#3B6FE0" clipPath="url(#ethcc-top)" />
    <polygon points="30,4 56,30 30,56 4,30" fill="#E84C6A" clipPath="url(#ethcc-bot)" />
    <polygon points="30,14 46,30 30,46 14,30" fill="none" stroke="white" strokeWidth="2.5" />
  </svg>
)

const EthPragueLogo: FC = () => (
  <svg viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg" aria-label="ETH Prague 2026" className="h-full w-auto">
    <text x="0" y="26" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="900" fontSize="22" letterSpacing="-1" fill="#111111">ETH</text>
    <text x="56" y="22" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="600" fontSize="13" letterSpacing="1" fill="#111111">PRAGUE</text>
    <text x="56" y="34" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="600" fontSize="13" letterSpacing="1" fill="#111111">2026</text>
  </svg>
)

const DevconLogo: FC = () => (
  <svg viewBox="0 0 120 50" xmlns="http://www.w3.org/2000/svg" aria-label="Devcon" className="h-full w-auto">
    <polygon points="22,2 40,25 22,48 4,25"  fill="#3B2F8C" />
    <polygon points="22,2 40,25 22,30 4,25"  fill="#6B5ED0" opacity="0.6" />
    <polygon points="22,30 40,25 22,48 4,25" fill="#E8A040" opacity="0.7" />
    <text x="48" y="18" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="800" fontSize="15" letterSpacing="2" fill="#3B2F8C">DEV</text>
    <text x="48" y="34" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="800" fontSize="15" letterSpacing="2" fill="#3B2F8C">CON</text>
    <text x="48" y="45" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="400" fontSize="9" letterSpacing="1.5" fill="#6B5ED0">VIII · INDIA</text>
  </svg>
)

const KeycardLogo: FC = () => (
  <svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg" aria-label="Keycard" className="h-full w-auto">
    <rect width="56" height="56" rx="8" fill="#111111" />
    <circle cx="28" cy="20" r="9" fill="none" stroke="white" strokeWidth="4" />
    <line x1="28" y1="29" x2="28" y2="44" stroke="white" strokeWidth="4" strokeLinecap="round" />
    <line x1="22" y1="44" x2="34" y2="44" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
    <line x1="22" y1="38" x2="28" y2="38" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
  </svg>
)

const DappConLogo: FC = () => (
  <svg viewBox="0 0 110 40" xmlns="http://www.w3.org/2000/svg" aria-label="DappCon" className="h-full w-auto">
    <circle cx="20" cy="20" r="18" fill="#1a1a1a" />
    <text x="8" y="26" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="800" fontSize="14" fill="white">DC</text>
    <text x="46" y="23" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="700" fontSize="14" letterSpacing="-0.3" fill="#111111">DappCon</text>
  </svg>
)

const EthGlobalLogo: FC = () => (
  <svg viewBox="0 0 140 36" xmlns="http://www.w3.org/2000/svg" aria-label="ETHGlobal Cannes" className="h-full w-auto">
    <rect x="0" y="4" width="28" height="28" rx="6" fill="#111111" />
    <text x="4" y="23" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="900" fontSize="14" fill="white">EG</text>
    <text x="36" y="17" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="700" fontSize="12" letterSpacing="-0.2" fill="#111111">ETHGlobal</text>
    <text x="36" y="30" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="500" fontSize="11" letterSpacing="0.5" fill="#8FA0AB">CANNES</text>
  </svg>
)

/* ─── Audit / infrastructure logos ──────────────────────────────────────── */

const SigmaPrimeLogo: FC = () => (
  <svg viewBox="0 0 130 36" xmlns="http://www.w3.org/2000/svg" aria-label="Sigma Prime" className="h-full w-auto">
    <text x="0" y="26" fontFamily="Georgia,serif" fontWeight="700" fontSize="24" fill="#E05A2B">Σ</text>
    <text x="26" y="22" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="700" fontSize="13" letterSpacing="-0.2" fill="#111111">Sigma Prime</text>
  </svg>
)

const DedaubLogo: FC = () => (
  <svg viewBox="0 0 110 36" xmlns="http://www.w3.org/2000/svg" aria-label="Dedaub" className="h-full w-auto">
    <text x="0" y="25" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="900" fontSize="20" letterSpacing="2" fill="#111111">DEDAUB</text>
  </svg>
)

const ZellicLogo: FC = () => (
  <svg viewBox="0 0 100 36" xmlns="http://www.w3.org/2000/svg" aria-label="Zellic" className="h-full w-auto">
    <g transform="translate(14,18)" stroke="#3A3A28" strokeWidth="2.2" strokeLinecap="round">
      <line x1="-10" y1="0" x2="10" y2="0" />
      <line x1="-10" y1="0" x2="10" y2="0" transform="rotate(45)"  />
      <line x1="-10" y1="0" x2="10" y2="0" transform="rotate(90)"  />
      <line x1="-10" y1="0" x2="10" y2="0" transform="rotate(135)" />
      <line x1="-7" y1="-7" x2="7" y2="7"  transform="rotate(22)"  />
      <line x1="-7" y1="-7" x2="7" y2="7"  transform="rotate(67)"  />
      <line x1="-7" y1="-7" x2="7" y2="7"  transform="rotate(112)" />
      <line x1="-7" y1="-7" x2="7" y2="7"  transform="rotate(157)" />
    </g>
    <text x="30" y="23" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="700" fontSize="16" letterSpacing="-0.3" fill="#3A3A28">Zellic</text>
  </svg>
)

const RedGuildLogo: FC = () => (
  <svg viewBox="0 0 110 44" xmlns="http://www.w3.org/2000/svg" aria-label="Red Guild" className="h-full w-auto">
    <g transform="translate(20,22)">
      <polygon points="0,-18 6,-8 0,-4 -6,-8"  fill="#CC2020" />
      <polygon points="0,-18 6,-8 0,-4 -6,-8"  fill="#CC2020" transform="rotate(60)"  />
      <polygon points="0,-18 6,-8 0,-4 -6,-8"  fill="#AA1818" transform="rotate(120)" />
      <polygon points="0,-18 6,-8 0,-4 -6,-8"  fill="#CC2020" transform="rotate(180)" />
      <polygon points="0,-18 6,-8 0,-4 -6,-8"  fill="#AA1818" transform="rotate(240)" />
      <polygon points="0,-18 6,-8 0,-4 -6,-8"  fill="#CC2020" transform="rotate(300)" />
      <polygon points="0,-11 4,-5 0,-2 -4,-5"  fill="#881010" />
      <polygon points="0,-11 4,-5 0,-2 -4,-5"  fill="#881010" transform="rotate(60)"  />
      <polygon points="0,-11 4,-5 0,-2 -4,-5"  fill="#AA1818" transform="rotate(120)" />
      <polygon points="0,-11 4,-5 0,-2 -4,-5"  fill="#881010" transform="rotate(180)" />
      <polygon points="0,-11 4,-5 0,-2 -4,-5"  fill="#AA1818" transform="rotate(240)" />
      <polygon points="0,-11 4,-5 0,-2 -4,-5"  fill="#881010" transform="rotate(300)" />
    </g>
    <text x="46" y="26" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="700" fontSize="13" letterSpacing="-0.2" fill="#111111">Red Guild</text>
  </svg>
)

const AgoraLogo: FC = () => (
  <svg viewBox="0 0 85 36" xmlns="http://www.w3.org/2000/svg" aria-label="Agora" className="h-full w-auto">
    <path d="M4 26 L13 8 L22 26" fill="none" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="7" y1="20" x2="19" y2="20" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" />
    <text x="28" y="23" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="700" fontSize="14" letterSpacing="-0.3" fill="#111111">Agora</text>
  </svg>
)

/* ─── Data ────────────────────────────────────────────────────────────────── */

const perks = [
  { id: 'ethcc',      Logo: EthCCLogo,     label: 'Conference ticket' },
  { id: 'devcon',     Logo: DevconLogo,    label: 'Conference ticket' },
  { id: 'ethprague',  Logo: EthPragueLogo, label: 'Conference ticket' },
  { id: 'dappcon',    Logo: DappConLogo,   label: 'Conference ticket' },
  { id: 'ethglobal',  Logo: EthGlobalLogo, label: 'Conference ticket' },
  { id: 'keycard',    Logo: KeycardLogo,   label: 'Hardware wallet'   },
]

const audits = [
  { id: 'sigmaprime', Logo: SigmaPrimeLogo, label: 'Security review'    },
  { id: 'dedaub',     Logo: DedaubLogo,     label: 'Security audit'     },
  { id: 'zellic',     Logo: ZellicLogo,     label: 'Security audit'     },
  { id: 'redguild',   Logo: RedGuildLogo,   label: 'Security audit'     },
  { id: 'agora',      Logo: AgoraLogo,      label: 'DAO implementation' },
]

/* ─── Sub-components ─────────────────────────────────────────────────────── */

const LogoRow: FC<{ title: string; items: typeof perks }> = ({ title, items }) => (
  <div className="flex flex-col gap-1">
    <p className="text-[15px] font-medium text-[var(--gray-dark)]">{title}</p>
    <div className="flex flex-wrap gap-x-10 gap-y-6 items-start py-4">
      {items.map(({ id, Logo, label }) => (
        <div key={id} className="flex flex-col gap-2 w-28">
          <div className="h-8 flex items-center">
            <Logo />
          </div>
          <span className="text-xs text-[var(--gray-dark)]">{label}</span>
        </div>
      ))}
    </div>
  </div>
)

const Header: FC = () => (
  <div className="flex flex-col gap-4">
    <h2 className="text-3xl font-bold leading-[1.1] text-[var(--gray-dark)]">
      In-Kind Donations
    </h2>
    <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--gray-dark)]">
      While token donations help fund Ethereum's core protocol contributors directly, we also welcome non-financial contributions - gifts or perks ranging from conference tickets to hardware wallets.
    </h2>
    <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--gray-dark)]">
      Anything that helps reward the individuals building Ethereum's core protocol is welcome.
    </h2>
    <a
      href="mailto:contact@protocolguild.org?subject=In-Kind%20Donation%20Inquiry"
      className="text-sm text-[var(--gray-dark)] hover:opacity-70 underline w-fit"
    >
      Ready to donate a gift? Contact us!
    </a>
  </div>
)

const Logos: FC = () => (
  <div className="flex flex-col gap-6">
    <LogoRow title="MEMBER PERKS" items={perks} />
    <LogoRow title="AUDITS & SOFTWARE" items={audits} />
  </div>
)

const InKindAppreciation = { Header, Logos }
export default InKindAppreciation
