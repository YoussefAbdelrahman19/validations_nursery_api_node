//Get all Admins
const getAllAdmins = (req, res, next) => {
  res.status (200).json ({msg: 'all Admins in the system'});
};

//Get an admin
const getAdmin = (req, res, next) => {
  res.status (200).json ({msg: 'An admin'});
};

//CREATE new admin
const createAdmin = (req, res) => {
  res.status (200).json ({msg: 'Admin created successfully'});
};

//UPDATE existing Admin
const updateAdmin = (req, res) => {
  res.status (200).json ({msg: 'Admin updated successfully'});
};
//DELETE existing Admin
const deleteAdmin = (req, res) => {
  res.status (200).json ({msg: 'Admin deleted successfully'});
};

module.exports = {
  getAllAdmins,
  createAdmin,
  getAdmin,
  updateAdmin,
  deleteAdmin,
};
