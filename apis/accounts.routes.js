const express = require("express");
const router = express.Router();
const {
  accountsGet,
  accountNewAccount,
  updateAccount,
  deleteAccount,
} = require("./accounts.controllers");
let accounts = require("../accounts");

router.get("/", accountsGet);
// create a new account
router.post("/", accountNewAccount);
// update an account
router.put("/:accountsId", updateAccount);
// delete an account
router.delete("/:accountsId", deleteAccount);
module.exports = router;
