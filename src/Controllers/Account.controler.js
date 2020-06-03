
const Account = require("../Modals/Accounts.model")
exports.get = async (req, res) => {
    console.log('here....')
    const data = await Account.find();
    try {
        res.json({
            success: true,
            data,
        })
    } catch (err) {
        res.status(404).send({
            messages: "not founding"
        })
    }
};

exports.insert = async (req, res, next) => {
    try {
        const data = await Account.create({ name: 'admin', username: "admin", password: "123456" })

        res.json({
            success: true,
            body: data,
        })
    } catch (err) {
        res.status(404).send({
            messages: "not accept"
        })
    }
};