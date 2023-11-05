const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
  nome: {
    type: String,
    unique: true,
  },
  cargo: String,
  email: {
    type: String,
    unique: true,
  },
  info_adicionais: String,
  senha: {
    type: String,
    select: false,
  },
  /* plantao: {
    type: Boolean,
    default: false,
    select: false,
  },*/
});
UsuarioSchema.pre("save", async function (next) {
  console.log("oiii", next);
  const user = this;

  if (user.isModified("senha")) {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(user.senha, salt);

    user.senha = hash;
  }

  next();
});

const UsuarioModel = mongoose.model("usuario", UsuarioSchema);

module.exports = UsuarioModel;
