const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const HospitalSchema = new Schema({
  nome: String,
});

const HospitalModel = mongoose.model("hospital", HospitalSchema);

module.exports = HospitalModel;
