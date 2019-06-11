const express = require("express");
const {create} = require( "../controllers/SessionController");
const router = express.Router();

router.post("/api/sessions", create);

module.exports = router;
