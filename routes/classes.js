const express = require ('express');
const router = express.Router ();
const {
  createClassValidator,
  updateClassValidator,
  getClassValidator,
  deleteClassValidator,
} = require ('./../middleware/validators/classes/classesValidations');

const checkValidationResult = require ('./../middleware/validators/validationMW');

const {
  getAllClasses,
  createClass,
  getClass,
  updateClass,
  deleteClass,
} = require ('../controllers/classes');

router
  .route ('/')
  .get (getAllClasses)
  .post (createClassValidator, checkValidationResult, createClass);
router
  .route ('/:id?')
  .get (getClassValidator, checkValidationResult, getClass)
  .patch (updateClassValidator, checkValidationResult, updateClass)
  .delete (deleteClassValidator, checkValidationResult, deleteClass);

module.exports = router;
