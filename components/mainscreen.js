import React from "react";
import Player from "./player";
import { useContext } from "react";
import CreatePlaylist from "./createPlaylist";

const Mainscreen = ({ initialSelectedIcon }) => {
  console.log(initialSelectedIcon);
  if (initialSelectedIcon === "home") return <Player />;
  else if (initialSelectedIcon === "playlist") return <CreatePlaylist />;
};

export default Mainscreen;
