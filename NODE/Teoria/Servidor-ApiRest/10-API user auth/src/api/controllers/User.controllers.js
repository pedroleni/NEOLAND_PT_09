const dotenv = require("dotenv");
dotenv.config();
const nodemailer = require("nodemailer");
const randomCode = require("../../utils/randomCode");
const User = require("../models/User.model");
const { deleteImgCloudinary } = require("../../middleware/file.middleware");

//! -----------------------------------------------------------------------------
//? ----------------------- REGISTER LARGO CON ENVIO DE CÓDIGO AL EMAIL ---------
//! -----------------------------------------------------------------------------
const registerLargo = async (req, res, next) => {
  // vemos si hay imagen en la solicitud
  const catchImg = req.file?.path;

  try {
    // indexes
    await User.syncIndexes();

    // guardamos el código de confirmacion random en una variable
    let confirmationCode = randomCode();

    // destructuring del name y email del req.body
    const { email, name } = req.body;

    // Buscamos en la BD si hay algun usuario ya creado con ese email o ese nombre -->
    //** FINDONE metodo de mongoose para encontrar elementos coincidentes
    const userExist = await User.findOne(
      {
        email: req.body.email,
      },
      {
        name: req.body.name,
      }
    );

    // sino existe el usuario procedemos a crearlo
    if (!userExist) {
      //** LO CREAMOS */ --> con el código random y con lo que trae el req.body

      const newUser = new User({ ...req.body, confirmationCode });
      // verificamos si hay imagen en la solicitud, y sino hay le ponemos una imagen por defecto
      if (req.file) {
        newUser.image = req.file.path;
      } else {
        // Le ponemos la imagen por defecto
        newUser.image =
          "https://res.cloudinary.com/dhkbe6djz/image/upload/v1689099748/UserFTProyect/tntqqfidpsmcmqdhuevb.png";
      }

      // Tenemos creado el user con los datos, ahora debemos guardarlo

      try {
        const userSave = await newUser.save();

        // Comprobamos que este usuario se ha guardado y enviamos el código
        if (userSave) {
          // Todo ---> ENVIAMOS EL CÓDIGO
          // llamamos a las variables de entorno
          const emailENV = process.env.EMAIL;
          const passwordENV = process.env.PASSWORD;

          // creamos el transport
          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: emailENV,
              pass: passwordENV,
            },
          });

          // creamos las opciones del mensaje
          const mailOptions = {
            from: emailENV,
            to: email, // se lo enviamos al user registrado
            subject: "Confirmation Code",
            text: `Su código de confirmación es ${confirmationCode}, gracias por confiar en nosotros`,
          };

          // enviamos el email
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              return res
                .status(409)
                .json({ error: "correo no enviado", message: error });
            } else {
              return res.status(200).json({ user: userSave, confirmationCode });
            }
          });
        } else {
          // lanzamos un error diciendo que no se guardó el usuario
          req.file && deleteImgCloudinary(catchImg);
          return res.status(409).json("Error al guardar el usuario");
        }
      } catch (error) {
        req.file && deleteImgCloudinary(catchImg);
        return res.status(409).json({
          error: "Problema al guardar el user",
          message: error.message,
        });
      }
    } else {
      // Lanzamos error porque el usuario ya existe con el email o el name
      req.file && deleteImgCloudinary(catchImg);
      return res.status(409).json("El usuario ya existe");
    }
  } catch (error) {
    req.file && deleteImgCloudinary(catchImg);
    return res
      .status(409)
      .json({ error: "Error en el registro", message: error.message });
  }
};

module.exports = { registerLargo };
