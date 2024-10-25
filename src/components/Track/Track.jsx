import React from "react";
import styles from "./track.module.css";

function Track(props) {
  const renderAction = () => {
    if (props.isRemoval) {
      return (
        <button className={styles["Track-action"]} onClick={passTrack}>
          +
        </button>
      );
    } else {
      return (
        <button className={styles["Track-action"]} onClick={deleteTrack}>
          -
        </button>
      );
    }
  };

  const passTrack = () => {
    props.onAdd(props.track);
  };

  const deleteTrack = () => {
    props.onDelete(props.track);
  };
  
  return (
    <div className={styles.Track}>
      <div className={styles["Track-information"]}>
        <h3>{props.track.name}</h3>
        <p>
          {" "}
          {props.track.artist} | {props.track.album}{" "}
        </p>
      </div>
      {renderAction()}
    </div>
  );
}

export default Track;
