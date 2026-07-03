import { FC } from 'react'

type Badge = {
  id: string
  name: string
  symbol: string
}

const badges: Badge[] = [
  { id: '000000000001', name: 'EigenLayer',       symbol: 'EIGEN'  },
  { id: '000000000002', name: 'Ether.fi',          symbol: 'ETHFI'  },
  { id: '000000000003', name: 'Taiko',             symbol: 'TKO'    },
  { id: '000000000004', name: 'Puffer',            symbol: 'PUFFER' },
  { id: '000000000005', name: 'PWN DAO',           symbol: 'PWN'    },
  { id: '000000000006', name: 'Shutter DAO',       symbol: 'SHU'    },
  { id: '000000000007', name: 'Shape',             symbol: 'ETH'    },
  { id: '000000000008', name: 'Aztec Foundation',  symbol: 'AZT'    },
]

const BadgeCard: FC<Badge> = ({ id, name, symbol }) => (
  <div
    className="flex flex-col justify-between border border-[var(--gray-light)] rounded-lg p-4 bg-[var(--gray-lightest)]"
    style={{ width: '152px', minHeight: '136px' }}
  >
    <p className="text-[8px] font-medium tracking-[0.18em] uppercase text-[var(--gray-mid)]">
      Protocol Guild Pledge
    </p>
    <div className="flex flex-col gap-1">
      <p className="text-sm font-bold text-[var(--gray-dark)] leading-tight mb-1">{name}</p>
      <p className="text-[8px] tracking-[0.12em] font-mono uppercase text-[var(--gray-mid)]">
        BADGE ID {id}
      </p>
      <p className="text-[8px] tracking-[0.12em] font-mono uppercase text-[var(--gray-mid)]">
        ${symbol}
      </p>
    </div>
  </div>
)

const PledgeNFTPreview: FC = () => (
  <div className="flex flex-col gap-3 pt-6 border-t border-[var(--gray-light)] mt-2">
    <div className="flex flex-row justify-between items-baseline">
      <p className="text-[15px] font-medium text-[var(--gray-dark)]">ON-CHAIN CREDENTIALS</p>
      <a
        href="https://github.com/protocolguild/pg-nft"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[13px] text-[var(--gray-mid)] hover:opacity-70 underline"
      >
        View on GitHub
      </a>
    </div>
    <p className="text-sm text-[var(--gray-mid)] leading-[1.5]">
      Each 1% pledge partner receives a permanent on-chain NFT credential, stored entirely on Ethereum.
    </p>
    <div className="flex flex-wrap gap-2 mt-1">
      {badges.map(b => <BadgeCard key={b.id} {...b} />)}
    </div>
  </div>
)

export default PledgeNFTPreview
