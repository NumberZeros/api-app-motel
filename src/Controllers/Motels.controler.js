
const motels = require("../Modals/Motels.model")

exports.getAll = async (req, res) => {
    const data = await motels.find();
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
        await motels(body).validate();
        const data = await motels.create(body);
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
    const {name, initPower, initWater, notes, customer, contact} = body
    try {
        const data = await motels.findOneAndUpdate({_id: params.id}, {name, initPower, initWater, notes, customer, contact});
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
        const data = await motels.findOneAndDelete({_id: params.id});
        res.json({
            success: true,
            data,
        });
    } catch (err) {
        console.log("error :" + err)
        res.json({ message: err })
    };
}