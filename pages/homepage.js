import { useContext } from "react";
import Nav from "../components/nav";
import Player from "../components/player";
import Activity from "../components/activity";
import Head from "next/head";
import Mainscreen from "../components/mainscreen";
import CreatePlaylist from "../components/createPlaylist";
import { Context } from "../context/context";

const style = {
  wrapper: `flex justify-center max-h-screen select-none bg-[#15202b] text-white`,
  content: `max-w-[1400px] w-2/3 flex justify-between`,
  nav: `overflow-hidden`,
  main: `no-scrollbar overflow-y-scroll`,
  act: `overflow-hidden`,
};

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Musix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={style.wrapper}>
        <Nav className={style.nav} />
        <Mainscreen className={style.main} initialSelectedIcon={"Home"} />
        <Activity className={style.act} />
      </div>
    </div>
  );
};

export default HomePage;
