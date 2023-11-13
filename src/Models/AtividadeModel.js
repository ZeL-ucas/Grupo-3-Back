const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AtividadeSchema = new Schema(
  {
    id_usuario: {
      type: Schema.Types.ObjectId,
      ref: "usuario",
      unique: true,
    },
    hospital: String,
    cargo: String,
    entrada: Date,
  },
  {
    timestamps: true,
  }
);

const AtividadeModel = mongoose.model("atividade", AtividadeSchema);

module.exports = AtividadeModel;
