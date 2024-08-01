
const express= require("express");
const vendorController= require('../controlls/vendorController');

const router= express.Router()

router.route("/login").post(vendorController.login)
router.route("/vendor").post(vendorController.register)

module.exports= router