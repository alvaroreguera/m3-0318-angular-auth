const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    project: { type: Schema.Types.ObjectId, ref: "Project" },
    amount: Number
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Transaction = mongoose.model("transactionSchema", transactionSchema);

module.exports = Transaction;


