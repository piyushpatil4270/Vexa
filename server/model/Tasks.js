import { Schema, model } from "mongoose";

const taskSchema = Schema({
  userid: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    require: true,
  },
  description:{
  type:String,
  default:""
  },
  created_at: {
    type: String,
  },
  project_type:{
    type: String,
    enum: ["company", "team"],
    default: "company",
  },
  comments: {
    type: Array,
    default: [],
  },
});

export const Tasks = model("tasks", taskSchema);
