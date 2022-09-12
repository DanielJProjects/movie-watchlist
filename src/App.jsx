import React from "react";
import Header from "./Components/Header";
import FindMovie from "./Components/FindMovie";
import PopUp from "./Components/PopUp";
import WatchlistCard from "./Components/WatchlistCard";

function App() {
  const [popUp, setPopUp] = React.useState(false);
  const [watchlist, setWatchlist] = React.useState(
    JSON.parse(localStorage.getItem("watchlist")) || []
  );

  React.useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  return (
    <>
      <Header />
      <FindMovie setPopUp={setPopUp} />
      {popUp && (
        <PopUp
          setPopUp={setPopUp}
          watchlist={watchlist}
          setWatchlist={setWatchlist}
        />
      )}
      <div className="watchlist container">
        {watchlist.length
          ? watchlist.map((movie, index) => (
              <WatchlistCard
                id={movie.id}
                key={index}
                title={movie.title}
                image={movie.image}
                releaseDate={movie.releaseDate}
                rating={movie.rating}
                setWatchlist={setWatchlist}
              />
            ))
          : ""}
      </div>
    </>
  );
}

export default App;
