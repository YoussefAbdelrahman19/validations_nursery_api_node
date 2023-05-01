const express = require ('express');
const router = express.Router ();
const checkValidationResult = require ('./../middleware/validators/validationMW');

const {
  updateTeacherValidator,
  getTeacherValidator,
  deleteTeacherValidator,
  createTeacherValidator,
} = require ('./../middleware/validators/teachers/teacherValidations');

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
