const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const { jwtkey } = require('../keys')
const router = express.Router();
const Users = mongoose.model('Users');
const Admin = mongoose.model('Admin');
const Company = mongoose.model('Company');


router.post('/studentsignup', async (req, res) => {

    const { email, name, age, semester, department, password } = req.body;

    try {
        const user = new Users({ email, name, age, password, department, semester });
        await user.save();
        const token = jwt.sign({ userId: user._id }, jwtkey)
        res.send({ token })
    } catch (err) {
        return res.status(422).send(err.message)
    }


})

router.post('/studentsignin', async (req, res) => {

    const { email, password } = req.body
    if (!email || !password) {
        return res.status(422).send({ error: "must provide email or password" })
    }
    const user = await Users.findOne({ email })
    if (!user) {
        return res.status(422).send({ error: "must provide email or password" })
    }
    try {
        await user.comparePassword(password);
        const token = jwt.sign({ userId: user._id }, jwtkey)
        res.send({ token })
        console.log(token)
    } catch (err) {
        return res.status(422).send({ error: "must provide email or password" })
    }

})
router.post('/adminsignup', async (req, res) => {

    const { email, name, password } = req.body;

    try {
        const admin = new Admin({ email, name, password });
        await admin.save();
        const token = jwt.sign({ adminId: admin._id }, jwtkey)
        res.send({ token })
    } catch (err) {
        return res.status(422).send(err.message)
    }


})
router.post('/adminsignin', async (req, res) => {

    const { email, password } = req.body
    if (!email || !password) {
        return res.status(422).send({ error: "must provide email or password" })
    }
    const admin = await Admin.findOne({ email })
    if (!admin) {
        return res.status(422).send({ error: "must provide email or password" })
    }
    try {
        await admin.comparePassword(password);
        const token = jwt.sign({ adminId: admin._id }, jwtkey)
        res.send({ token })
        console.log(token)
    } catch (err) {
        return res.status(422).send({ error: "must provide email or password" })
    }

})

router.post('/companysignup', async (req, res) => {

    const { email, name, password } = req.body;

    try {
        const company = new Company({ email, name, password });
        await company.save();
        const token = jwt.sign({ companyId: company._id }, jwtkey)
        res.send({ token })
    } catch (err) {
        return res.status(422).send(err.message)
    }


})
router.post('/companysignin', async (req, res) => {

    const { email, password } = req.body
    if (!email || !password) {
        return res.status(422).send({ error: "must provide email or password" })
    }
    const company = await Company.findOne({ email })
    if (!company) {
        return res.status(422).send({ error: "must provide email or password" })
    }
    try {
        await company.comparePassword(password);
        const token = jwt.sign({ companyId: company._id }, jwtkey)
        res.send({ token })
        console.log(token)
    } catch (err) {
        return res.status(422).send({ error: "must provide email or password" })
    }

})

module.exports = router