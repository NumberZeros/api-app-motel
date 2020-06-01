const Account = require('../Modals/Account.model');

exports.test = async function (req, res) {
    // xu ly model
    const myAccount = await Account.find({ });
    res.status(406).json({
        success: true,
        data: myAccount// ket qua
    });
};