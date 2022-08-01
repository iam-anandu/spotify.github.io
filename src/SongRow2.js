import React from "react";
import "./SongRow2.css";

function SongRow2({ artist }) {
  return (
    <div className="body__artist">
      <img
        className="songRow2__image"
        src={artist.images[0].url}
        alt="artist"
      />
      <h4>{artist.name}</h4>
    </div>
  );
}

export default SongRow2;
