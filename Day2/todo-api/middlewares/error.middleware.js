const logger = require('../config/logger');

exports.notFound = (req, res) => {
    res.status(404).json({
        status: 404,
        error: 'Route not found'
    });
};

exports.errorHandler = (err, req, res, next) => {
    logger.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
};
