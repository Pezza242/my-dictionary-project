import React from "react";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h3 className="part-of-speech">{props.meaning.partOfSpeech}</h3>
      <p className="definition">{props.meaning.definition}</p>
      {props.meaning.example ? (
        <p className="example">
          <em>"{props.meaning.example}"</em>
        </p>
      ) : null}
    </div>
  );
}
