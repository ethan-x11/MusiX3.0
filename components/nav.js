import NavLink from "./navLink";
import Recents from "./recents";
import { useContext } from "react";
import { Context } from "../context/context";

const styles = {
  nav: `bg-black h-screen w-52 p-5 py-10 flex-[0.7] flex-col overflow-hidden`,
  link: `hover:text-[#fff]`,
  playlistName: `text-[#b3b3b3] cursor-default text-sm hover:text-[#fff]`,
};

const Nav = () => {
  const { changeDisp } = useContext(Context);
  const options = "home;";
  return (
    <div className={styles.nav}>
      <div className="mb-10">
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
        <button onClick={() => changeDisp("lib")}>
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
    </div>
  );
};

export default Nav;
