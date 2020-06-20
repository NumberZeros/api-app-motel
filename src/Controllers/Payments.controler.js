
const payments = require("../Modals/Payments.model")
const motels = require("../Modals/Motels.model")
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
    try {
        const { body, params } = req;
        const { name, quantityPower, quantityWater, prices, pricesOther, motelId } = body
        if (motelId) {
            const success = await motels.findOneAndUpdate({ _id: motelId }, { payment: params.id })
            if (success) {
                const data = await payments.findOneAndUpdate({ _id: params.id }, { name, quantityPower, quantityWater, prices, pricesOther }, { new: true });
                res.json({
                    success: true,
                    data,
                });
            } else throw "khong tim thay motel"
        } else {
            const data = await payments.findOneAndUpdate({ _id: params.id }, { name, quantityPower, quantityWater, prices, pricesOther }, { new: true });
            res.json({
                success: true,
                data,
            });
        }
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
        const data = await payments.findOneAndDelete({ _id: params.id });
        res.json({
            success: true,
            data,
        });
    } catch (err) {
        console.log("error :" + err)
        res.json({ message: err })
    };
}