const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Company = mongoose.model('Company')
const { jwtkey } = require('../keys')

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    //authorization === Bearer sfafsafa
    if (!authorization) {
        return res.status(401).send({ error: "you must be logged in" })
    }
    const token = authorization.replace("Bearer ", "");
    jwt.verify(token, jwtkey, async (err, payload) => {
        if (err) {
            return res.status(401).send({ error: "you must be logged in 2" })
        }
        const { companyID } = payload;
        const company = await Company.findById(companyID)
        req.company = company;
        next();
    })
}