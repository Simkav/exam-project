const { TransactionHistory, sequelize } = require('../models/index');
const createHttpError = require('http-errors');

module.exports.getFullTransactionsHistory = async (req, res, next) => {
    try {
        const { tokenData: { userId } } = req
        const history = await TransactionHistory.findAll({ where: { userId }, attributes: { exclude: ['userId'] } })
        const flow = await TransactionHistory.findAll({
            where: { userId },
            group: 'operationType',
            attributes: {
                exclude: ['userId', 'id', 'createdAt', 'updatedAt', 'sum'],
                include: [[sequelize.fn('sum', sequelize.col('sum')), 'total']]
            }
        }).map((el) => {
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
        const history = await TransactionHistory.findAll({ where: { userId }, attributes: { exclude: ['userId'] } })
        res.send({ data: { history } })
    } catch (err) {
        console.log(err)
        next(err)
    }
}
module.exports.getTotalMoneyFlow = async (req, res, next) => {
    try {
        const { tokenData: { userId } } = req
        const flow = await TransactionHistory.findAll({
            where: { userId },
            group: 'operationType',
            attributes: {
                exclude: ['userId', 'id', 'createdAt', 'updatedAt', 'sum'],
                include: [[sequelize.fn('sum', sequelize.col('sum')), 'total']]
            }
        })
        res.send({ data: { flow } })
    } catch (err) {
        console.log(err)
        next(err)
    }
}