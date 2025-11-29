import { createConfig, http } from 'wagmi';
import { sepolia } from 'wagmi/chains';

// Create wagmi config with multiple chains
// Add more chains here if your contract is deployed on a different network
export const wagmiConfig = createConfig({
  chains: [sepolia],
  transports: {
    [sepolia.id]: http(),
  },
});

