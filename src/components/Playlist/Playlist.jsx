import React from "react";
import styles from "./playlist.module.css"
import Tracklist from "../Tracklist/Tracklist"

function Playlist(props) {
  const handleNameChange = ({target}) => {
    props.onNameChange(target.value);
  }

  return (
    <div className={styles.Playlist}>
      <input defaultValue={"New Playlist"} onChange={handleNameChange}/>
        <Tracklist 
          userSearchResults={props.playlistTracks}
          onDelete={props.onDelete}
          isRemoval ={false}
        />
      <button className={styles['Playlist-save']} onClick={props.onSave}> SAVE TO SPOTIFY </button>
    </div>
  );
}

export default Playlist;