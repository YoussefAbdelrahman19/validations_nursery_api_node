const {body, check} = require ('express-validator');

module.exports.createChildValidator = [
  body ('fullname').notEmpty ().withMessage ('Full name is required'),
  body ('password')
    .isLength ({min: 6})
    .withMessage ('Password must be at least 6 characters long'),
  body ('email').isEmail ().withMessage ('Invalid email address'),
  body ('image').isString ().withMessage ('Image must be a string'),
];

module.exports.deleteChildValidator = [
  check ('_id')
    .notEmpty ()
    .withMessage ('_id is required')
    .isNumeric ()
    .withMessage ('_id should be a number'),
];
module.exports.getChildValidator = [
  check ('_id')
    .notEmpty ()
    .withMessage ('_id is required')
    .isNumeric ()
    .withMessage ('_id should be a number'),
];
module.exports.updateChildValidator = [
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
