import React, { useState, useEffect } from "react";

function listsPlay() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    fetch("/api/playlists")
      .then((response) => response.json())
      .then((data) => setPlaylists(data));
  }, []);

  return (
    <div className="bg-gray-200 flex flex-col">
      <h1 className="text-3xl font-medium text-center m-4">Saved Playlists</h1>
      <div className="flex flex-wrap justify-center">
        {playlists.map((playlist, index) => (
          <div className="bg-white p-4 rounded-lg m-4 w-64" key={index}>
            <h2 className="text-xl font-medium">{playlist.name}</h2>
            <ul className="text-sm">
              {playlist.tracks.map((track, index) => (
                <li className="pb-2" key={index}>
                  {track.title} - {track.artist}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default listsPlay;
