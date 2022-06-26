const jwt = require('jsonwebtoken')

const secret = process.env.NODE_APP_SECRET;

module.exports = function (req, res, next) {
    if (req.method === 'OPTIONS')
        next()
    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token)
            return res.status(403).json("Authorization error");
        req.logined = jwt.verify(token, secret);
        next()
    } catch (e) {
        console.log(e);
        return res.status(403).json("Authorization error");
    }
}
