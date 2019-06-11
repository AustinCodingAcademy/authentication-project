const express = require("express");
const {create} = require( "../controllers/UserController");
const router = express.Router();

router.post("/api/users", create);

module.exports = router;
