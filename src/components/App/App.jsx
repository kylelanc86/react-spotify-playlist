import { useState } from "react";
import styles from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import { Spotify } from "../../util/Spotify/Spotify";

function App() {
  const [searchResults, setSearchResults] = useState([
    {
      name: "Searched Tracks Will Appear Here",
      artist: "Artist",
      album: "Album",
      id: 1,
    },
  
    // {
    //   name: "Otherside",
    //   artist: "RHCP",
    //   album: "Californication",
    //   id: 1,
    // },
    // {
    //   name: "1979",
    //   artist: "Smashing Pumpkins",
    //   album: "Mellon Collie & the Infinite Sadness",
    //   id: 2,
    // },
    // {
    //   name: "Neptune",
    //   artist: "InMe",
    //   album: "Overgrown Eden",
    //   id: 3,
    // },
    // {
    //   name: "Someday",
    //   artist: "The Strokes",
    //   album: "The Strokes",
    //   id: 4,
    // },
  ]);

  const [playlistName, setPlaylistName] = useState("Playlist Name");
  const [playlistTracks, setPlaylistTracks] = useState([
    // {
    //   name: "Otherside",
    //   artist: "RHCP",
    //   album: "Californication",
    //   id: 1,
    // },
    // {
    //   name: "1979",
    //   artist: "Smashing Pumpkins",
    //   album: "Mellon Collie & the Infinite Sadness",
    //   id: 2,
    // },
  ]);

  const addTrack = (track) => {
    const existingTrack = playlistTracks.find((t) => t.id === track.id);
    const newTrack = playlistTracks.concat(track);

    if (existingTrack) {
      alert("Track Already in Playlist");
    } else {
      setPlaylistTracks(newTrack);
    }
  };

  const removeTrack = (track) => {
    const existingTrack = playlistTracks.filter((t) => t.id !== track.id);
    setPlaylistTracks(existingTrack);
  };

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  }

  const savePlaylist = () => {
    const trackURIs = playlistTracks.map((t) => t.uri);
    Spotify.savePlaylist(playlistName, trackURIs).then(() => {
      updatePlaylistName("New Playlist")
      setPlaylistTracks([]);
    });
  }

  const search = (term) => {
    Spotify.search(term).then(result => setSearchResults(result))
    console.log(term);
  }


  return (
    <div>
      <h1>
        Ja<span className={styles.highlight}>mmm</span>ing
      </h1>
      <div className={styles.App}>
        <SearchBar onSearch={search}/>

        <div className={styles["App-playlist"]}>
          <SearchResults userSearchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onDelete={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
