
const account = require("../Modals/Accounts.model")
exports.get = async (req, res) => {
    console.log('here....')
    const data = await account.find();
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

exports.post = async (req, res) => {
    try {
        const data = await account.create({
            username: "admin",
            password: "12345"
        });
        res.json({
            success: true,
            data,
        });
    } catch (err) {
        console.log("error :" + err)
        res.json({ message: err })
    };
}