const express = require("express");
const router = express.Router();
const { login, register, getprofile, editprofile, emailAuth, changePassword } = require('../controllers/user')

router.route('/login')
    .post(login)
router.route('/register')
    .post(register)
router.route('profile')
    .post(editprofile)
    .get(getprofile)
router.route('/passauth')
    .put(changePassword)
    .post(emailAuth)

module.exports = router;
