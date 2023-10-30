const open = document.getElementById("open");

console.log(open);
open.addEventListener("click", () => document.getElementById("alert").show());

const close = document.getElementById("close");
close.addEventListener("click", () => document.getElementById("alert").close());
