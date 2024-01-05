import React from "react";
import "./Image.scss";

export const Image = (props) => {
  return <img className="BigOne" src={props.file} alt={props.alt} />;
};
