import { useWeb3Modal } from '@web3modal/wagmi/react';
import { getDefaultProvider } from 'ethers';
import { createPublicClient, http } from 'viem';
import { mainnet } from 'viem/chains';
import { useAccount } from 'wagmi';
import Web3 from 'web3';
const App = function () {
  // 4. Use modal hook
  const { open } = useWeb3Modal()
  const { isConnected } = useAccount();
  // const web3 = new Web3(window.ethereum)
  // const provider = getDefaultProvider()
  // const client = createPublicClient({
  //   chain: mainnet,
  //   transport: http()
  // })
  // console.log('=provider', provider)
  // console.log('=web3.currentProvider', web3.currentProvider)
  // console.log('=client', client)
  console.log('=window.ethereum=')
  console.log(window.ethereum)
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
      <button onClick={() => open()}>Open Connect Modal</button>
      <button onClick={() => open({ view: 'Networks' })}>Open Network Modal</button>
      <div>{isConnected ? "connected" : "unconnected"}</div>
    </div>
  )
}
export default App