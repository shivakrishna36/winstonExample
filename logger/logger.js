const { createLogger, format, transports } = require('winston');
require('winston-daily-rotate-file');

const dailyRotateFileTransport = new transports.DailyRotateFile({
    filename: `logs/%DATE%-results.log`,
    datePattern: 'YYYY-MM-DD'
});

const logger = createLogger({
    level: 'debug',
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
    ),
    transports: [
        new transports.Console({
            format: format.combine(
                format.colorize(),
                format.simple(),
                format.timestamp({
                    format: 'YYYY-MM-DD HH:mm:ss'
            }),
            format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
            )
        }),
        dailyRotateFileTransport
    ]
});





module.exports = logger;
