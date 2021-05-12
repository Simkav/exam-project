const createHttpError = require('http-errors');
const {getFlow,getTransactions} = require('../services/transactionService')
module.exports.getFullTransactionsHistory = async (req, res, next) => {
    try {
        const { tokenData: { userId } } = req
        const history = await getTransactions(userId)
        const rawFlow = await getFlow(userId)
        const flow = rawFlow.map((el) => {
            return [el.getDataValue("operationType"), el.getDataValue("total")]
        })
        res.send({ data: { history, flow } })
    } catch (err) {
        console.log(err)
        next(err)
    }
}

module.exports.getTransactionsHistory = async (req, res, next) => {
    try {
        const { tokenData: { userId } } = req
        const history = await getTransactions(userId)
        res.send({ data: { history } })
    } catch (err) {
        console.log(err)
        next(err)
    }
}
module.exports.getTotalMoneyFlow = async (req, res, next) => {
    try {
        const { tokenData: { userId } } = req
        const flow = getFlow(userId)
        res.send({ data: { flow } })
    } catch (err) {
        console.log(err)
        next(err)
    }
}