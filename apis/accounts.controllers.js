let accounts = require("../accounts");

const accountsGet = (req, res) => {
  return res.status(200).json(accounts);
};
const accountNewAccount = (req, res) => {
  const newAccountId = accounts[accounts.length - 1].id + 1;
  accounts.push({ id: newAccountId, ...req.body });
  res.status(201).json(accounts);
};

const updateAccount = (req, res) => {
  const { accountsId } = req.params;
  const updatedAccounts = accounts.find(
    (account) => account.id === +accountsId
  );
  if (updatedAccounts) {
    updatedAccounts.username = req.body.username;
    updatedAccounts.funds = req.body.funds;
    return res.status(201).json(updatedAccounts);
  } else {
    return res.status(404).json({
      msg: "Account not found!",
    });
  }
};
const deleteAccount = (req, res) => {
  const { accountsId } = req.params;
  accounts = accounts.filter((account) => account.id != accountsId);
  return res.status(204).json(accounts);
};
module.exports = {
  accountsGet,
  accountNewAccount,
  updateAccount,
  deleteAccount,
};
