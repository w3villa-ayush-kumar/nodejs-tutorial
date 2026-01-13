const app = require('./app');
const logger = require('./config/logger');

app.listen(3333, () => {
    logger.info('Server running on port 3333');
})