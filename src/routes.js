const { Router } = require("express");
const UsuarioController = require("./Controllers/UsuarioController");
const AtividadeController = require("./Controllers/AtividadeController");
const PlantaoController = require("./Controllers/PlantaoController");
const UsuarioValidator = require("./Validators/UsuarioValidator");
const AtividadeValidator = require("./Validators/AtividadeValidator");
const PlantaoValidator = require("./Validators/PlantaoValidator");
const AuthController = require("./Controllers/AuthController");
const AuthValidator = require("./Validators/AuthValidator");
const Verificarjwt = require("./Middleware/Verificarjwt");
const VerificarUsuario = require("./Middleware/VerificarUsuario");

const rotas = Router();

rotas.post("/usuario", UsuarioValidator.create, UsuarioController.create);
rotas.get("/usuario", Verificarjwt, UsuarioController.read);
rotas.delete(
  "/usuario/:id",
  Verificarjwt,
  VerificarUsuario,
  UsuarioValidator.destroy,
  UsuarioController.delete
);
rotas.put(
  "/usuario/:id",
  Verificarjwt,
  VerificarUsuario,
  UsuarioValidator.update,
  UsuarioController.update
);

rotas.post(
  "/atividade",
  Verificarjwt,
  VerificarUsuario,
  AtividadeValidator.create,
  AtividadeController.create
);
rotas.get("/atividade", Verificarjwt, AtividadeController.read);
rotas.delete(
  "/atividade/:id_usuario",
  Verificarjwt,
  VerificarUsuario,
  AtividadeValidator.destroy,
  AtividadeController.delete
);

rotas.post(
  "/plantao",
  Verificarjwt,
  VerificarUsuario,
  PlantaoValidator.create,
  PlantaoController.create
);
rotas.get("/plantao", Verificarjwt, PlantaoController.read);
rotas.delete(
  "/plantao/:id_usuario",
  Verificarjwt,
  VerificarUsuario,
  PlantaoValidator.destroy,
  PlantaoController.delete
);

rotas.post("/login", AuthValidator.login, AuthController.login);

module.exports = rotas;
