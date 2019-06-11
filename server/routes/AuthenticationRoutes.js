const express = require("express");
const {authentication} = require( "../controllers/AuthenticationController");
const router = express.Router();

router.use(authentication);

module.exports = router;
