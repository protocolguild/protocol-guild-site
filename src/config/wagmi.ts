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

// Donation addresses per chain — vesting contracts where available, multisig otherwise
export const DONATION_ADDRESSES: Record<number, { address: string; type: 'vesting' | 'multisig' }> = {
  [mainnet.id]: {
    address: '0x25941dC771bB64514Fc8abBce970307Fb9d477e9',
    type: 'vesting',
  },
  [base.id]: {
    address: '0xd16713A5D4Eb7E3aAc9D2228eB72f6f7328FADBD',
    type: 'vesting',
  },
  [arbitrum.id]: {
    address: '0x7F8DCFd764bA8e9B3BA577dC641D5c664B74c47b',
    type: 'vesting',
  },
  [optimism.id]: {
    address: '0x58ae0925077527a87D3B785aDecA018F9977Ec34',
    type: 'vesting',
  },
  [polygon.id]: {
    address: '0xdddd576bAF106bAAe54bDE40BCac602bB4a7cf79',
    type: 'multisig',
  },
}
