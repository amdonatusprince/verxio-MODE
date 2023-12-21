import { Chain } from 'wagmi';

export const ModeMainnet = {
  id: 34443,
  name: 'Mode Mainnet',
  network: 'MODE',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    public: { http: ['https://mainnet.mode.network'] },
    default: { http: ['https://mainnet.mode.network'] },
  },
  blockExplorers: {
    etherscan: { name: 'MODE Scan', url: 'https://explorer.mode.network/' },
    default: { name: 'MODE Scan', url: 'https://explorer.mode.network/' },
  },

} as const satisfies Chain