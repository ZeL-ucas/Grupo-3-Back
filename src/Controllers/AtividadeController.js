const AtividadeModel = require("../Models/AtividadeModel");

class AtividadeController {
  async create(req, res) {
    try {
      const atividade = await AtividadeModel.create(req.body);

      return res.status(200).json(atividade);
    } catch (error) {
      res.status(500).json({ message: "Deu ruim aqui!", error: error.message });
    }
  }

  async read(req, res) {
    try {
      const atividade = await AtividadeModel.find().populate(
        "id_usario",
        "-senha"
      );

      return res.status(200).json(atividade);
    } catch (error) {
      res.status(500).json({ message: "Deu ruim aqui!", error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      await AtividadeModel.findByIdAndDelete(id);

      return res
        .status(200)
        .json({ mensagem: "Atividade deletada com sucesso" });
    } catch (error) {
      res.status(500).json({ message: "Deu ruim aqui!", error: error.message });
    }
  }
}
module.exports = new AtividadeController();
