import React from "react";
import Player from "./player";
import { useContext } from "react";
import CreatePlaylist from "./createPlaylist";
import listsPlay from "./listsPlay";

const Mainscreen = ({ initialSelectedIcon }) => {
  if (initialSelectedIcon === "home") return <Player />;
  else if (initialSelectedIcon === "explore") return <CreatePlaylist />;
  else
};

export default Mainscreen;
