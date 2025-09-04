import winston from "winston";
import config from "../config";

const { combine, timestamp, json, errors, align, printf, colorize } =
  winston.format;

// Define the transpoert array to hold different loggint transprts

const transports: winston.transport[] = [];

// if the application is not running in production, add a console transport
if (config.NODE_ENV !== "production") {
  transports.push(
    new winston.transports.Console({
      format: combine(
        colorize({ all: true }), // Add colors to log levels
        timestamp({ format: "YYYY-MM-DD HH:mm:ss A" }), // Add timestamp to logs
        align(), // Align the log messages
        printf(({ timestamp, level, message, ...meta }) => {
          const metaStr = Object.keys(meta).length
            ? `\n${JSON.stringify(meta)}`
            : "";

            return `[${timestamp}] ${level}: ${message}${metaStr}`;
        })
      ),
    })
  );
}

// create loggger instance
const logger = winston.createLogger({
    level: config.LOG_LEVEL || 'info', // set default log level 'info'
    format: combine(timestamp(), errors({stack: true}), json()), // log in json format with timestamp and error stack
    transports,
    silent: config.NODE_ENV === "test", // disable logging in test environment
})

export {logger}