// Rafc --> export normal
// Rafce --> export default

// Hago destructuring de las props --> props son parametros que trae del padre y los muestra el hijo
export const EnlacesCustom = ({ src, clase, alt, url }) => {
  return (
    <a href={url} target="_blank">
      <img src={src} className={clase} alt={alt} />
    </a>
  );
};

//! cuando es necesario el fragment
// export const EnlacesCustom = (props) => {
//   return (
//     <>
//       <img src={props.src} className={props.clase} alt={props.alt} />
//       <a href={props.url} target="_blank"></a>
//     </>
//   );
// };
