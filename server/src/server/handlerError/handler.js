const { TokenExpiredError, JsonWebTokenError } = require('jsonwebtoken');
const {UniqueConstraintError} = require('sequelize')

module.exports.tokenErrorHandler = (err, req, res, next) =>{
 if (err instanceof TokenExpiredError) {
    return res.status(419).send('Token expired');
  }

  if (err instanceof JsonWebTokenError) {
    return res.status(401).send('Invalid token');
  }

  next(err)
}

module.exports.sequelizeErrorHandler = () =>{
  if(err instanceof UniqueConstraintError){
    return res.status(409).send('Unique constraint didnt pass')
  }

}

module.exports.validationErrorHandler = () =>{

}

module.exports.basicErrorHandler = (err, req, res, next) => {
  console.log('LOG ERROR=>>>>');
  console.dir(err);

  if (!err.message || !err.status) {
    return res.status(500).send('Server Error');
  }
  res.status(err.status).send(err.message);
};
