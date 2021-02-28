const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const companySchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})
companySchema.pre('save', function (next) {
    const company = this;
    if (!company.isModified('password')) {
        return next()
    }
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err)
        }
        bcrypt.hash(company.password, salt, (err, hash) => {
            if (err) {
                return next(err)
            }
            company.password = hash;
            next()
        })

    })

})


companySchema.methods.comparePassword = function (candidatePassword) {
    const company = this;
    return new Promise((resolve, reject) => {
        bcrypt.compare(candidatePassword, company.password, (err, isMatch) => {
            if (err) {
                return reject(err)
            }
            if (!isMatch) {
                return reject(err)
            }
            resolve(true)
        })
    })

}
mongoose.model('Company', companySchema);
