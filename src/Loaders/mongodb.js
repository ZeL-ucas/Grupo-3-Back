const mongoose = require("mongoose");

async function startDB() {
  await mongoose.connect(
    "mongodb+srv://laurorafaelismart:J4l8m8z1jalGurru@grupo5.ohsyvru.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("Banco de Dados Inicializado");
}

module.exports = startDB;
