const {body} = require ('express-validator');

module.exports = [
  body ('name').notEmpty ().withMessage ('Name is required'),
  body ('supervisor').isNumeric ().withMessage ('Invalid supervisor ID'),
  body ('children').isArray ().withMessage ('Children must be an array of IDs'),
];
