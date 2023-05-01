const {body} = require ('express-validator');

module.exports = [
  body ('fullName').notEmpty ().withMessage ('Full name is required'),
  body ('age').isNumeric ().withMessage ('Age must be a number'),
  body ('level').isIn (['PreKG', 'KG1', 'KG2']).withMessage ('Invalid level'),
  body ('address.city').notEmpty ().withMessage ('City is required'),
  body ('address.street').notEmpty ().withMessage ('Street is required'),
  body ('address.building').notEmpty ().withMessage ('Building is required'),
];
