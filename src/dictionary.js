import React from "react";
import "./dictionary.css";

export default function Dictionary() {
  return (
    <div className="Dictionary">
      <form className="search-form">
        <input
          className="search-bar"
          type="search"
          placeholder="Type in a word..."
          required
        />
        <input className="submit" type="submit" value="Search" />
      </form>
    </div>
  );
}
