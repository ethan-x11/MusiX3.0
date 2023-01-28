import React, { useState } from "react";

export default function CreatePlaylist() {
  const [playlistName, setPlaylistName] = useState("");
  const [songList, setSongList] = useState([]);

  const handlePlaylistNameChange = (e) => {
    setPlaylistName(e.target.value);
  };

  const handleSongAddition = (e) => {
    e.preventDefault();
    setSongList([...songList, e.target.song.value]);
    e.target.song.value = "";
  };

  const handlePlaylistCreation = (e) => {
    e.preventDefault();
    // Code to handle the creation of the playlist and sending it to the backend
    alert(`Playlist "${playlistName}" created with songs: ${songList}`);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="bg-white p-6 rounded-lg shadow-md"
        onSubmit={handlePlaylistCreation}
      >
        <h2 className="text-lg font-medium mb-4">Create a Playlist</h2>
        <label className="block mb-2 text-gray-700">
          Playlist Name:
          <input
            className="border p-2 rounded-lg w-full"
            type="text"
            value={playlistName}
            onChange={handlePlaylistNameChange}
          />
        </label>
        <h3 className="text-lg font-medium mb-4">Add Songs</h3>
        <div className="mb-4">
          <form onSubmit={handleSongAddition}>
            <label className="block text-gray-700 mb-2">
              Song:
              <input
                className="border p-2 rounded-lg w-full"
                type="text"
                name="song"
              />
            </label>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
              Add Song
            </button>
          </form>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-medium mb-2">Song List</h4>
          <ul className="list-inside">
            {songList.map((song, index) => (
              <li key={index} className="text-gray-700">
                {song}
              </li>
            ))}
          </ul>
        </div>
        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg">
          Create Playlist
        </button>
      </form>
    </div>
  );
}
