const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const AtividadeModel = require("./AtividadeModel");

const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
  email: {
    type: String,
    unique: true,
  },

  senha: {
    type: String,
    select: false,
  },
  nome: {
    type: String,
    unique: true,
  },
  cargo: String,
  info_adicionais: String,

  plantao: {
    type: Boolean,
    select: false,
    default: false,
  },
});
UsuarioSchema.pre("save", async function (next) {
  console.log(this);
  const user = this;

  if (user.isModified("senha")) {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(user.senha, salt);

    user.senha = hash;
  }

  next();
});
UsuarioSchema.pre("deleteOne", async function () {
  const usuario = this;

  return AtividadeModel.deleteOne({ id_usuario: usuario._id });
});
const UsuarioModel = mongoose.model("usuario", UsuarioSchema);

module.exports = UsuarioModel;
