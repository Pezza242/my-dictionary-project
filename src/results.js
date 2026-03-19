import React from "react";
import Meanings from "./meanings";

export default function Results(props) {
  if (props.data) {
    return (
      <div className="Results">
        <h1 className="keyword">{props.data.word}</h1>
        {props.data.meanings.map(function (meanings, index) {
          return (
            <div key={index}>
              <Meanings meaning={meanings} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
