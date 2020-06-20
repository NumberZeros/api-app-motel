
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
    try {
        const { body } = req;
        await customer(body).validate();
        const data = await customer.create(body);
        res.json({
            success: true,
            data,
        });
    }
    catch (err) {
        console.log("error :" + err)
        res.json({ message: "không thể thêm dữ liệu rỗng" })
    }

}

exports.put = async (req, res) => {
    const { body, params } = req;
    const {name, birthDay, note} = body;
    try {
        console.log("body", body, params.id)
        const data = await customer.findOneAndUpdate({_id: params.id}, {name, birthDay, note});
        console.log("put", data)
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
    const { body, params } = req;
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