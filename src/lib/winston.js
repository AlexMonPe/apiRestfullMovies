import winston from 'winston';

const logger = winston.createLogger({
  transports: [
    new winston.transports.File({ filename: 'logs/combined.log'}), // where do you save logs, you can save in more archives
    new winston.transports.Console() // to show it in console
  ],
  format: winston.format.combine(
    winston.format.timestamp(), winston.format.json() // format of the response(in this case with timstamp and format json)
  ),
  exitOnError: false, // for exceptions stops the logger 
});
logger.stream = { // this is for morgan, show message in console, and save it in combined.log
  write: (message, encoding)=> logger.info(message)
}

export default logger;
