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

//! -----------------------------------------------------------------------------
//? --------------------------------- REGISTER CON REDIRECT ---------------------
//! -----------------------------------------------------------------------------

const registerWithRedirect = async (req, res, next) => {
  let catchImg = req.file?.path;

  try {
    // indexes
    await User.syncIndexes();

    // guardamos el codigo de confirmación
    let confirmationCode = randomCode();

    // buscamos si hay algun user con el email o el name
    const userExist = await User.findOne(
      { email: req.body.email },
      { name: req.body.name }
    );

    // Comprobamos que este user no existe
    if (!userExist) {
      // Sino existe lo creamos
      const newUser = new User({ ...req.body, confirmationCode });

      // vemos si hay imagen en la solicitud
      if (req.file) {
        newUser.image = req.file.path;
      } else {
        // Le ponemos una imagen por defecto
        newUser.image =
          "https://res.cloudinary.com/dhkbe6djz/image/upload/v1689099748/UserFTProyect/tntqqfidpsmcmqdhuevb.png";
      }

      try {
        // guardamos al user con esos datos
        const userSave = await newUser.save();

        // si el user se ha creado hacemos el redirect
        if (userSave) {
          return res.redirect(
            307,
            `http://localhost:8081/api/v1/user/register/sendMail/${userSave._id}`
          );
        } else {
          // Error no se ha guardado correcto
          req.file && deleteImgCloudinary(catchImg);
          return res.status(404).json({
            error: "El user no se ha guardado",
            message: "El user no se ha guardado",
          });
        }
      } catch (error) {
        // error al guardar el user
        req.file && deleteImgCloudinary(catchImg);
        return res
          .status(409)
          .json({ error: "El user no se ha guardado", message: error.message });
      }
    } else {
      // Error porque ya existe este usuario
      req.file && deleteImgCloudinary(catchImg);
      return res.status(409).json({
        error: "El usuario ya existe",
        message: "El usuario ya existe",
      });
    }
  } catch (error) {
    req.file && deleteImgCloudinary(catchImg);
    return res
      .status(409)
      .json({ error: "Error en el registro", message: error.message });
  }
};

//! -----------------------------------------------------------------------------
//? --------------------------------- SEND CODE CONFIRMATION ---------------------
//! -----------------------------------------------------------------------------

const sendCode = async (req, res, next) => {
  try {
    // Buscamos al user por su id de los params
    // para buscar el email y el codigo de confirmacion

    const { id } = req.params;

    // Buscamos al user
    const userDB = await User.findById(id);

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
      to: userDB.email, // se lo enviamos al user registrado
      subject: "Confirmation Code",
      text: `Su código de confirmación es ${userDB.confirmationCode}, gracias por confiar en nosotros`,
    };

    // enviamos el email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res
          .status(409)
          .json({ error: "correo no enviado", message: error });
      } else {
        return res
          .status(200)
          .json({ user: userDB, confirmationCode: userDB.confirmationCode });
      }
    });
  } catch (error) {
    return res
      .status(409)
      .json({ error: "Error al enviar el email", message: error.message });
  }
};

//! -----------------------------------------------------------------------------
//? --------------------------------- RESEND CODE     --------------------------
//! -----------------------------------------------------------------------------

const resendCode = async (req, res, next) => {
  try {
    // llamamos a las variables de entorno
    const emailENV = process.env.EMAIL;
    const passwordENV = process.env.PASSWORD;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailENV,
        pass: passwordENV,
      },
    });

    // Buscamos al usuario por el email que nos trae la solicitud
    const userSave = await User.findOne({ email: req.body.email });

    if (userSave) {
      // creamos las opciones del mensaje
      const mailOptions = {
        from: emailENV,
        to: req.body.email, // se lo enviamos al user registrado
        subject: "Confirmation Code",
        text: `Su código de confirmación es ${userSave.confirmationCode}, gracias por confiar en nosotros`,
      };

      // enviamos el email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return res
            .status(409)
            .json({ error: "correo no enviado", message: error });
        } else {
          return res.status(200).json({ user: userSave, resend: true });
        }
      });
    } else {
      // Error no se encuentra al user por el email
      return res
        .status(404)
        .json({ error: "User no encontrado", message: "meta otro email" });
    }
  } catch (error) {
    return res
      .status(409)
      .json({ error: "Error al enviar el código", message: error.message });
  }
};

//! -----------------------------------------------------------------------------
//? --------------------------------- CHECK NEW USER --------------------------
//! -----------------------------------------------------------------------------

const checkNewUser = async (req, res, next) => {
  try {
    // Recibimos el email y el confirmationCode de la solicitud

    const { email, confirmationCode } = req.body;

    // Buscamos al usuario
    const userExist = await User.findOne({ email });

    // Si el user no existe lanzamos un error
    if (!userExist) {
      return res
        .status(404)
        .json({ error: "user no encontrado", message: "checkea el correo" });
    } else {
      //** SI EXISTE */ --> comprobamos los códigos
      if (userExist.confirmationCode === confirmationCode) {
        // Si es igual actualizamos el check del user
        try {
          // actualizamos el user
          await userExist.updateOne({ check: true });

          // Buscamos a este user actualizado para enviar la respuesta
          const updateUser = await User.findOne({ email });

          return res.status(200).json({
            user: updateUser,
            testCheckUser: updateUser.check == true ? true : false,
          });
        } catch (error) {
          return res
            .status(409)
            .json({ error: "Error al actualizar", message: error.message });
        }
      } else {
        // Si los códigos no coinciden borramos a este user

        await User.findByIdAndDelete(userExist._id);

        // si la imagen no es la que hay por defecto hay que borrarla
        if (
          userExist.image !==
          "https://res.cloudinary.com/dhkbe6djz/image/upload/v1689099748/UserFTProyect/tntqqfidpsmcmqdhuevb.png"
        ) {
          deleteImgCloudinary(userExist.image);
        }

        // Lanzamos la respuesta avisando del borrado del user
        return res.status(409).json({
          user: userExist,
          check: false,
          delete: (await User.findById(userExist._id))
            ? "user no borrado"
            : "user borrado",
        });
      }
    }
  } catch (error) {
    return res
      .status(409)
      .json({ error: "Error al checkear", message: error.message });
  }
};

module.exports = {
  registerLargo,
  registerWithRedirect,
  sendCode,
  resendCode,
  checkNewUser,
};
