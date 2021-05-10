'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            'TransactionHistories',
            [
                {
                    sum: 200,
                    operationType: "INCOME",
                    userId: 1
                },
                {
                    sum: 400,
                    operationType: "CONSUMPTION",
                    userId: 1
                },
                {
                    sum: 200,
                    operationType: "INCOME",
                    userId: 2
                },
                {
                    sum: 200,
                    operationType: "INCOME",
                    userId: 2
                },
                {
                    sum: 200,
                    operationType: "INCOME",
                    userId: 2
                },
                {
                    sum: 200,
                    operationType: "INCOME",
                    userId: 1
                },
                {
                    sum: 200,
                    operationType: "INCOME",
                    userId: 1
                }
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
