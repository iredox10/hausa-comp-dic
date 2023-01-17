import mongoose, { mongo } from "mongoose";

const word = new mongoose.Schema(
  {
    word: {
      type: String,
      require: true,
      unique: true,
    },
    wordInHausa: {
      type: String,
      require: true,
      unique: true,
    },
    explanation: {
      type:[String],
      require: true,
    },
    grammar: {
      type: String,
      require: true,
    },
    example: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const Word = mongoose.model("Word", word);

export default Word;
