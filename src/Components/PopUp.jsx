import React from "react";
import Search from "./Search";
import SearchCard from "./SearchCard";
import { MdClear } from "react-icons/md";
import PhoneModal from "./PhoneModal";

function PopUp({ setPopUp, watchlist, setWatchlist }) {
  const [data, setData] = React.useState([]);
  const [query, setQuery] = React.useState("");

  React.useEffect(() => {
    if (query !== "") {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=cd663ff16262f94abb03a5ec12dbd39e&language=en-US&query=${query}&page=1&include_adult=false`
      )
        .then((res) => res.json())
        .then((data) => setData(data.results));
    }
  }, [query]);

  const movies = data.length
    ? data.map((movie) => (
        <div key={movie.id} className="searchCardItem">
          <SearchCard
            id={movie.id}
            title={movie.title}
            image={movie.poster_path}
            releaseDate={movie.release_date}
            rating={movie.vote_average}
            watchlist={watchlist}
            setWatchlist={setWatchlist}
          />
        </div>
      ))
    : "";

  return (
    <>
      {window.innerWidth < 500 ? (
        <PhoneModal setPopUp={setPopUp} setQuery={setQuery} movies={movies} />
      ) : (
        <>
          <div className="outer-div">
            <div className="popup">
              <div className="header">
                <div className="btn-close">
                  <button
                    className="btn-close-popup"
                    onClick={() => setPopUp(false)}
                  >
                    <MdClear />
                  </button>
                </div>
                <Search setQuery={setQuery} />
              </div>
              <div className="movies">{movies}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default PopUp;
