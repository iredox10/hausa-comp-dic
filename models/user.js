import mongoose from "mongoose";
import category from "./category";
const topic = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    img: String,
    favorite: Array
    },{timestamps: true});

const Topic = mongoose.model("Topic", topic);

export default Topic;
