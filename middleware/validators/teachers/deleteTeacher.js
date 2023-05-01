const {check} = require ('express-validator');

module.exports = [
  check ('_id')
    .notEmpty ()
    .withMessage ('_id is required')
    .isMongoId ()
    .withMessage ('_id should be a valid ObjectID'),
];
