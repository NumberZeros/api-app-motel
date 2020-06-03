
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
        console.log(req)
        res.json({
            success: true,
            data: req.body,
        });
        // if(body) {
        //     const data = await motels.create(body);
        //     res.json({
        //         success: true,
        //         data,
        //     });
        // } else {
        //     console.log("error :" + err)
        //     res.json({ message: "không thể thêm dữ liệu rỗng" })
        // };
    }
    catch (err) {

    }

}

exports.put = async (req, res) => {
    const { body, params } = req;
    try {
        const data = await motels.findOneAndUpdate(params.id, body);
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