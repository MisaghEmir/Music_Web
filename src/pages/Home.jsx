import React, { useEffect, useCallback, useState } from "react";
import Topbar from "../components/Topbar";
import { getPlaylistAll, getSongAll } from "../config/API";
import HomePost from "../components/posts/HomePost";

function Home() {
  const [playlists, setPlaylists] = useState([]);
  const [songs, setSongs] = useState([]);

  const getPlaylist = useCallback(async () => {
    const playlistData = await getPlaylistAll();
    const songData = await getSongAll();
    setPlaylists(playlistData.data);
    setSongs(songData.data);
  }, []);

  useEffect(() => {
    getPlaylist();
  }, [getPlaylist]);
  return (
    <div>
      <Topbar />
      <div className="p-5 px-7">
        <div>
          <label htmlFor="">Recently played</label>
          <div className="grid grid-cols-12">
            {songs.map((item, index) => (
              <div className="grid grid-cols-12 gap-7 mt-7" key={index}>
                <HomePost item={item} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <label htmlFor="" className=" text-lg font-bold">
            Recently played
          </label>
          <div className="grid grid-cols-12 gap-7 mt-7">
            {songs.map((item, index) => (
              <>
                <div className=" col-span-3" key={index}>
                  <HomePost item={item} />
                </div>
                <div className=" col-span-3" key={index}>
                  <HomePost item={item} />
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
