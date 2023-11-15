const PlantaoModel = require("../Models/PlantaoModel");
const UsuarioModel = require("../Models/UsuarioModel");

class PlantaoController {
  async create(req, res) {
    try {
      const UsuarioEncontrado = await UsuarioModel.findById(
        req.body.id_usuario
      );

      if (!UsuarioEncontrado)
        return res.status(404).json({ message: "Usuario não encontrado" });

      const plantao = await PlantaoModel.create(req.body);

      return res.status(200).json(plantao);
    } catch (error) {
      res.status(500).json({ message: "Deu ruim aqui!", error: error.message });
    }
  }

  async read(req, res) {
    try {
      const plantao = await PlantaoModel.find().populate(
        "id_usuario",
        "-senha"
      );

      return res.status(200).json(plantao);
    } catch (error) {
      res.status(500).json({ message: "Deu ruim aqui!", error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id_usuario } = req.params;

      const PlantaoEncontrada = await PlantaoModel.findOne({ id_usuario });

      if (!PlantaoEncontrada)
        return res.status(404).json({ message: "Plantao não encontrado" });

      await PlantaoEncontrada.deleteOne();

      return res.status(200).json({ mensagem: "Plantao deletado com sucesso" });
    } catch (error) {
      res.status(500).json({ message: "Deu ruim aqui!", error: error.message });
    }
  }
}
module.exports = new PlantaoController();
