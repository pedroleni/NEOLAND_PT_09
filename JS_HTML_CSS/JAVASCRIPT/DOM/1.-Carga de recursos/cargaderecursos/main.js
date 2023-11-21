// const ready = () => {
//   alert("DOM is ready, Welcome to page");
// };

// document.addEventListener("DOMContentLoaded", ready);

window.onload = () =>
  (document.querySelector("#app").innerHTML = `<h1>WELCOME </h1>`);

window.onunload = () => localStorage.setItem("info", "pruebas");
