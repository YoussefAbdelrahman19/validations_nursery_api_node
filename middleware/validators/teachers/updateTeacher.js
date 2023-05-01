const {body} = require ('express-validator');
module.exports = [
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
