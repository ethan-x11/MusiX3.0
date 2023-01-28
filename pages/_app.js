import '../styles/globals.css'
import dynamic from 'next/dynamic'
require('@solana/wallet-adapter-react-ui/styles.css') 
import { Context, Provider } from '../context/context'

const style = {
  loginContainer: `w-full h-full flex flex-col justify-center items-center pb-48`,
  loginContent: `text-3xl font-bold text-center mt-24`,
}

const loading = (
  <div className={style.loginContainer}>
    <div className={style.loginContent}>Loading...</div>
  </div>
)

const WalletConnectionProvider = dynamic(() => import('../context/WalletConnectionProvider'), { ssr: false, loading: () => loading })

function MyApp({ Component, pageProps }) {
  return (
  <WalletConnectionProvider>
    <Provider>
      <Component {...pageProps} />
    </Provider>
  </WalletConnectionProvider>
  )
}

export default MyApp
