const {body} = require ('express-validator');
module.exports = [
  body ('fullName')
    .optional ()
    .notEmpty ()
    .withMessage ('Full name is required'),
  body ('age').optional ().isNumeric ().withMessage ('Age must be a number'),
  body ('level')
    .optional ()
    .isIn (['PreKG', 'KG1', 'KG2'])
    .withMessage ('Invalid level'),
  body ('address.city')
    .optional ()
    .notEmpty ()
    .withMessage ('City is required'),
  body ('address.street')
    .optional ()
    .notEmpty ()
    .withMessage ('Street is required'),
  body ('address.building')
    .optional ()
    .notEmpty ()
    .withMessage ('Building is required'),
];
