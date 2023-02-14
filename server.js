const express = require("express");
const { faker } = require("@faker-js/faker");

const app = express();
const port = 3000;

app.get("/api/accounts", (req, res) => {
    const account = {
        account_holder: faker.name.fullName(),
        account_id: faker.finance.account(),
        account_type: faker.helpers.arrayElement(["checking", "savings", "credit card"]),
        balance: parseFloat(faker.finance.amount(0, 10000, 2)),
    };
    res.json(account);
});

app.get("/api/accounts/:count", (req, res) => {
    const count = parseInt(req.params.count);
    const accounts = [];
    for (let i = 0; i < count; i++) {
        const account = {
            account_holder: faker.name.fullName(),
            account_id: faker.finance.account(),
            account_type: faker.helpers.arrayElement(["checking", "savings", "credit card"]),
            balance: parseFloat(faker.finance.amount(0, 10000, 2)),
        };
        accounts.push(account);
    }
    res.json(accounts);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
