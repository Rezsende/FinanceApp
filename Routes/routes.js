const express = require("express")
const app = express();
const router = express.Router();

var HomeController = require("../Controller/HomeController");

router.get('/',HomeController.index);

module.exports = router;