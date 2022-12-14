import React from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";
import SongRow2 from "./SongRow2";

function Body({ spotify }) {
  const [{ discover_weekly, artists }, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img
          // src={discover_weekly?.images[0].url}
          src="https://www.hypebot.com/wp-content/uploads/2020/07/discover-weekly.png"
          alt="discover-weekly"
        />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {/* List of Songs? */}
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}

        <h2 className="songRow2__title">Suggested artists</h2>
        <div className="songRow2__songs">
          {artists?.items.map((artist) => (
            <SongRow2 artist={artist} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;
