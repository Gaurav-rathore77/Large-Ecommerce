const User = require("../../models/user");
const userDetailsController = async (req, res) => {
    try {
      console.log("Request Object:", req); // Check full request
      console.log("Headers:", req.headers);
      console.log("User ID:", req.userId); // Check if userId exists
  
      const user = await User.findById(req.userId);
  
      res.status(200).json({
        data: user,
        error: false,
        success: true,
        message: "User details",
      });
  
      console.log("User Data:", user);
    } catch (err) {
      res.status(400).json({
        message: err.message || err,
        error: true,
        success: false,
      });
    }
  };
  
  module.exports = userDetailsController;  