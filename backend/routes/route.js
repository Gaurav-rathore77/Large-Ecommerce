const express = require("express");
const { register ,Login} = require("../controllers/user/user");
const userDetailsController = require("../controllers/user/userDetails");
const authToken = require("../middleware/auth");
const userLogout = require("../controllers/user/userLogout");
const allUsers = require("../controllers/user/allUsers");
const updateUser = require("../controllers/user/updateUser");
const router = express.Router();


router.post('/register', register);
router.post('/login', Login);
router.get('/login',(req,res)=>{
    res.send("login")
})
// router.get("/user-details" , authToken,userDetailsController)
router.get("/user-details" , authToken,userDetailsController)
router.get("/userLogout",userLogout)
// router.get("/userLogout",  (req, res) => {
//     res.send("User is authenticated");
// })
router.post("/updateUser",authToken,updateUser)
// router.get("/updateUser",(req,res)=>{
//     res.send("updateUser")
// })
router.get("/allUsers",allUsers)
module.exports = router;