const router = require("express").Router();
const accountCtrl = require("../controllers/accountCtrl");

router.post("/add_account", accountCtrl.addAccount);
router.get("/get_all_account", accountCtrl.getAccount);
router.post("/delete_account", accountCtrl.deleteAccount);
router.post("/update_account", accountCtrl.updateAccount);

module.exports = router;
