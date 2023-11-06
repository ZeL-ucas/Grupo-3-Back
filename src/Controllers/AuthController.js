const jwt = require("jsonwebtoken");
const UsuarioModel = require("../Models/UsuarioModel");
const bcrypt = require("bcrypt");

class AuthController {
  async login(req, res) {
    try {
      const { email, senha } = req.body;

      const UsuarioEncontrado = await UsuarioModel.findOne({ email }).select(
        "+senha"
      );
      if (!UsuarioEncontrado)
        return res.status(403).jsonn({ message: "email ou senha inválidos!" });

      const ehCorrespondente = bcrypt.compare(senha, UsuarioEncontrado.senha);

      if (!ehCorrespondente)
        return res.status(403).jsonn({ message: "email ou senha inválidos!" });

      const { senha: hashdesenha, ...usuario } = UsuarioEncontrado.toObject();

      const token = jwt.sign({ usuario }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE_IN,
      });

      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ message: "Deu ruim aqui!", error: error.message });
    }
  }
}
module.exports = new AuthController();
