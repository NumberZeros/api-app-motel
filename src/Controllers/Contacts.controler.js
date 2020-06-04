
const contacts = require("../Modals/Contacts.model")

exports.getAll = async (req, res) => {
    const data = await contacts.find();
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
        await contacts(body).validate();
        const data = await contacts.create(body);
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
    try {
        const data = await contacts.findOneAndUpdate(params.id, body);
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