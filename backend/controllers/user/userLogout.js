async function userLogout(req, res) {
    try {
        res.clearCookie("token", {
            httpOnly: true, // Ensure httpOnly is set
            secure: true, // Required for HTTPS
            sameSite: "None", // Needed for cross-site cookies
        });

        return res.status(200).json({ success: true, message: "Logout successful" });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Logout failed" });
    }
}

module.exports = userLogout;
