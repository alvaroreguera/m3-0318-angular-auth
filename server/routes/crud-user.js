const express = require("express");
const _ = require("lodash");

const userCrud = Model => {
  const router = express.Router();
  const fields = Object.keys(_.omit(Model.schema.paths, ["__v", "_id"]));


  router.put("/:id", (req, res, next) => {
    const updates = _.pick(req.body, fields);

    Model.findByIdAndUpdate(req.params.id, updates, { new: true })
      .then(object => res.json(object))
      .catch(e => next(e));
  });

  return router;
};

module.exports = userCrud;