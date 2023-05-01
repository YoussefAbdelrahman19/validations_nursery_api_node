const {validationResult} = require ('express-validator');
module.exports = (req, res, next) => {
  let result = validationResult (req);
  if (result.errors.length != 0) {
    let errorString = result.errors.reduce (
      (curr, obj) => curr + obj.msg + ' ,',
      ''
    );
    let error = new Error (errorString);
    error.status = 422;
    next (error);
  }
};
