'use strict';
const {TRANSACTION_TYPES} = require('../../constants')
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('TransactionHistories', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            sum: {
                type: Sequelize.INTEGER
            },
            operationType: {
              type: Sequelize.ENUM(...Object.values(TRANSACTION_TYPES)),
              allowNull:false,
            },
            userId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'Users',
                    key: 'id'
                }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: new Date()
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: new Date()
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('TransactionHistories');
    }
};