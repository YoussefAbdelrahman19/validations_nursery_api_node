const {body, check} = require ('express-validator');

module.exports.getTeacherValidator = [
  check ('_id')
    .notEmpty ()
    .withMessage ('_id is required')
    .isMongoId ()
    .withMessage ('_id should be a valid ObjectID'),
];

module.exports.createTeacherValidator = [
  body ('fullName').notEmpty ().withMessage ('Full name is required'),
  body ('age').isNumeric ().withMessage ('Age must be a number'),
  body ('level').isIn (['PreKG', 'KG1', 'KG2']).withMessage ('Invalid level'),
  body ('address.city').notEmpty ().withMessage ('City is required'),
  body ('address.street').notEmpty ().withMessage ('Street is required'),
  body ('address.building').notEmpty ().withMessage ('Building is required'),
];
module.exports.deleteTeacherValidator = [
  check ('_id')
    .notEmpty ()
    .withMessage ('_id is required')
    .isMongoId ()
    .withMessage ('_id should be a valid ObjectID'),
];

module.exports.updateTeacherValidator = [
  body ('fullname')
    .optional ()
    .notEmpty ()
    .withMessage ('Full name is required'),
  body ('password')
    .optional ()
    .isLength ({min: 6})
    .withMessage ('Password must be at least 6 characters long'),
  body ('email').optional ().isEmail ().withMessage ('Invalid email address'),
  body ('image').optional ().isString ().withMessage ('Image must be a string'),
];
