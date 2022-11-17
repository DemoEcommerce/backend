const Account = require("../models/accountModel");

const accountCtrl = {
  addAccount: async (req, res) => {
    try {
      const { title, description, price, inventory, sold, type, nation } =
        req.body;
      const newAccount = new Account({
        title,
        description,
        price,
        inventory,
        sold,
        type,
        nation,
      });
      await newAccount.save();
      res.json({
        msg: "Add success!",
        account: newAccount._doc,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getAccount: async (req, res) => {
    try {
      const accounts = await Account.find();
      res.json([...accounts]);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  deleteAccount: async (req, res) => {
    try {
      const { id } = req.body;
      await Account.findOneAndDelete({ _id: id });
      res.json({ msg: "Delete success!" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  updateAccount: async (req, res) => {
    try {
      const { id, title, description, price, inventory, sold, type, nation } =
        req.body;
      await Account.findByIdAndUpdate(
        { _id: id },
        {
          title,
          description,
          price,
          inventory,
          sold,
          type,
          nation,
        }
      );
      res.json({ msg: "Update success!" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = accountCtrl;
