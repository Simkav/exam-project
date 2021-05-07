'use strict';
const { Model } = require('sequelize')
const { TRANSACTION_TYPES } = require('../../constants')
module.exports = (sequelize, DataTypes) => {
    class TransactionHistory extends Model {
        static associate({ User }) {
            TransactionHistory.belongsTo(User, {
                foreignKey: 'userId',
                targetKey: 'id'
            })
        }

    }

    TransactionHistory.init(
        {
            sum: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Users',
                    key: 'id'
                }
            },
            operationType: {
                type: DataTypes.ENUM(...Object.values(TRANSACTION_TYPES)),
                allowNull: false
            },
        },
        {
            sequelize,
            modelName: 'TransactionHistory'
        }
    )
    return TransactionHistory;
};