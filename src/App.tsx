import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount } from 'wagmi';
const App = function () {
  // 4. Use modal hook
  const { open } = useWeb3Modal()
  const { isConnected } = useAccount();
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
      <button onClick={() => open()}>Open Connect Modal</button>
      <button onClick={() => open({ view: 'Networks' })}>Open Network Modal</button>
      <div>{isConnected ? "connected" : "unconnected"}</div>
    </div>
  )
}
export default App