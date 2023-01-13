import React from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { Wallet } from '@project-serum/anchor'
import Payments from './payments'

const styles = {
    loginPage: `w-screen h-screen flex justify-center flex-col items-center bg-gray-200`,
    text: `text-4xl font-bold text-gray-700 mb-10`
}

const Login = () => {

    const wallet = useWallet()

    if(wallet.connected) return (<Payments />)

    return (
    <div className={styles.loginPage}>
        <p className={styles.text}> Login using Phantom Wallet to Access </p>
        <WalletMultiButton />
    </div>
    )
}

export default Login