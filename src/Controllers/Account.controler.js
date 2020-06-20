
const account = require("../Modals/Accounts.model")
// const {pick} = require("lodash")
exports.get = async (req, res) => {
    const data = await account.find();
    try {
        res.json({
            success: true,
            data: data,
        })
    } catch (err) {
        res.status(404).send({
            messages: "not founding"
        })
    }
};

exports.login = async (req, res) => {
    const {username, password} = req.body;
    try {
        const data = await account.findOne({username, password});
        res.json({
            success: true,
            data,
        });
    } catch (err) {
        console.log("error :" + err)
        res.json({ message: err })
    };
}

exports.put = async (req, res) => {
    const { body, params } = req;
    const {name, email, birthDay, username} = body
    try {
        const data = await account.findOneAndUpdate({_id: params.id}, {name, email, birthDay, username});
        res.json({
            success: true,
            data,
        });
    } catch (err) {
        console.log("error :" + err)
        res.json({ message: err })
    };
}

exports.delete = async (req, res) => {
    const { params } = req;
    try {
        const data = await account.findOneAndDelete({_id: params.id});
        res.json({
            success: true,
            data,
        });
    } catch (err) {
        console.log("error :" + err)
        res.json({ message: err })
    };
}
