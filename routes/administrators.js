const express = require ('express');
const router = express.Router ();

const {
  getAllAdmins,
  createAdmin,
  getAdmin,
  updateAdmin,
  deleteAdmin,
} = require ('../controllers/administrators');
router.route ('/').get (getAllAdmins).post (createAdmin);
router.route ('/:id?').get (getAdmin).patch (updateAdmin).delete (deleteAdmin);

module.exports = router;
