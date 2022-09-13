import React from "react";
import Header from "./Components/Header";
import FindMovie from "./Components/FindMovie";
import PopUp from "./Components/PopUp";
import WatchlistCard from "./Components/WatchlistCard";
import Grid from "@mui/material/Grid";

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
      <Grid container>
        {watchlist.length
          ? watchlist.map((movie, index) => (
              <Grid
                className={"watchlist"}
                key={index}
                item
                xs={12}
                sm={6}
                md={3}
              >
                <WatchlistCard
                  id={movie.id}
                  title={movie.title}
                  image={movie.image}
                  releaseDate={movie.releaseDate}
                  rating={movie.rating}
                  setWatchlist={setWatchlist}
                />
              </Grid>
            ))
          : ""}
      </Grid>
    </>
  );
}

export default App;
