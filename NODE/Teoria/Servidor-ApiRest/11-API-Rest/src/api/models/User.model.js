//! ----------- traemos mongoose
const mongoose = require("mongoose");

//! ----------- importamos diferentes librerías

const bcrypt = require("bcrypt"); // ---- sirve para encriptar
const validator = require("validator"); // ----- nos valida info

//! ----------- schema datos

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true, // quitar espacios
      unique: true,
      validate: [validator.isEmail, "Email no válido"],
    },
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      validate: [validator.isStrongPassword], // { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1, returnScore: false, pointsPerUnique: 1, pointsPerRepeat: 0.5, pointsForContainingLower: 10, pointsForContainingUpper: 10, pointsForContainingNumber: 10, pointsForContainingSymbol: 10 }
    },
    gender: {
      type: String,
      enum: ["hombre", "mujer", "otro"],
      required: true,
    },
    rol: {
      type: String,
      enum: ["admin", "user", "superAdmin"],
      default: "user",
    },
    confirmationCode: {
      type: Number,
      required: true,
    },
    check: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
    },
    moviesFav: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }],
    characterFav: [{ type: mongoose.Schema.Types.ObjectId, ref: "Character" }],
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Los que siguen al user
    followed: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Seguidos por el user
  },
  {
    timestamps: true,
  }
);

//! hacemos un preguardado donde se va a encriptar la contraseña

UserSchema.pre("save", async function (next) {
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    next("Error encriptando la contraseña", error);
  }
});

// ! ---------- creamos el modelo en base al Schema

const User = mongoose.model("User", UserSchema);

//! ----------- expotamos para poder usarlo

module.exports = User;
