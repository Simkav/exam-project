const bd = require('../models/index');
const RightsError = require('../errors/RightsError');
const ServerError = require('../errors/ServerError');
const CONSTANTS = require('../../constants');

module.exports.parseBody = (req, res, next) => {
    const { body: { contests: reqContests } } = req
    const contests = JSON.parse(reqContests)
    for (let i = 0; i < contests.length; i++) {
        if (contests[i].haveFile) {
            const file = req.files.splice(0, 1);
            contests[i].fileName = file[0].filename;
            contests[i].originalFileName = file[0].originalname;
        }
    }
    next();
};

module.exports.canGetContest = async (req, res, next) => {
    const { tokenData: { role, userId }, headers: { contestid } } = req
    let result = null;
    try {
        if (role === CONSTANTS.CUSTOMER) {
            result = await bd.Contests.findOne({
                where: { id: contestid, userId },
            });
        } else if (role === CONSTANTS.CREATOR) {
            result = await bd.Contests.findOne({
                where: {
                    id: contestid,
                    status: {
                        [bd.Sequelize.Op.or]: [
                            CONSTANTS.CONTEST_STATUS_ACTIVE,
                            CONSTANTS.CONTEST_STATUS_FINISHED,
                        ],
                    },
                },
            });
        }
        !!result ? next() : next(new RightsError());
    } catch (e) {
        next(new ServerError(e));
    }
};

module.exports.onlyForCreative = (req, res, next) => {
    const { tokenData: { role } } = req
    if (role === CONSTANTS.CUSTOMER) {
        next(new RightsError());
    } else {
        next();
    }

};

module.exports.onlyForCustomer = (req, res, next) => {
    const { tokenData: { role } } = req
    if (role === CONSTANTS.CREATOR) {
        return next(new RightsError('this page only for customers'));
    } else {
        next();
    }
};

module.exports.canSendOffer = async (req, res, next) => {
    try {
        const { tokenData: { role }, body: { contestId: id } } = req
        if (role === CONSTANTS.CUSTOMER) {
            return next(new RightsError());
        }
        const result = await bd.Contests.findOne({
            where: {
                id,
            },
            attributes: ['status'],
        });
        if (result.get({ plain: true }).status ===
            CONSTANTS.CONTEST_STATUS_ACTIVE) {
            next();
        } else {
            return next(new RightsError());
        }
    } catch (e) {
        next(new ServerError());
    }

};

module.exports.onlyForCustomerWhoCreateContest = async (req, res, next) => {
    try {
        const { tokenData: { userId }, body: { contestId: id } } = req
        const result = await bd.Contests.findOne({
            where: {
                userId,
                id,
                status: CONSTANTS.CONTEST_STATUS_ACTIVE,
            },
        });
        if (!result) {
            return next(new RightsError());
        }
        next();
    } catch (e) {
        next(new ServerError());
    }
};

module.exports.canUpdateContest = async (req, res, next) => {
    try {
        const { tokenData: { userId }, body: { contestId: id } } = req
        const result = bd.Contests.findOne({
            where: {
                userId,
                id,
                status: { [bd.Sequelize.Op.not]: CONSTANTS.CONTEST_STATUS_FINISHED },
            },
        });
        if (!result) {
            return next(new RightsError());
        }
        next();
    } catch (e) {
        next(new ServerError());
    }
};

