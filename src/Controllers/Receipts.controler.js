
const receipts = require("../Modals/Receipts.model")

exports.getAll = async (req, res) => {
    const data = await receipts.find();
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
        await receipts(body).validate();
        const data = await receipts.create(body);
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
    const {name, quantityPower, quantityWater,prices, pricesOther,status,motel} = body
    try {
        const data = await receipts.findOneAndUpdate(params.id, {name, quantityPower, quantityWater,prices, pricesOther,status,motel});
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