const express = require("express");
const app = express();
const accountsRoutes = require("./apis/accounts.routes");

const PORT = 8000;

app.use(express.json());
app.use("/api/accounts", accountsRoutes);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
