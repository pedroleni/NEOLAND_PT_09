//! Importaciones

const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

//** GENERAMOS UN TOKEN */ --> este TOKEN recibe el id y el email del usuario
// Esta función será utilizada en el login

const generateToken = (id, email) => {
  // Sino tenemos el id o el email mandamos un error

  if (!id || !email) {
    throw new Error("Falta el email o Id");
  }

  // Si lo recibido es correcto registramos la peticion
  // utilizamos el metodo sign de jwt
  // param --> palabra secreta (.env) y la espiracion (caducidad)

  return jwt.sign({ id, email }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

//** VERIFICAMOS EL TOKEN */
// decodificamos -- para saber si es valido y obtener la info con lo que ha sido creado (email, id)

const verifyToken = (token) => {
  // verificamos si traemos el token por param , para lanzar un error si no es asi
  if (!token) {
    throw new Error("Sin token");
  }

  return jwt.verify(token, process.env.JWT_SECRET);
};

//! exportamos

module.exports = {
  generateToken,
  verifyToken,
};
