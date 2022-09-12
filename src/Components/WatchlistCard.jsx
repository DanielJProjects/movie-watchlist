import React from "react";
import { MdClear } from "react-icons/md";

function WatchlistCard({
  id,
  title,
  image,
  releaseDate,
  rating,
  setWatchlist,
}) {
  function removeWatchlistCard(movieId) {
    setWatchlist((prev) =>
      prev.filter((movie) => {
        return movie.id !== movieId;
      })
    );
  }

  return (
    <div key={id} className="watchlistCard">
      <div className="btn-img-container">
        <div className="btn-del-container">
          <button
            onClick={() => removeWatchlistCard(id)}
            className="btn-watchListCard-del"
          >
            <MdClear />
          </button>
        </div>
        <img
          className="watchlistCardImg"
          src={`https://image.tmdb.org/t/p/w500/${image}`}
        />
      </div>
      <div className="watchlistCardInfo">
        <p className="watchlistCardInfo-title">{title}</p>
        <p>{releaseDate.slice(0, 4)}</p>
        <p>{rating > 0 ? rating : ""}</p>
      </div>
    </div>
  );
}

export default WatchlistCard;
