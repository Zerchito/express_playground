function errorTyping(err, req, res, next) {
  next(err);
}

function errorHandler(err, req, res, next) {
  res.status(err.status).json({
    message: err.message,
    stack: err.stack
  });
}


module.exports = { errorTyping, errorHandler }
