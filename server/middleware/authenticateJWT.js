const jwt = require("jsonwebtoken")

authenticateJWT = (req, res, next) => {
    const token = req.cookies.token
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(204);
    }
  }

module.exports = authenticateJWT