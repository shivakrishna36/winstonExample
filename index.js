const logger = require('./logger/logger');

function sample(){
    logger.info('Hello World');
    logger.warn('Hello World');
    logger.error('Hello World');
    logger.debug('Hello World');
}

sample();