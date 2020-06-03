
const customer = require("../Modals/Customers.model")
exports.getAll = async (req, res) => {
    const data = await customer.find();
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
    const {body} = req;
    try {
        const data = await customer.create(body ? body :{
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

exports.put = async (req, res) => {
    const {body} = req;
    try {
        const data = await customer.create(body ? body :{
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

exports.getInfo = async (req, res) => {
    const {body, params} = req;
    console.log(params)
    try {
        res.json({
            success: true,
            params,
        });
    } catch (err) {
        console.log("error :" + err)
        res.json({ message: err })
    };
}