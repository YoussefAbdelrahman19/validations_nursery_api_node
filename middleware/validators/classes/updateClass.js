const {body} = require ('express-validator');

module.exports = [
  body ('name').optional ().notEmpty ().withMessage ('Name is required'),
  body ('supervisor')
    .optional ()
    .isNumeric ()
    .withMessage ('Invalid supervisor ID'),
  body ('children')
    .optional ()
    .isArray ()
    .withMessage ('Children must be an array of IDs'),
];
