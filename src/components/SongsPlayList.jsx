import React from "react";
import { createRandomSongs } from "../data/Data";
import { useDispatch, useSelector } from "react-redux";
import { addSong, removeSong } from '../Redux/Slice/SongsSlice'

const SongsPlayList = () => {
  const dispatch = useDispatch()
  const SongPlayList = useSelector((state) => {
    return state.songs;
  });

  
  const handelSongAdd = (song) => {
    dispatch(addSong(song))
  }

  const handelSongRemove =(song)=>{
    dispatch(removeSong(song))
  }

  const renderSongs = SongPlayList.map((song, index) => {
    return <li key={index}>
      {song}
      <button onClick={()=>handelSongRemove(song)}>Remove Song</button>
      </li>
  });

  return (
    <div>
      <div>
        <button
          onClick={() => {
            handelSongAdd(createRandomSongs())
          }}
          >
          Add song
        </button>
      </div>
      <ul>{renderSongs}</ul>
    </div>
  );
};

export default SongsPlayList;
