import React from "react";
import Player from "./player";
import { useContext } from "react";
import CreatePlaylist from "./createPlaylist";

const Mainscreen = ({ initialSelectedIcon }) => {
  initialSelectedIcon = initialSelectedIcon.toLowerCase();
  console.log(initialSelectedIcon);
  if (initialSelectedIcon === "home") return <Player />;
  else if (initialSelectedIcon === "lib") return <CreatePlaylist />;
  else return <Player />;
};

export default Mainscreen;
