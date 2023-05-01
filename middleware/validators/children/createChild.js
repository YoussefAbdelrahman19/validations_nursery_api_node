const {body} = require ('express-validator');

module.exports = [
  body ('fullname').notEmpty ().withMessage ('Full name is required'),
  body ('password')
    .isLength ({min: 6})
    .withMessage ('Password must be at least 6 characters long'),
  body ('email').isEmail ().withMessage ('Invalid email address'),
  body ('image').isString ().withMessage ('Image must be a string'),
];
