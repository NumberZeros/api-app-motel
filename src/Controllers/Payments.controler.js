
const payments = require("../Modals/Payments.model")

exports.getAll = async (req, res) => {
    const data = await payments.find();
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
        await payments(body).validate();
        const data = await payments.create(body);
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
    const {name, quantityPower,quantityWater, prices, pricesOther} = body
    try {
        const data = await payments.findOneAndUpdate(params.id, {name, quantityPower,quantityWater, prices, pricesOther});
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