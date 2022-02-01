const Markter = require('../../modells/users/markter');

exports.getUsersData = (req, res, next) => {
    Markter.find()
        .then(markters => {
            res.send(markters);
        })
        .catch(err => {
            res.status(500).send({
                "res": err
            })
        })
}
exports.getUserData = (req, res, next) => {
    const id = req.params.id
    Markter.findById(id)
        .then(markter => {
            if (!markter) {
                res.status(200).send({
                    "res": 'not found'
                })
            } else {
                res.status(200).send({
                    "res": markter
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

    const markter = new Markter({
        name: name,
        password: password,
        address: address,
        email: email,
        phone: phone,
    })
    markter.save()
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

exports.updateUser = (req, res, next) => {
    const id = req.params.id;
    const name = req.body.name;
    const password = req.body.password;
    const address = req.body.address;
    const email = req.body.email;
    const phone = req.body.phone;
    const wallet = {
        withdrawable: req.body.withdrawable,
        pending: req.body.pending
    }
    const newmarkter = {
        name: req.body.name,
        password: req.body.password,
        address: req.body.address,
        email: req.body.email,
        phone: req.body.phone,
        wallet: {
            withdrawable: req.body.withdrawable,
            pending: req.body.pending
        }
    }
    Markter.findOneAndUpdate({
            _id: id
        }, newmarkter, {
            new: true
        })
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            res.status(500).send({
                "res": err
            })
        })
}