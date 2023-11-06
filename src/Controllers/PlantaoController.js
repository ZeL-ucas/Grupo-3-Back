const PlantaoModel = require("../Models/PlantaoModel");

class PlantaoController {
  async create(req, res) {
    try {
      const plantao = await PlantaoModel.create(req.body);

      return res.status(200).json(plantao);
    } catch (error) {
      res.status(500).json({ message: "Deu ruim aqui!", error: error.message });
    }
  }

  async read(req, res) {
    try {
      const plantao = await PlantaoModel.find().populate("id_usario", "-senha");

      return res.status(200).json(plantao);
    } catch (error) {
      res.status(500).json({ message: "Deu ruim aqui!", error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id_usuario } = req.params;

      const PlantaoEncontrado = await PlantaoModel.findOne({ id_usuario });

      if (!PlantaoEncontrado)
        return res.status(404).json({ message: "Plantão não encontrada" });

      await PlantaoEncontrado.deleteOne();

      return res
        .status(200)
        .json({ mensagem: "Atividade deletada com sucesso" });
    } catch (error) {
      res.status(500).json({ message: "Deu ruim aqui!", error: error.message });
    }
  }
}
module.exports = new PlantaoController();
