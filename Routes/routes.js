var express = require("express")
var app = express();
var router = express.Router();
var HomeController = require("../Controller/HomeController");
const UserController = require("../Controller/UserController");

router.get('/', HomeController.index);
router.post('/User',UserController.Create);

module.exports = router;