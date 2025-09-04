import express from "express";
import config from "./config";
import cors, { CorsOptions } from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import compression from "compression";
import limiter from "./lib/express-rate-limit";
import v1Routes from "./routes/v1";
import { connectToDatabase, disconnectFromDatabase } from "./lib/mongoose";
import { logger } from "./lib/winston";


const app = express();

// Parse ALLOWED_ORIGINS from comma-separated string to array
const allowedOrigins = config.ALLOWED_ORIGINS?.split(",") || [];

// configure CORS Options
const corsOptions: CorsOptions = {
  origin(origin, callback) {
    // Allow requests from allowed origins, development mode, or requests without origin (mobile apps / curl)
    if (
      config.NODE_ENV === "development" ||
      !origin ||
      allowedOrigins.includes(origin)
    ) {
      callback(null, true); // allow requests with no origin (like mobile apps or curl requests)
    } else {
      //Reject origins from non-allowed list
      logger.warn(`🚫 CORS blocked: No access from origin ${origin}`);
      callback(new Error(`CORS error: No access from origin ${origin}`));
    }
  },
  credentials: true, // allow cookies to be sent
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"], // restrict HTTP methods
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  compression({
    threshold: 1024, // only compress responses larger than 1KB
  })
);

app.use(helmet()); // for setting various HTTP headers for app security

app.use(limiter); // apply rate limiting to all requests


app.use("/api/v1", v1Routes);

(async () => {
  try {

    await connectToDatabase();
    app.listen(config.PORT, () => {
      logger.info(
        `Server is running on http://localhost:${config.PORT} in ${config.NODE_ENV} mode`
      );
    });
  } catch (err) {
    logger.error("Failed to start server", err);
    if (config.NODE_ENV === "production") {
      process.exit(1);
    }
  }
})();

const handleshutDown = async () => {
  try {
    await disconnectFromDatabase();
    logger.warn("Received shutdown signal, shutting down gracefully...");
    process.exit(0);
  } catch (err) {
    logger.error("Error during shutdown", err);
  }
};

// listen for termination signals
process.on("SIGINT", handleshutDown); // Ctrl+C
process.on("SIGTERM", handleshutDown); // kill command
