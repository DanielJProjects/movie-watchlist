import React from "react";

function FindMovie({ setPopUp }) {
  return (
    <div className="btn-find-cen">
      <button className="btn-find" onClick={() => setPopUp(true)}>
        Find a movie
      </button>
    </div>
  );
}

export default FindMovie;
