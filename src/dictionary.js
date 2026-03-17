import React from "react";
import "./dictionary.css";

export default function Dictionary() {
  return (
    <div className="Dictionary">
      <div className="search-box">
        <h1 className="heading">Dictionary</h1>
        <h2 className="sub-heading">
          What word would you like to search today?
        </h2>
        <form className="search-form">
          <input
            className="search-bar"
            type="search"
            placeholder="Type in a word..."
            required
          />
          <div className="submit">
            <input className="submit-button" type="submit" value="Search" />
          </div>
        </form>
      </div>
    </div>
  );
}
