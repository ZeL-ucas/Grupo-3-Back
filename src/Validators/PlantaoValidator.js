const { default: mongoose } = require("mongoose");
const { z } = require("zod");
const { validateRequest } = require("zod-express-middleware");

const create = validateRequest({
  body: z.object({
    id_usuario: z.custom(
      mongoose.isValidObjectId,
      "O Id do usuario não é válido"
    ),
    cargo: z.string({ required_error: "O cargo é obrigatório" }),
    hospital: z.string({ required_error: "O hospital é obrigatório" }),
  }),
});

const destroy = validateRequest({
  params: z.object({
    id: z.custom(mongoose.isValidObjectId, "O Id do plantao não é válido"),
  }),
});

module.exports = { create, destroy };
