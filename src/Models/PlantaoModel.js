const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PlantaoSchema = new Schema(
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

const PlantaoModel = mongoose.model("plantao", PlantaoSchema);

module.exports = PlantaoModel;
