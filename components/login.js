import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Wallet } from "@project-serum/anchor";
import Payments from "./payments";

const styles = {
  loginPage: `w-screen h-screen flex justify-center flex-col items-center space-y-80`,
  text: `text-4xl font-bold text-gray-700 mb-10 drop-shadow-2xl`,
  textr: `text-9xl font-brush text-red-600 mb-10 drop-shadow-2xl`,
};

const Login = () => {
  const wallet = useWallet();

  if (wallet.connected) return <Payments />;

  return (
    <div
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/musical-pentagram-sound-waves-notes-background_1017-33911.jpg?w=2000')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className={styles.loginPage}>
        <p className={styles.textr}> MusiX 3.0 </p>
        {/* <button className={styles.button}> */}
            <WalletMultiButton />
        {/* </button> */}
        {/* <p className={styles.text}> Login using Phantom Wallet to Access </p> */}
      </div>
    </div>
  );
};

export default Login;
