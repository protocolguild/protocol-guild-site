import { FC, useState, useEffect } from 'react'
import { useAccount, useChainId, useDisconnect, useSendTransaction, useSwitchChain } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { parseEther } from 'viem'
import { mainnet, arbitrum, base, optimism, polygon } from 'wagmi/chains'
import { DONATION_ADDRESSES } from '../config/wagmi'

const CHAINS = [
  { chain: mainnet,  label: 'Mainnet',  logo: '⟠' },
  { chain: base,     label: 'Base',     logo: '🔵' },
  { chain: arbitrum, label: 'Arbitrum', logo: '🔷' },
  { chain: optimism, label: 'Optimism', logo: '🔴' },
  { chain: polygon,  label: 'Polygon',  logo: '🟣' },
]

const PRESET_AMOUNTS = ['0.01', '0.1', '0.5', '1']

const DonationWidget: FC = () => {
  const { isConnected, address } = useAccount()
  const chainId = useChainId()
  const { switchChain } = useSwitchChain()
  const { disconnect } = useDisconnect()
  const { sendTransaction, isPending, isSuccess, isError, error, reset } = useSendTransaction()

  const [selectedChainId, setSelectedChainId] = useState<number>(mainnet.id)
  const [amount, setAmount] = useState('')
  const [customAmount, setCustomAmount] = useState(false)

  const donationInfo = DONATION_ADDRESSES[selectedChainId]

  // Log errors to console so they're visible in DevTools even before staging rebuilds
  useEffect(() => {
    if (isError && error) {
      console.error('[DonationWidget] sendTransaction error:', error)
    }
  }, [isError, error])

  const handleChainSelect = (id: number) => {
    setSelectedChainId(id)
    reset()
  }

  const handleAmountSelect = (value: string) => {
    setAmount(value)
    setCustomAmount(false)
    reset()
  }

  const handleDonate = async () => {
    if (!amount || !donationInfo) return
    // Switch to the selected chain if needed
    if (chainId !== selectedChainId) {
      switchChain({ chainId: selectedChainId })
      return
    }
    sendTransaction({
      to: donationInfo.address as `0x${string}`,
      value: parseEther(amount),
      // Set explicit gas limit to bypass wagmi's public-RPC pre-flight estimation,
      // which can return inflated values and falsely fail the balance check.
      // 0xSplits vesting contracts use ~80-130k gas; 250k gives comfortable headroom.
      gas: BigInt(250_000),
    })
  }

  const needsChainSwitch = isConnected && chainId !== selectedChainId

  return (
    <div className="w-full rounded-2xl border border-[var(--gray-light)] bg-white p-6 flex flex-col gap-5">

      {/* Chain selector */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--gray-mid)] mb-2">
          Network
        </p>
        <div className="flex flex-wrap gap-2">
          {CHAINS.map(({ chain, label, logo }) => (
            <button
              key={chain.id}
              onClick={() => handleChainSelect(chain.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium border transition-all focus:outline-none ${
                selectedChainId === chain.id
                  ? '!bg-[var(--brand-primary)] border-[var(--brand-primary)] !text-white'
                  : '!bg-white border-[var(--gray-light)] !text-[var(--gray-dark)] hover:border-[var(--brand-primary)]'
              }`}
            >
              <span>{logo}</span>
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Address info */}
      {donationInfo && (
        <div className="rounded-lg bg-[#f5f8fa] px-4 py-3 flex flex-col gap-1">
          <p className="text-xs text-[var(--gray-mid)]">
            {donationInfo.type === 'vesting'
              ? '1-year immutable vesting contract'
              : 'Multisig — funds bridged periodically to vesting contract'}
          </p>
          <p className="text-xs font-mono text-[var(--gray-dark)] break-all">
            {donationInfo.address}
          </p>
        </div>
      )}

      {/* Amount selector */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--gray-mid)] mb-2">
          Amount (ETH)
        </p>
        <div className="flex flex-wrap gap-2 mb-2">
          {PRESET_AMOUNTS.map((preset) => (
            <button
              key={preset}
              onClick={() => handleAmountSelect(preset)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all focus:outline-none ${
                amount === preset && !customAmount
                  ? '!bg-[var(--brand-primary)] border-[var(--brand-primary)] !text-white'
                  : '!bg-white border-[var(--gray-light)] !text-[var(--gray-dark)] hover:border-[var(--brand-primary)]'
              }`}
            >
              {preset} ETH
            </button>
          ))}
          <button
            onClick={() => { setCustomAmount(true); setAmount(''); reset() }}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all focus:outline-none ${
              customAmount
                ? '!bg-[var(--brand-primary)] border-[var(--brand-primary)] !text-white'
                : '!bg-white border-[var(--gray-light)] !text-[var(--gray-dark)] hover:border-[var(--brand-primary)]'
            }`}
          >
            Custom
          </button>
        </div>
        {customAmount && (
          <input
            type="number"
            min="0"
            step="0.001"
            placeholder="Enter amount in ETH"
            value={amount}
            onChange={(e) => { setAmount(e.target.value); reset() }}
            className="w-full border border-[var(--gray-light)] rounded-lg px-3 py-2 text-sm text-[var(--gray-dark)] focus:outline-none focus:border-[var(--brand-primary)]"
          />
        )}
      </div>

      {/* CTA */}
      {!isConnected ? (
        <ConnectButton label="Connect Wallet to Donate" />
      ) : (
        <div className="flex flex-col gap-2">
          <button
            onClick={handleDonate}
            disabled={!amount || isPending}
            className="w-full !bg-[var(--brand-primary)] !border-none !text-[var(--gray-dark)] font-semibold px-6 py-3 rounded-lg hover:!opacity-80 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {isPending
              ? 'Confirm in wallet…'
              : needsChainSwitch
              ? `Switch to ${CHAINS.find(c => c.chain.id === selectedChainId)?.label}`
              : `Donate${amount ? ` ${amount} ETH` : ''}`}
          </button>
          <div className="flex items-center justify-between px-1">
            <p className="text-xs text-[var(--gray-mid)] font-mono truncate max-w-[70%]">
              {address ? `${address.slice(0, 6)}…${address.slice(-4)}` : ''}
            </p>
            <button
              onClick={() => disconnect()}
              className="text-xs !bg-transparent !border-none !text-[var(--gray-mid)] hover:!text-[var(--gray-dark)] underline p-0 transition-colors"
            >
              Disconnect
            </button>
          </div>
        </div>
      )}

      {/* Status */}
      {isSuccess && (
        <p className="text-sm text-green-600 text-center">
          ✓ Transaction sent — thank you for supporting Ethereum core development!
        </p>
      )}
      {isError && (
        <div className="text-sm text-red-500 text-center flex flex-col gap-1">
          <p>Transaction failed or was rejected.</p>
          {error && (
            <p className="text-xs font-mono break-all text-red-400">
              {(error as any)?.shortMessage || (error as any)?.message || String(error)}
            </p>
          )}
        </div>
      )}

      <p className="text-xs text-[var(--gray-mid)] text-center">
        ETH and ERC-20 tokens accepted.{' '}
        <a
          href="/docs/03-donate"
          className="underline hover:text-[var(--gray-dark)]"
        >
          View all donation addresses →
        </a>
      </p>
    </div>
  )
}

export default DonationWidget
