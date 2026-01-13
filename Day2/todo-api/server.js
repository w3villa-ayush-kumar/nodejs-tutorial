const app = require('./app');
const logger = require('./logger');

app.listen(3333, () => {
    logger.info('Server running on port 3333');
})