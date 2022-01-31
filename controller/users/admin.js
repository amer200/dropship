const Admin = require('../../modells/users/admin');

exports.getUserData = (req, res, next) => {
    Admin.findOne()
        .then(admin => {
            if (!admin) {
                res.status(200).send({
                    "res": 'not found'
                })
            } else {
                res.status(200).send({
                    "res": admin
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                "res": err
            })
        })
}

exports.createUser = (req, res, next) => {
    const name = req.body.name;
    const password = req.body.password;
    const address = req.body.address;
    const email = req.body.email;
    const phone = req.body.phone;

    const admin = new Admin({
        name: name,
        password: password,
        address: address,
        email: email,
        phone: phone,
    })
    admin.save()
        .then(result => {
            res.status(200).send({
                "res": result
            })
        })
        .catch(err => {
            res.status(500).send({
                "res": err
            })
        })
}