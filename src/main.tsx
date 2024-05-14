import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Web3ModalProvider } from './context/index.tsx'
import VConsole from 'vconsole';

new VConsole();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Web3ModalProvider>
      <App />
    </Web3ModalProvider>
  </React.StrictMode>,
)
