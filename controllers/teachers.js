//Get all teachers
const getAllTeachers = (req, res, next) => {
  res.status (200).json ({msg: 'all Teacher in the system'});
};

//Get a teachers
const getTeacher = (req, res, next) => {
  res.status (200).json ({msg: 'A Teachere'});
};

//CREATE new admin
const createTeacher = (req, res) => {
  res.status (201).json ({msg: 'Teacher created successfully'});
};

//UPDATE existing Teacher
const updateTeacher = (req, res) => {
  res.status (200).json ({msg: 'Teacher updated successfully'});
};
//DELETE existing Teacher
const deleteTeacher = (req, res) => {
  res.status (200).json ({msg: 'Teacher deleted successfully'});
};

module.exports = {
  getAllTeachers,
  createTeacher,
  getTeacher,
  updateTeacher,
  deleteTeacher,
};
