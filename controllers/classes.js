//Get all Children
const getAllClasses = (req, res, next) => {
  res.status (200).json ({msg: 'all Classes in the system'});
};

//Get all Children
const getClass = (req, res, next) => {
  res.status (200).json ({msg: 'A classe'});
};

//CREATE new admin
const createClass = (req, res) => {
  res.status (200).json ({msg: 'Class created successfully'});
};

//UPDATE existing class
const updateClass = (req, res) => {
  res.status (200).json ({msg: 'Class updated successfully'});
};
//DELETE existing class
const deleteClass = (req, res) => {
  res.status (200).json ({msg: 'Class deleted successfully'});
};

module.exports = {
  getAllClasses,
  createClass,
  getClass,
  updateClass,
  deleteClass,
};
