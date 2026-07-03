import { FC } from 'react'
import keycardImg from '../assets/images/donors/keycardblack.png'
import ethccImg from '../assets/images/donors/ethcc.svg'
import devconImg from '../assets/images/donors/devcon.svg'

/* ─── Logos ──────────────────────────────────────────────────────────────── */

const KeycardLogo: FC = () => (
  <img src={keycardImg} alt="Keycard" className="h-10 md:h-14 w-auto max-w-[140px]" />
)

const EthCCLogo: FC = () => (
  <img src={ethccImg} alt="EthCC" className="h-10 md:h-14 w-auto max-w-[140px]" />
)

const DevconLogo: FC = () => (
  <img src={devconImg} alt="Devcon" className="h-10 md:h-14 w-auto max-w-[140px]" />
)

/* ─── Data ────────────────────────────────────────────────────────────────── */

type Item = { id: string; name: string; url: string; Logo?: FC }

const perks: Item[] = [
  { id: 'ethcc',     name: 'EthCC',        url: 'https://www.protocolguild.org/blog/20260311-EthCC-2026-Welcomes-Protocol-Guild-Members', Logo: EthCCLogo  },
  { id: 'devcon',    name: 'Devcon',        url: 'https://devcon.org',    Logo: DevconLogo },
  { id: 'ethprague', name: 'ETH Prague',    url: 'https://ethprague.com'  },
  { id: 'dappcon',   name: 'DappCon',       url: 'https://dappcon.io'     },
  { id: 'ethglobal', name: 'ETHGlobal',     url: 'https://ethglobal.com'  },
  { id: 'keycard',   name: 'Keycard',       url: 'https://www.protocolguild.org/blog/20260612-keycard-shell-for-every-member', Logo: KeycardLogo },
]

const audits: Item[] = [
  { id: 'sigmaprime', name: 'Sigma Prime',  url: 'https://sigmaprime.io'    },
  { id: 'dedaub',     name: 'Dedaub',       url: 'https://dedaub.com'       },
  { id: 'zellic',     name: 'Zellic',       url: 'https://zellic.io'        },
  { id: 'redguild',   name: 'Red Guild',    url: 'https://theredguild.org'  },
  { id: 'agora',      name: 'Agora',        url: 'https://agora.xyz'        },
  { id: 'daohaus',   name: 'DAOhaus',      url: 'https://daohaus.club'     },
  { id: 'splits',    name: 'Splits',       url: 'https://splits.org'       },
]

/* ─── Sub-components ─────────────────────────────────────────────────────── */

const LogoRow: FC<{ title: string; items: Item[] }> = ({ title, items }) => (
  <div className="flex flex-col gap-1">
    <p className="text-[15px] font-medium text-[var(--gray-dark)]">{title}</p>
    <div className="flex flex-wrap gap-x-8 gap-y-4 items-center py-4">
      {items.map(({ id, name, url, Logo }) => (
        <a
          key={id}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center h-10 md:h-14 hover:opacity-70 transition-opacity"
        >
          {Logo
            ? <Logo />
            : <span className="text-sm font-medium text-[var(--gray-dark)]">{name}</span>
          }
        </a>
      ))}
    </div>
  </div>
)

const Header: FC = () => (
  <div className="flex flex-col gap-4">
    <h2 className="text-3xl font-bold leading-[1.1] text-[var(--gray-dark)]">
      Other ways to support members.
    </h2>
    <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--gray-dark)]">
      While token donations help fund Ethereum's core protocol contributors directly, we also welcome non-financial contributions - gifts or perks ranging from conference tickets to hardware wallets.
    </h2>
    <h2 className="!text-lg !font-normal !leading-[24px] !text-[var(--gray-dark)]">
      Anything that helps reward the individuals building Ethereum's core protocol is welcome.
    </h2>
    <div className="flex flex-col gap-3">
      <p className="text-sm text-[var(--gray-dark)] underline">
        Ready to donate a gift?
      </p>
      <a
        href="mailto:contact@protocolguild.org?subject=In-Kind%20Donation%20Inquiry"
        className="!bg-[var(--brand-primary)] !border-none text-[var(--gray-dark)] hover:text-[var(--gray-dark)] px-8 py-3 rounded-lg hover:!opacity-80 transition-colors w-fit inline-block no-underline text-sm font-medium"
      >
        Contact us here
      </a>
    </div>
  </div>
)

const Logos: FC = () => (
  <div className="flex flex-col gap-6">
    {perks.length > 0 && <LogoRow title="PAST SUPPORT" items={perks} />}
    {audits.length > 0 && <LogoRow title="AUDITS & SOFTWARE" items={audits} />}
  </div>
)

const InKindAppreciation = { Header, Logos }
export default InKindAppreciation
