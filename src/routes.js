const { Router } = require("express");
const UsuarioController = require("./Controllers/UsuarioController");
const AtividadeController = require("./Controllers/AtividadeController");
const PlantaoController = require("./Controllers/PlantaoController");
const UsuarioValidator = require("./Validators/UsuarioValidator");
const AtividadeValidator = require("./Validators/AtividadeValidator");

const rotas = Router();

rotas.post("/usuario", UsuarioController.create);
rotas.get("/usuario", UsuarioController.read);
rotas.delete(
  "/usuario/:id",
  UsuarioValidator.destroy,
  UsuarioController.delete
);
rotas.put("/usuario/:id", UsuarioValidator.update, UsuarioController.update);

rotas.post("/atividade", AtividadeValidator.create, AtividadeController.create);
rotas.get("/atividade", AtividadeController.read);
rotas.delete(
  "/atividade/:id",
  AtividadeValidator.destroy,
  AtividadeController.delete
);

rotas.post("/plantao", PlantaoController.create);
rotas.get("/plantao", PlantaoController.read);
rotas.delete("/plantao/:id", PlantaoController.delete);

module.exports = rotas;
