const TransactionsController = require("../controllers/transactionsController");
const transactionsRouter = require('express').Router();

transactionsRouter.get(
    '/history',
    TransactionsController.getTransactionsHistory
)
transactionsRouter.get(
    '/totalFlow',
    TransactionsController.getTotalMoneyFlow
)


module.exports = transactionsRouter