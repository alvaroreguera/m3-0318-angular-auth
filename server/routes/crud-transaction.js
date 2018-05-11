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

  // Create
  router.post("/", (req, res, next) => {
    const obj = _.pick(req.body, fields);
    Model.create(obj)
      .then(object => res.json(object))
      .catch(e => next(e));
  });

  // Retrive DETAIL
  router.get("/:id", (req, res, next) => {
    Model.findById(req.params.id)
      .then(object => res.json(object))
      .catch(e => next(e));
  });

  return router;
};
module.exports = transactionCrud;

