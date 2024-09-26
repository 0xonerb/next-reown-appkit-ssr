'use client'

import { useAccount } from 'wagmi'

const compactHash = (hash: string) => {
  return hash.slice(0, 7) + '...' + hash.slice(-5)
}

export const ConnectButton = () => {
  const account = useAccount()

  const compactAddress = compactHash(account.address || '')

  return (
    <div>
      <span className="text-black">{compactAddress}</span>
      <w3m-button />
    </div>
  )
}
