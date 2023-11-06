const AtividadeModel = require("../Models/AtividadeModel");
const UsuarioModel = require("../Models/UsuarioModel");

class AtividadeController {
  async create(req, res) {
    try {
      const UsuarioEncontrado = await UsuarioModel.findById(
        req.body.id_usuario
      );

      if (!UsuarioEncontrado)
        return res.status(404).json({ message: "Usuario não encontrado" });

      const atividade = await AtividadeModel.create(req.body);

      return res.status(200).json(atividade);
    } catch (error) {
      res.status(500).json({ message: "Deu ruim aqui!", error: error.message });
    }
  }

  async read(req, res) {
    try {
      const atividade = await AtividadeModel.find().populate(
        "id_usuario",
        "-senha"
      );

      return res.status(200).json(atividade);
    } catch (error) {
      res.status(500).json({ message: "Deu ruim aqui!", error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id_usuario } = req.params;

      const AtividadeEncontrada = await AtividadeModel.findOne({ id_usuario });

      if (!AtividadeEncontrada)
        return res.status(404).json({ message: "Atividade não encontrada" });

      await AtividadeEncontrada.deleteOne();

      return res
        .status(200)
        .json({ mensagem: "Atividade deletada com sucesso" });
    } catch (error) {
      res.status(500).json({ message: "Deu ruim aqui!", error: error.message });
    }
  }
}
module.exports = new AtividadeController();
