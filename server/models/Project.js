const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const projectSchema = new Schema({
  user: String,
  projectName: String,
  description: String,
  image: String,
  financialNeeds: Number,
  // timestamps: { createdAt: "created_at", updatedAt: "updated_at" }  
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;