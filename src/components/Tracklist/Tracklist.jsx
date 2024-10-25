import React from "react";
import styles from "./tracklist.module.css"
import Track from "../Track/Track"

function Tracklist (props) {
    return (
      <div className={styles.Tracklist}>
        {props.userSearchResults.map(track => (
          <Track track={track} key={track.id} onAdd={props.onAdd} onDelete={props.onDelete} isRemoval={props.isRemoval}/>
        ))}
      </div>
    );
}

export default Tracklist;