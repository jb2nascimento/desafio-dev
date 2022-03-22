import winston from 'winston';

export default class Logger {

  private logger = winston.createLogger({
    format: winston.format.combine(
      winston.format.errors({ stack: true }),
      winston.format.json()
    ),
    transports: [
      new winston.transports.File({ filename: 'error.log', level: 'error', dirname: 'logs' }),
      new winston.transports.File({ filename: 'info.log', level: 'info',  dirname: 'logs' }),
      new winston.transports.Console({ format: winston.format.json() })
    ],
  });

  get log() {
    return this.logger;
  }

}

