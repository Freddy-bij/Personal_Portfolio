
const express = require("express")
const  SendEmailMessage = require("../controller/Contact.controller.js")

const router = express.Router();

router.post ("/contact" , SendEmailMessage)

module.exports = router

