import React from 'react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

const styles = {
    loginPage: `w-screen h-screen flex justify-center flex-col items-center bg-gray-200`,
    text: `text-4xl font-bold text-gray-700`
}

const Login = () => {
  return (
    <div className={styles.loginPage}>
        <p className={styles.text}> Login using Phantom Wallet to Access </p>
        { /* <WalletMultiButton /> */}
    </div>
  )
}

export default Login