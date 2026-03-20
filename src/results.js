import React from "react";
import Meanings from "./meanings";

export default function Results(props) {
  if (props.data && props.data.meanings) {
    return (
      <div className="Results">
        <hr />
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
      </div>
    );
  } else {
    return null;
  }
}
