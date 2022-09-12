import React from "react";

function SearchCard({
  id,
  image,
  title,
  releaseDate,
  rating,
  watchlist,
  setWatchlist,
}) {
  const x = true;
  const movieObj = {
    id: id,
    image: image,
    title: title,
    releaseDate: releaseDate,
    rating: rating,
  };

  return (
    <div className="searchCard">
      <img
        className="searchCardImg"
        src={`https://image.tmdb.org/t/p/w500/${image}`}
      />
      <div className="searchCardInfo">
        <p className="searchCardInfo-title">{title}</p>
        <p>{releaseDate && releaseDate.slice(0, 4)}</p>
        <p>{rating > 0 ? rating : ""}</p>
        <button
          onClick={() =>
            setWatchlist((prevList) =>
              prevList.some((movie) => movie.id === movieObj.id)
                ? prevList
                : [...prevList, movieObj]
            )
          }
          className="btn-watchlist-add"
          disabled={
            watchlist.some((movie) => movie.id === movieObj.id) ? true : false
          }
        >
          Add to watchlist
        </button>
      </div>
    </div>
  );
}

export default SearchCard;
