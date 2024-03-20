import React from "react";
import "./gallery.css";
import { dataRicky } from "../../data/ricky.data";
import { CardCharacter } from "../CardCharacter/CardCharacter";

export const Gallery = () => {
  const data = dataRicky.results;
  console.log(data);
  return (
    <div className="gallery-container">
      {data.map((item) => (
        <CardCharacter key={item.id} image={item.image} name={item.name} />
      ))}
    </div>
  );
};
