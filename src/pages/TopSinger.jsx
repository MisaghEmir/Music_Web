import React, { useEffect, useCallback, useState } from "react";
import { getSongAll } from "../config/API";
import TopSingers from "../components/TopSingers";

function TopSinger() {
  const [songs, setSongs] = useState([]);

  const getPlaylist = useCallback(async () => {
    const songData = await getSongAll();
    setSongs(songData.data);
  }, []);

  useEffect(() => {
    getPlaylist();
  }, [getPlaylist]);
  return (
    <div className="p-3">
      <div>
        <p>Top Artist</p>
      </div>
      <div className="mt-5">
        {songs.map((item, index) => (
          <TopSingers item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default TopSinger;
