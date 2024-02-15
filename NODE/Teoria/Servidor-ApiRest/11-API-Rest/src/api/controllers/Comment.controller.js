//? -------------------------------------------------------
//!---------------------- POST- CREATE --------------------
//? -------------------------------------------------------

const Character = require("../models/Character.model");
const Comment = require("../models/Comment.model");
const Movie = require("../models/Movie.model");
const User = require("../models/User.model");

const createComment = async (req, res, next) => {
  try {
    // traemos por params haciendo destructuring el id de quien va dirigido el comentario
    const { idRecipient } = req.params;

    //! el comentario va dirigido a un registro ya sea User, Character, Movie
    // Buscamos a quien va dirigido el comentario
    const findUser = await User.findById(idRecipient); // --> si lo encuentra, el destinatario es este user
    const findCharacter = await Character.findById(idRecipient); // --> si lo encuentra, el destinatario es un character
    const findMovie = await Movie.findById(idRecipient); // --> si lo encuentra, el destinatario es una movie

    //todo ---------- VAMOS A VER CUAL A ENCONTRADO

    if (findUser) {
      // El comentario va a un user
      // Creamos nueva instancia de comentario y la guardamoss
      // Hay que actualizar el user que recibe el comentario
      // Hay que actualizar el que realiza el comentario -- owner

      // Creamos el nuevo comentario
      const newComment = new Comment({
        ...req.body,
        recipientUser: idRecipient,
        owner: req.user._id,
      });

      // guardamos la instancia del comentario
      const savedComment = await newComment.save();

      if (savedComment) {
        // si se ha guardado procedemos a las actualizaciones
        try {
          // actualizamos al owner -- dueño del comentario
          await User.findByIdAndUpdate(req.user._id, {
            $push: { postedComments: newComment._id },
          });

          // actualizamos el user a quien va dirigido este comentario

          await User.findByIdAndUpdate(idRecipient, {
            $push: { commentsByOther: newComment._id },
          });

          return res.status(200).json({
            userOwner: await User.findById(req.user._id).populate(
              "commentsByOther postedComments"
            ),
            comment: newComment,
          });
        } catch (error) {
          // error al actualizar
          return res.status(409).json({
            error: "Error al actualizar los usuarios",
            message: error.message,
          });
        }
      } else {
        // error al guardar
        return res.status(409).json({
          error: "Error al guardar el comentario",
          message: "No se ha guardado el mensaje",
        });
      }
    } else if (findCharacter) {
      // El comentario va a un character
      // Creamos nueva instancia de comentario y la guardamoss
      // Hay que actualizar el character que recibe el comentario
      // Hay que actualizar el que realiza el comentario -- owner

      // creamos nueva instancia
      const newComment = new Comment({
        ...req.body,
        recipientCharacter: idRecipient,
        owner: req.user._id,
      });

      //guardamos la instancia
      const savedComment = await newComment.save();

      if (savedComment) {
        // Actualizamos user y character porque se ha guardado correctamente

        try {
          // actualizamos owner
          await User.findByIdAndUpdate(req.user._id, {
            $push: { postedComments: newComment._id },
          });

          // actualizamos el character que ha recibido el comentario
          await Character.findByIdAndUpdate(idRecipient, {
            $push: { comments: newComment._id },
          });

          return res.status(200).json({
            userOwner: await User.findById(req.user._id).populate(
              "commentsByOther postedComments"
            ),
            comment: newComment,
          });
        } catch (error) {
          // Error al actualizar registros
          return res.status(409).json({
            error: "Error al actualizar User y character",
            message: error.message,
          });
        }
      } else {
        // error al guardar el comentario
        return res.status(409).json({
          error: "Error al guardar el comentario",
          message: "No se ha guardado el comentario",
        });
      }
    } else if (findMovie) {
      // creamos y guardamos comentario
      // actualizamos movie y owner

      const newComment = new Comment({
        ...req.body,
        recipientMovie: idRecipient,
        owner: req.user._id,
      });

      const savedComment = await newComment.save();

      if (savedComment) {
        // se ha guardado y actualizamos

        try {
          await User.findByIdAndUpdate(req.user._id, {
            $push: { postedComments: newComment._id },
          });

          await Movie.findByIdAndUpdate(idRecipient, {
            $push: { comments: newComment._id },
          });

          return res.status(200).json({
            userOwner: await User.findById(req.user._id).populate(
              "commentsByOther postedComments"
            ),
            comment: newComment,
          });
        } catch (error) {
          // error al actualizar
          return res.status(409).json({
            error: "Error al actualizar user y movie",
            message: error.message,
          });
        }
      } else {
        // error al guardar
        return res.status(409).json({
          error: "Error al guardar el comentario",
          message: "No se ha guardado el comentario",
        });
      }
    } else {
      // El id no pertenece a ningun registro
      return res.status(404).json({
        error: "El idRecipient no pertenece a ningun registro",
        message: "El destinatario no existe",
      });
    }
  } catch (error) {
    return res
      .status(409)
      .json({ error: "Error al crear el comentario", message: error.message });
  }
};

module.exports = { createComment };
