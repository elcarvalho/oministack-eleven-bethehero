const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  ongObject() {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string()
          .required()
          .email(),
        whatsapp: Joi.string()
          .required()
          .min(10)
          .max(11),
        city: Joi.string().required(),
        uf: Joi.string()
          .required()
          .length(2)
      })
    });
  },
  headerAuthorization() {
    return celebrate({
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
      }).unknown()
    });
  },
  pageQuery() {
    return celebrate({
      [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
      })
    });
  },
  idParam() {
    return celebrate({
      [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
      })
    });
  },
  incidentObject() {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required()
      })
    });
  }
};
