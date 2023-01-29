import NavLink from "./navLink";
import Recents from "./Recents";
import { useContext } from "react";
import { Context } from "../context/context";
import UploadButton from "./uploadButton";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const styles = {
  nav: `h-screen w-52 p-5 py-10 flex-[0.75] flex-col overflow-hidden`,
  link: `hover:text-[#fff]`,
  playlistName: `text-[#b3b3b3] cursor-default text-sm hover:text-[#fff]`,
  profile: `flex items-center bg-black rounded-full p-1 px-3 bg-opacity-50 cursor-pointer hover:bg-opacity-75 mb-2`,
  profileAvatarContainer: `w-7 h-7 rounded-full -ml-2 mr-3`,
  profileWrapper: `h-80 flex flex-col justify-end`,
};

const Nav = () => {
  const wallet = useWallet();
  const { changeDisp } = useContext(Context);
  const options = "home;";

  return (
    <div className={styles.nav}>
      <div className="mb-10 flex flex-col">
        <button onClick={() => changeDisp("home")}>
          <NavLink
            type="button"
            icon="assets/home.svg"
            title="Home"
            className={styles.link}
          />
        </button>
        <button onClick={() => changeDisp("explore")}>
          <NavLink
            icon="assets/search.svg"
            title="Explore"
            className={styles.link}
          />
        </button>
        {/* <button onClick={() => changeDisp("lib")}> */}
        <button>
          <NavLink
            icon="assets/playlist.svg"
            title="Your library"
            className={styles.link}
          />
        </button>
      </div>

      <div className="mb-10 border-b border-gray-100/10">
        <NavLink
          icon="assets/add.svg"
          title="Create Playlist"
          className={styles.link}
        />
        {/* <NavLink icon='assets/heart.svg' title='Liked Songs' className={styles.link} /> */}
      </div>

      <div className="mt-5 leading-8 flex flex-col gap-[10px]">
        <p className="text-xl">Recent Uploads</p>
        <div className={styles.playlistName}>
          <Recents />
        </div>
      </div>
      <div className={styles.profileWrapper}>
        <div className={styles.profile}>
          <div className={styles.profileAvatarContainer}>
            <img alt="" src="assets/avatar.jpg" className="rounded-full" />
          </div>
          <div>
            {wallet.publicKey.toString().slice(0, 4)} ... $
            {wallet.publicKey.toString().slice(-5)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
