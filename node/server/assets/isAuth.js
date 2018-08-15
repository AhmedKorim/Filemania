const jwt = require("jsonwebtoken");
const config = require("./config");

/* check for protected routes */
module.exports = (req, res, next) => {
    try {
        const token = req.headers["authorization"].split(" ")[1];
        const decoded = jwt.verify(token, config.secret);
        req.userInfo = decoded;
        next();
    } catch(err) {
        return res.json({
            success: false,
            msgs: ["auth is required"]
        });
    }
};