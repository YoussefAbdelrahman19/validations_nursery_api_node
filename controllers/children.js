//GET all children
const getAllChildren = (req, res, next) => {
  res.status (200).json ({msg: 'all Children in the system'});
};

//GET a Childs
const getChild = (req, res, next) => {
  res.status (200).json ({msg: 'A Child'});
};

//CREATE new child
const createChild = (req, res) => {
  res.status (200).json ({msg: 'Child created successfully'});
};

//UPDATE existing Child
const updateChild = (req, res) => {
  res.status (200).json ({msg: 'Child updated successfully'});
};
//DELETE existing Child
const deleteChild = (req, res) => {
  res.status (200).json ({msg: 'Child deleted successfully'});
};

module.exports = {
  getAllChildren,
  createChild,
  getChild,
  updateChild,
  deleteChild,
};
