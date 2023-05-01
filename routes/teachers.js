const express = require ('express');
const router = express.Router ();
const createTeacherValidator = require ('./../middleware/validators/teachers/createTeacher');
const updateTeacherValidator = require ('./../middleware/validators/teachers/updateTeacher');
const getTeacherValidator = require ('./../middleware/validators/teachers/getTeacher');
const deleteTeacherValidator = require ('./../middleware/validators/teachers/deleteTeacher');
const checkValidationResult = require ('./../middleware/validators/validationMW');

const {
  getAllTeachers,
  createTeacher,
  getTeacher,
  updateTeacher,
  deleteTeacher,
} = require ('../controllers/teachers');

router
  .route ('/')
  .get (getAllTeachers)
  .post (createTeacherValidator, checkValidationResult, createTeacher);
router
  .route ('/:id?')
  .get (getTeacherValidator, checkValidationResult, getTeacher)
  .patch (updateTeacherValidator, checkValidationResult, updateTeacher)
  .delete (deleteTeacherValidator, checkValidationResult, deleteTeacher);

module.exports = router;
