const express = require("express");
const { register ,Login} = require("../controllers/user/user");
const userDetailsController = require("../controllers/user/userDetails");
const authToken = require("../middleware/auth");
const router = express.Router();


router.post('/register', register);
router.post('/login', Login);
// router.get("/user-details" , authToken,userDetailsController)
router.get("/user-details" , authToken,userDetailsController)
module.exports = router;