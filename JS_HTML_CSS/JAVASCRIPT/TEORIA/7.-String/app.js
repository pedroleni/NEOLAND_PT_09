let dog = "Rodolfo ";

//?------------ formas de concatenar la informacion

/// ------> 1 ) Forma mas antigua con el +

const apellido = dog + "Lopez ";
console.log("🚀 ~ file: app.js:9 ~ apellido:", apellido);

///-------> 2) Forma mas moderna con los template string y las comillas francesas

const nombreCompleto = `${dog} Lopez Egea`;
console.log("🚀 ~ file: app.js:14 ~ nombreCompleto:", nombreCompleto);

const h1Component = `<h1>${dog}</h1>`; /// nos sirve para inyectar html desde JS

const data = [
  {
    name: "Hp oem 2023",
    image:
      "https://wdixital.com/wp-content/uploads/hp-probook-640-g2-500x500.jpg",
  },
  {
    name: "Mac",
    image:
      "https://wdixital.com/wp-content/uploads/hp-probook-640-g2-500x500.jpg",
  },
  {
    name: "Iphone",
    image:
      "https://wdixital.com/wp-content/uploads/hp-probook-640-g2-500x500.jpg",
  },
];
// callback
data.forEach((producto, index) => {
  // ------> COmpoenente --------->
  const cardComponent = () => `
    <figure>
      <h1>${producto.name}</h1>
      <img src=${producto.image} alt="" />
    </figure>
  `;
  const app = document.querySelector(".app");

  // inyectamos el compoente en el div app que hemos seleccionado antes con el querySelector
  app.innerHTML += cardComponent();
});
