const express = require("express");
const { celebrate, Segments, Joi } = require("celebrate");
const validate = require("./middleweares/validations");

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.post("/sessions", SessionController.create);

routes.get("/ongs", OngController.index);
routes.post("/ongs", validate.ongObject(), OngController.create);

routes.get("/profile", validate.headerAuthorization(), ProfileController.index);

routes.get("/incidents", validate.pageQuery(), IncidentController.index);

routes.post(
  "/incidents",
  validate.headerAuthorization(),
  validate.incidentObject(),
  IncidentController.create
);

routes.delete("/incidents/:id", validate.idParam(), IncidentController.delete);

module.exports = routes;
