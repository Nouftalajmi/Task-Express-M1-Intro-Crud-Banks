const express = require("express");
const app = express();

let accounts = require("./accounts");

const PORT = 8000;
app.use(express.json());
// get all accounts
app.get("/api/accounts", (req, res) => {
  return res.status(200).json(accounts);
});
// create a new account
app.post("/api/accounts", (req, res) => {
  const newAccountId = accounts[accounts.length - 1].id + 1;
  accounts.push({ id: newAccountId, ...req.body });
  res.status(201).json(accounts);
});
// update an account
app.put("/api/accounts/:accountsId", (req, res) => {
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
});
// delete an account
app.delete("/api/accounts/:accountsId", (req, res) => {
  const { accountsId } = req.params;
  accounts = accounts.filter((account) => account.id != accountsId);
  return res.status(200).json(accounts);
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
