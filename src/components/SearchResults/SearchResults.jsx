import React from "react";
import Tracklist from "../Tracklist/Tracklist"
import styles from "./searchresults.module.css"

function SearchResults (props) {
    return (
        <div className={styles.SearchResults}>
          <Tracklist userSearchResults = {props.userSearchResults} onAdd={props.onAdd} isRemoval={true} />
      </div>
        );
}

export default SearchResults;