import React from "react";
import "./cardCharacter.css";

//---- tenemos tres formas de traer las props
//---------------> Destructuring en los parentesis de la funcion arrow
//---------------> traer las props y luego acceder a sus claves ejem: props.name
//---------------> traer las props en los parentesis y luego hacer el destructuring

export const CardCharacter = ({ image, name }) => {
  return (
    <figure>
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </figure>
  );
};

//! 1) --- FORMA Y MAS ACONSEJABLE

//export const CardCharacter = ({ image, name }) => {
//   return (
//     <figure>
//       <img src={image} alt={name} />
//       <h3>{name}</h3>
//     </figure>
//   );
// };

//! 2) ---- ACCEDIENDO A LAS CLAVES DE LAS PROPS

// export const CardCharacter = (props) => {
//   return (
//     <figure>
//       <img src={props.image} alt={props.name} />
//       <h3>{props.name}</h3>
//     </figure>
//   );
// };

//! 3) --- HACIENDO DESTRUCTURING DE LAS PROPS DENTRO DEL COMPONENTE

// export const CardCharacter = (props) => {
//   const { image, name } = props;
//   return (
//     <figure>
//       <img src={image} alt={name} />
//       <h3>{name}</h3>
//     </figure>
//   );
// };
