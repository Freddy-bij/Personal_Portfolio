
const express = require("express");
const SendEmailMessage = require("../controller/Contact.controller");

const router = express.Router();

router.post("/", SendEmailMessage);

module.exports = router;


