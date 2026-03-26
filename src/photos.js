import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        {props.photos.map(function (photo, index) {
          return (
            <div className="photo-grid" key={index}>
              <a
                className="photo-link"
                href={photo.src.original}
                target="_blank"
                rel="noreferrer"
              >
                <img src={photo.src.tiny} alt={photo.alt} width="230" />
              </a>
            </div>
          );
        })}
        ;
      </div>
    );
  } else {
    return null;
  }
}
