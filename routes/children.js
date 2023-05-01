const express = require ('express');
const router = express.Router ();
const createChildValidator = require ('./../middleware/validators/children/createChild');
const updateChildValidator = require ('./../middleware/validators/children/updateChild');
const getChildValidator = require ('./../middleware/validators/children/getChild');
const deleteChildValidator = require ('./../middleware/validators/children/deleteChild');
const checkValidationResult = require ('./../middleware/validators/validationMW');

const {
  getAllChildren,
  createChild,
  getChild,
  updateChild,
  deleteChild,
} = require ('../controllers/children');
router
  .route ('/')
  .get (getAllChildren)
  .post (createChildValidator, checkValidationResult, createChild);
router
  .route ('/:id?')
  .get (getChildValidator, checkValidationResult, getChild)
  .patch (updateChildValidator, checkValidationResult, updateChild)
  .delete (deleteChildValidator, checkValidationResult, deleteChild);

module.exports = router;
