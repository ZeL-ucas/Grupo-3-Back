const { default: mongoose } = require("mongoose");
const { z } = require("zod");
const { validateRequest } = require("zod-express-middleware");

const create = validateRequest({
  body: z.object({
    nome: z.string({ required_error: "O nome é obrigatório" }),
    cargo: z.string({ required_error: "O cargo é obrigatório" }),
    email: z
      .string({ required_error: "O email é obrigatório" })
      .email("O email é invalido"),
    senha: z.string({ required_error: "A senha é obrigatória" }),
  }),
});

const destroy = validateRequest({
  params: z.object({
    id: z.custom(mongoose.isValidObjectId, "O Id não é válido"),
  }),
});

const update = validateRequest({
  body: z.object({
    nome: z.string().optional(),
    cargo: z.string().optional(),
    email: z.string().email("O email é invalido").optional(),
    senha: z.string().optional(),
    plantao: z.boolean().optional(),
  }),
  params: z.object({
    id: z.custom(mongoose.isValidObjectId, "O Id não é válido"),
  }),
});

module.exports = { create, destroy, update };
