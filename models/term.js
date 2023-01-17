import mongoose from "mongoose"

const term = new mongoose.Schema(
  {
    term: {
      type: String,
      require: true,
      unique: true,
    },
    termInHausa: {
      type: String,
      require: true,
      unique: true,
    },
    explanation: {
      type: [String],
      require: true,
    },
    example: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
)

const Term = mongoose.model("term", term)

export default Term
