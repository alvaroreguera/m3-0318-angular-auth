const express = require("express");
const _ = require("lodash");

const transactionCrud = Model => {
  const router = express.Router();
  const fields = Object.keys(_.omit(Model.schema.paths, ["__v", "_id"]));

  // Retrive ALL
  router.get("/", (req, res, next) => {
    Model.find()
      .then(objects => res.json(objects))
      .catch(e => next(e));
  });

  return router;
};
module.exports = transactionCrud;