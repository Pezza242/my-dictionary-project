import React from "react";

export default function Synonyms(props) {
  if (props.synonym) {
    return (
      <ul className="Synonyms">
        {props.synonym.map(function (synonyms, index) {
          return (
            <li className="synonym-list" key={index}>
              {synonyms}
            </li>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}
