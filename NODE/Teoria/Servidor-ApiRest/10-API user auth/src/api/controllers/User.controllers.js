const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const validator = require("validator");
dotenv.config();

const User = require("../models/User.model");

const { deleteImgCloudinary } = require("../../middleware/file.middleware");
const { generateToken } = require("../../utils/token");
const randomPassword = require("../../utils/randomPAssword");
const randomCode = require("../../utils/randomCode");
const enumOk = require("../../utils/enumOk");

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

//! -----------------------------------------------------------------------------
//? --------------------------------- LOGIN -------------------------------------
//! -----------------------------------------------------------------------------

const login = async (req, res, next) => {
  try {
    // hacemos destructuring del email y la pass del req.body
    const { email, password } = req.body;

    // buscamos a este usuario por el email
    const userDB = await User.findOne({ email });

    // Comprobamos si el user existe en la DB
    if (userDB) {
      // Tenemos que comparar las contraseñas
      //** Contraseña de base de datos esta ENCRIPTADA */
      //** BCRYP --> para poder comparar la pass una con una pass encriptada */
      if (bcrypt.compareSync(password, userDB.password)) {
        // si coinciden devuelve true y puedo generar el token
        //** TOKEN */
        const token = generateToken(userDB._id, email);

        // Una vez generado enviamos una respuesta con el user y este token
        return res.status(200).json({
          user: userDB,
          token,
        });
      } else {
        // Las contraseñas no coinciden
        return res.status(409).json({
          error: "Contraseña incorrecta",
          message: "Intentalo otra vez",
        });
      }
    } else {
      // Error user no encontrado
      return res
        .status(404)
        .json({ error: "User no encontrado", message: "User no registrado" });
    }
  } catch (error) {
    return res
      .status(409)
      .json({ error: "Error en el login", message: error.message });
  }
};

//! -----------------------------------------------------------------------------
//? ------------------------------- AUTOLOGIN -----------------------------------
//! -----------------------------------------------------------------------------

const autoLogin = async (req, res, next) => {
  try {
    // destructuring del email y pass del body
    const { email, password } = req.body;

    // Buscamos al user en la DB
    const userDB = await User.findOne({ email });

    // Comprobamos que el user exista en la base de datos
    if (userDB) {
      // Comprobamos si las contraseñas coinciden
      //** En este caso se comparan las 2 contraseñas ENCRIPTADAS */
      if (password === userDB.password) {
        // Si coinciden generamos el token
        const token = generateToken(userDB._id, email);

        // Enviamos la respuesta con el token
        return res.status(200).json({
          user: userDB,
          token,
        });
      } else {
        // Lanzamos error en contraseña
        return res.status(409).json({
          error: "Contraseña incorrecta",
          message: "Intentalo otra vez",
        });
      }
    } else {
      // Lanzamos un error user no encontrado
      return res
        .status(404)
        .json({ error: "User no encontrado", message: "User no registrado" });
    }
  } catch (error) {
    return res
      .status(409)
      .json({ error: "Error en el login", message: error.message });
  }
};

//! -----------------------------------------------------------------------------
//? ----------------------  CAMBIO COBTRASEÑA NO LOGUEADO------------------------
//! -----------------------------------------------------------------------------

const forgotPassword = async (req, res, next) => {
  try {
    // nos traemos el email del body mediante destructuring
    const { email } = req.body;

    // Buscamos al user para ver si existe
    const userDB = await User.findOne({ email });

    if (userDB) {
      // Si el user existe hacemos el redirect que envia el correo con las pass nueva
      //! redirect -- 307
      return res.redirect(
        307,
        `http://localhost:8081/api/v1/user/forgot/sendPassword/${userDB._id}`
      );
    } else {
      // User no encontrado
      return res
        .status(404)
        .json({ error: "User no encontrado", message: "Revise el email" });
    }
  } catch (error) {
    return res
      .status(409)
      .json({ error: "Error al cambio de contraseña", message: error.message });
  }
};

//! -----------------------------------------------------------------------------
//? --------------------------------- SEND PASSWORD   ---------------------------
//! -----------------------------------------------------------------------------

const sendPassword = async (req, res, next) => {
  try {
    // traemos el id por req.params
    const { id } = req.params;

    // Buscamos al user
    const userDB = await User.findById(id);

    //Comprobamos si el user existe

    if (userDB) {
      // generamos password segura random y la enviamos
      const passwordSecure = randomPassword();

      //todo ------> ENVIO DEL CORREO
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
        subject: "INFO",
        text: `User: ${userDB.name}, su nuevo código de login es: ${passwordSecure} Nos ponemos en contacto con uste porque hemos recibido una solicitud de olvido de contraseña`,
      };

      // enviamos el email
      transporter.sendMail(mailOptions, async (error, info) => {
        if (error) {
          return res
            .status(409)
            .json({ error: "correo no enviado", message: error });
        } else {
          //** ENCRIPTAMOS CONTRASEÑA para actualizar al user con esta contraseña encriptada */
          const newPasswordEncript = bcrypt.hashSync(passwordSecure, 10);

          try {
            // Intentamos actualizar el user
            await User.findByIdAndUpdate(id, { password: newPasswordEncript });

            // todo --> TEST comprobar que el user se ha actualizado correctamente

            // buscamos al user actualizado para comparar su contraseña encriptada con la enviada
            const userUpdate = await User.findById(id);

            // Compruebo la nueva contraseña segura con la contraseña encriptada que tiene el user guardado actualizado
            if (bcrypt.compareSync(passwordSecure, userUpdate.password)) {
              // si es true se ha actualizado de forma correcta
              return res.status(200).json({
                updateUser: true,
                sendPassword: true,
              });
            } else {
              // Si las contraseñas no coinciden el user no se ha actualizado de forma correcta
              return res.status(409).json({
                error: "User no actualizado",
                message: "Se envio la nueva contraseña",
              });
            }
          } catch (error) {
            // error al actualizar el user
            return res.status(409).json({
              error: "Error al actualizar el user",
              message: error.message,
            });
          }
        }
      });
    } else {
      // Error el user no existe
      return res
        .status(404)
        .json({ error: "User no encontrado", message: "Mal email" });
    }
  } catch (error) {
    return res.status(409).json({
      error: "Error durante el envio del correo",
      message: error.message,
    });
  }
};

//! -----------------------------------------------------------------------------
//! -----------------------------------------------------------------------------
//! -----------------------------------------------------------------------------
//** */ -----------------------------  RUTAs AUTENTICADAs -----------------------
//! -----------------------------------------------------------------------------
//! -----------------------------------------------------------------------------
//! -----------------------------------------------------------------------------
//! -----------------------------------------------------------------------------

//! -----------------------------------------------------------------------------
//? -----------------------------  EJEMPLO RUTA AUTENTICADA ---------------------
//! -----------------------------------------------------------------------------

const exampleAuth = async (req, res, next) => {
  try {
    console.log("req.user", req.user);
    console.log("req.headers", req.headers);
    // const userDB = await User.findById(req.user._id);
    const userDB = await User.findOne({ name: req.user.name });
    return res.status(200).json(userDB);
  } catch (error) {
    console.log(error);
    return res.status(409).json(error.message);
  }
};

//! -----------------------------------------------------------------------------
//? ----------------- CAMBIO DE CONTRASEÑA UNA VEZ AUTENTICADO ------------------
//! -----------------------------------------------------------------------------

const changePassword = async (req, res, next) => {
  try {
    // Recogemos del body la contraseña antigua y nueva
    const { password, newPassword } = req.body;

    // Tenemos que comprobar que la contraseña sea fuerte (strongPassword) mediante validator

    const validate = validator.isStrongPassword(newPassword);

    if (validate) {
      // Sacamos el id del usuario (esta autenticado --> req.user)
      const { _id } = req.user;

      // Comprobamos que la contraseña que introduce antigua coincide con la guardada en la base de datos
      // La guardada esta encriptada --> bcrypt --> COMPARESYNC

      if (bcrypt.compareSync(password, req.user.password)) {
        // Si coinciden haseamos (ENCRIPTAMOS) contraseña y actualizamos el user
        const newPasswordHashed = bcrypt.hashSync(newPassword, 10);

        try {
          // Actualizamos el user
          //! no hacer .save()

          await User.findByIdAndUpdate(_id, { password: newPasswordHashed });

          // todo ------> TEST ------- en tiempo real para ver si el user se ha actualizado

          // Este es el usuario ya actualizado
          const userSave = await User.findById(_id);

          // Comprobamos la contraseña del user ya actualizado
          if (bcrypt.compareSync(newPassword, userSave.password)) {
            // Si es correcto enviamos una respuesta correcta
            return res.status(200).json({ user: userSave, testUpdate: true });
          } else {
            // No se ha actualizado el user
            return res.status(409).json({ testUpdate: false });
          }
        } catch (error) {
          // Error al actualizar el user
          return res.status(409).json({
            error: "Error al actualizar el user",
            message: error.message,
          });
        }
      } else {
        // error las contraseñas no coinciden
        return res.status(409).json({
          error: "Contraseña antigua incorrecta",
          message: "Pruebe otra contraseña",
        });
      }
    } else {
      // Mandamos un error la pass no es segura
      return res.status(409).json({
        error: "La contraseña nueva no es segura",
        message:
          "Minimo 8 caracteres, 1 simbolo, 1 mayuscula, 1 minuscula y un numero",
      });
    }
  } catch (error) {
    return res.status(409).json({
      error: "Error al cambiar la contraseña",
      message: error.message,
    });
  }
};

//! -----------------------------------------------------------------------------
//? ---------------------------------     UPDATE --------------------------------
//! -----------------------------------------------------------------------------

const updateUser = async (req, res, next) => {
  try {
    // campuramos la imagen nueva subida a cloudinary (si viene en req.file)
    let catchImg = req.file?.path;

    // Actualizamos los modelos unicos del modelo
    await User.syncIndexes();

    // Hacemos una nueva instancia de User con los datos traidos del body
    const patchUser = new User(req.body);

    // Comprobamos que el req.file traiga la imagen para añadirla al user Actualizado
    // if (req.file) {
    //   patchUser.image = catchImg;
    // }
    req.file && (patchUser.image = catchImg);

    //** */ Salvoguardo la info que el user NO quiero que cambie
    //** MANTENEMOS LA INFO QUE EL USER TIENE EN LA BASE DE DATOS */
    patchUser._id = req.user._id;
    patchUser.password = req.user.password;
    patchUser.rol = req.user.rol;
    patchUser.confirmationCode = req.user.confirmationCode;
    patchUser.email = req.user.email;
    patchUser.check = req.user.check;

    // Comprobamos mediante la funcion de enumOk si el user quiere cambiar el genero, que éste este entre las opciones
    // Compruebo que el user quiere cambiar el genero guardado
    if (req.body?.gender) {
      const resultEnum = enumOk(req.body?.gender);
      patchUser.gender = resultEnum.check ? req.body.gender : req.user.gender;
    }

    //** ACTUALIZAMOS EL USER */

    try {
      //! NO HACER MEDIANTE .SAVE()
      //** FINDBYIDANDUPDATE --> busca al user mediante el id y lo actualiza
      //** 1) id con el buscamos/
      //** 2) la info con la que vamos a actualizar a este user */

      await User.findByIdAndUpdate(req.user._id, patchUser);

      // todo ------------------- TEST TIEMPO REAL ----- RUNTIME ----------------------------
      //** COMPARAR EL USER ACTUALIZADO GUARDADO CON LO QUE QUIERE ACTUALIZARSE EL USER (req.body) y (req.file --> si hay img) */

      // Buscamos al user guardado ya actualizado para testear la info
      const updateUser = await User.findById(req.user._id);

      // SACAR CLAVES DEL req.body para saber que info quiere actualizar este user
      // Saber lo que el user ha actualizado
      const updateKeys = Object.keys(req.body);

      console.log("claves del body", updateKeys);

      // Creo un array vacio donde vamos a guardar el test
      const testUpdate = [];

      // Recorremos las claves que el user quiere actualizar
      updateKeys.forEach((item) => {
        // Comprobamos que la info actualizada sea igual a lo que mando el user por la req.body
        if (updateUser[item] === req.body[item]) {
          // Doble verificacion comprobando que sea diferente a lo que tenia el user guardado
          if (updateUser[item] !== req.user[item]) {
            // Si estas dos verificaciones coinciden se ha actualizado el user de forma correcta
            //** La clave del user actualizado es diferente a la clave user guardado antes de la actualizacion */
            //** La clave del user actualizado es igual a la clave que envio el user por la req.body */
            testUpdate.push({
              [item]: true,
            });
          } else {
            testUpdate.push({
              [item]: "Misma info que la antigua",
            });
          }
        } else {
          testUpdate.push({
            [item]: false,
          });
        }
      });

      // Tenemos que checkear el req.file por si hay hacer el test
      if (req.file) {
        // Si la imagen del user actualizado es igual a la imagen nueva el test es correcto
        // Si no es igual, no se actualizo y ponemos el test en false
        updateUser.image === catchImg
          ? testUpdate.push({ image: true })
          : testUpdate.push({ image: false });
      }

      // Si el test de imagen es correcto y el user tiene una imagen diferente a la que viene por defecto se la borramos
      if (
        testUpdate.image &&
        req.user.image !==
          "https://res.cloudinary.com/dhkbe6djz/image/upload/v1689099748/UserFTProyect/tntqqfidpsmcmqdhuevb.png"
      ) {
        deleteImgCloudinary(req.user.image);
      }

      console.log("TEST UPDATE", testUpdate);

      // una vez finalizado el test lanzamos una respuesta correcta con el user actualizado y el test
      return res.status(200).json({
        user: updateUser,
        test: testUpdate,
      });
    } catch (error) {
      // Error al actualizar el user

      // Si hay un error y el user subio una imagen, esa imagen la borramos
      if (req.file) {
        deleteImgCloudinary(catchImg);
      }

      return res.status(409).json({
        error: "Error al actualizar el user",
        message: error.message,
      });
    }
  } catch (error) {
    // Si hay un error y el user subio una imagen, esa imagen la borramos
    if (req.file) {
      deleteImgCloudinary(catchImg);
    }

    return res.status(409).json({
      error: "Error general actualizando el user",
      message: error.message,
    });
  }
};

//! -----------------------------------------------------------------------------
//? ---------------------------------  DELETE -----------------------------------
//! -----------------------------------------------------------------------------

const deleteUser = async (req, res, next) => {
  try {
    // Buscar al user por el id y borrarlo
    await User.findByIdAndDelete(req.user._id);

    // Buscamos al user borrado para verificar que se ha borrado
    const existUser = await User.findById(req.user._id);

    // Si el user no existe se ha borrado correctamente y habria que borrar la imagen si no es la que hay por defecto
    if (!existUser) {
      // Borrado de imagen si no es la que hay por defecto
      req.user.image !==
        "https://res.cloudinary.com/dhkbe6djz/image/upload/v1689099748/UserFTProyect/tntqqfidpsmcmqdhuevb.png" &&
        deleteImgCloudinary(req.user.image);

      return res.status(200).json("User borrado");
    } else {
      // Error user no borrado

      return res.status(409).json({ error: "Error en el borrado" });
    }
  } catch (error) {
    return res.status(409).json({
      error: "Error general borrando el user",
      message: error.message,
    });
  }
};

module.exports = {
  registerLargo,
  registerWithRedirect,
  sendCode,
  resendCode,
  checkNewUser,
  login,
  autoLogin,
  forgotPassword,
  sendPassword,
  exampleAuth,
  changePassword,
  updateUser,
  deleteUser,
};
