import React from "react";
import Meanings from "./meanings";
import Synonyms from "./synonyms";

export default function Results(props) {
  let synonyms = [];

  if (props.data && props.data.meanings) {
    synonyms = props.data.meanings.flatMap((meaning) => {
      return meaning.synonyms || [];
    });
    return (
      <div className="Results">
        <hr />
        <div className="learn-more">
          Dictionary
          <p className="line-2">
            Definitions from{" "}
            <a
              href="https://languages.oup.com/google-dictionary-en/"
              target="_blank"
              rel="noreferrer"
            >
              Oxford Languages
            </a>
             · 
            <a
              href="https://support.google.com/websearch/answer/10106608?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              Learn more
            </a>
          </p>
        </div>
        <div className="results-columns">
          <section className="results-box">
            <h1 className="keyword">{props.data.word}</h1>
            <h2 className="phonetic">| {props.data.phonetic} |</h2>
            {props.data.meanings.map(function (meanings, index) {
              return (
                <div key={index}>
                  <Meanings meaning={meanings} />
                </div>
              );
            })}
          </section>
          <section className="synonym-box">
            <h1 className="similar-words">Similar words:</h1>
            <Synonyms synonym={synonyms} />
          </section>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
