import React, { useEffect, useCallback, useState, useRef } from "react";
import Topbar from "../components/Topbar";
import { getPlaylistAll, getSongAll } from "../config/API";
import HomePost from "../components/posts/HomePost";
import SwiperPost from "../components/posts/SwiperPost";

function Home() {
  const [playlists, setPlaylists] = useState([]);
  const [songs, setSongs] = useState([]);
  const pageRef = useRef()

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
    <div ref={pageRef}>
      <Topbar />
      <div className="p-5 px-7">
        <div>
          <label htmlFor="" className=" text-lg font-bold">
            Recently played
          </label>
          <div className=" mt-4">
            <SwiperPost array={songs} />
          </div>
        </div>
        <div className="mt-9">
          <label htmlFor="" className=" text-lg font-bold">
            Recently played
          </label>
          <div className=" mt-4">
            <SwiperPost array={[...songs, ...songs]} />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="" className=" text-lg font-bold">
            Recently played
          </label>
          <div className="grid grid-cols-12 gap-3 mt-4">
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
        <div className="mt-4">
          <label htmlFor="" className=" text-lg font-bold">
            Recently played
          </label>
          <div className="grid grid-cols-12 gap-7 mt-4">
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
