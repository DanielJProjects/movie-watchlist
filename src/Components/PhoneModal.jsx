import React from "react";
import Search from "./Search";
import { MdKeyboardArrowLeft } from "react-icons/md";

function PhoneModal({ setPopUp, setQuery, movies }) {
  return (
    <>
      <div className="mobile-popup">
        <div className="mobile-header">
          <div className="mobile-btn-close">
            <button
              className="mobile-btn-close-popup"
              onClick={() => setPopUp(false)}
            >
              <MdKeyboardArrowLeft />
            </button>
          </div>
          <Search setQuery={setQuery} />
        </div>
        <div className="mobile-movies">{movies}</div>
      </div>
    </>
  );
}

export default PhoneModal;
