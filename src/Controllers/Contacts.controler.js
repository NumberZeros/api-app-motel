
const contacts = require("../Modals/Contacts.model")
const motels = require("../Modals/Motels.model")
const customers = require("../Modals/Customers.model")

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
    try {
        const { body, params } = req;
        const { name, linkFile, customerId, motelId } = body
        const updateAt = new Date();
        if(customerId && motelId){
            const success = await customers.findOne({_id: customerId});
            if(success){
                await motels.findOneAndUpdate({_id: motelId}, {customer: customerId, contact: params.id})
                const data = await contacts.findOneAndUpdate({ _id: params.id }, { name, linkFile, updateAt }, { new: true });
                res.json({
                    success: true,
                    data,
                });
            }else throw "khong tim thay customer";
        } else{
            const data = await contacts.findOneAndUpdate({ _id: params.id }, { name, linkFile, updateAt }, { new: true });
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
        const data = await contacts.findOneAndDelete({ _id: params.id });
        res.json({
            success: true,
            data,
        });
    } catch (err) {
        console.log("error :" + err)
        res.json({ message: err })
    };
}