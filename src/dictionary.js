import React, { useState } from "react";
import "./dictionary.css";
import axios from "axios";
import Results from "./results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState();
  let [results, setResults] = useState({});
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    //console.log(response.data);
    setResults(response.data);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }
  function changeKeyword(event) {
    setKeyword(event.target.value);
  }
  function searchKeyword(event) {
    event.preventDefault();
    let key = "eb79bof31898546ffea432d4bb90t390";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${key}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsKey = "Zb7vWxJbefWcsND3si6gojZi85Fs1ldlJjcpB4iMb9GSgmiyKBKUOu28";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=2`;
    let headers = {
      Authorization: pexelsKey,
    };
    axios
      .get(pexelsUrl, {
        headers: headers,
      })
      .then(handlePexelsResponse);
  }

  return (
    <div className="Dictionary">
      <div id="search-box" className="container-fluid">
        <h1 className="heading">Dictionary</h1>
        <h2 className="sub-heading">
          What word would you like to search today?
        </h2>
        <form className="search-form" onSubmit={searchKeyword}>
          <input
            className="search-bar"
            type="search"
            placeholder="Type in a word..."
            required
            onChange={changeKeyword}
          />
          <div className="submit">
            <input className="submit-button" type="submit" value="Search" />
          </div>
        </form>
      </div>
      <Results data={results} photo={photos} />
    </div>
  );
}
