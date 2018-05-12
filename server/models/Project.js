const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const projectSchema = new Schema({
  author: [{type: Schema.Types.ObjectId, ref:'User'}],
  projectName: String,
  description: String,
  image: String,
  web: String,
  financialNeeds: Number,
  uses: [{description: String, value: Number}],
  financed: Number,
  sponsors: [{type: Schema.Types.ObjectId, ref:'User'}],
  // timestamps: { createdAt: "created_at", updatedAt: "updated_at" }  
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;


