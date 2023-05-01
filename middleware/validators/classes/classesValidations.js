const {body, check} = require ('express-validator');

module.exports.createClassValidator = [
  body ('name').notEmpty ().withMessage ('Name is required'),
  body ('supervisor').isNumeric ().withMessage ('Invalid supervisor ID'),
  body ('children').isArray ().withMessage ('Children must be an array of IDs'),
];
module.exports.deleteClassValidator = [
  check ('_id')
    .notEmpty ()
    .withMessage ('_id is required')
    .isNumeric ()
    .withMessage ('_id should be a number'),
];

module.exports.getClassValidator = [
  check ('_id')
    .notEmpty ()
    .withMessage ('_id is required')
    .isNumeric ()
    .withMessage ('_id should be a number'),
];

module.exports.updateClassValidator = [
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
