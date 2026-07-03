import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { mainnet, arbitrum, base, optimism, polygon } from 'wagmi/chains'

// Replace with your WalletConnect Project ID from https://cloud.walletconnect.com
const WALLETCONNECT_PROJECT_ID = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || 'YOUR_WALLETCONNECT_PROJECT_ID'

export const wagmiConfig = getDefaultConfig({
  appName: 'Protocol Guild',
  projectId: WALLETCONNECT_PROJECT_ID,
  chains: [mainnet, base, arbitrum, optimism, polygon],
  ssr: false,
})

// Donation addresses per chain — 1-year vesting contracts where available, multisig otherwise
export const DONATION_ADDRESSES: Record<number, { address: string; type: 'vesting' | 'multisig' }> = {
  [mainnet.id]: {
    address: '0x4EA88fa76848a8BBAB72613d4171df1eBcf68399',
    type: 'vesting',
  },
  [base.id]: {
    address: '0xffaaCCFe120f3fC47f42102cF4F28e837cd49A20',
    type: 'vesting',
  },
  [arbitrum.id]: {
    address: '0x8ee2AcfEbd311c1cF8d74448E207B4960EaCf599',
    type: 'vesting',
  },
  [optimism.id]: {
    address: '0x7a489D5Fedd52f561b73EC8B0a164c0BD36036A2',
    type: 'vesting',
  },
  [polygon.id]: {
    address: '0xdddd576bAF106bAAe54bDE40BCac602bB4a7cf79',
    type: 'multisig',
  },
}
