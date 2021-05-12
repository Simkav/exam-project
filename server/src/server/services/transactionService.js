const { TransactionHistory, sequelize } = require('../models');

module.exports.getTransactions = async userId =>
  await TransactionHistory.findAll({
    where: { userId },
    attributes: { exclude: ['userId'] },
  });

module.exports.getFlow = async userId =>
  await TransactionHistory.findAll({
    where: { userId },
    group: 'operationType',
    attributes: {
      exclude: ['userId', 'id', 'createdAt', 'updatedAt', 'sum'],
      include: [[sequelize.fn('sum', sequelize.col('sum')), 'total']],
    },
  });
