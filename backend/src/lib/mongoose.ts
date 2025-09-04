import mongoose from "mongoose";

import config from "../config";

// types
import type { ConnectOptions } from "mongoose";
import { logger } from "./winston";

//client option

const clientOptions: ConnectOptions = {
  dbName: "BankingApp",
  appName: "Banku",
  serverApi: {
    version: "1",
    strict: true,
    deprecationErrors: true,
  },
};

// establish connection to mongoDB
export const connectToDatabase = async () => {
    if(!config.MONGO_URI){
        throw new Error("MONGO_URI is not defined in environment variables");
    }

    try {
        await mongoose.connect(config.MONGO_URI, clientOptions);

        logger.info("Connected to database successfully", {
            uri: config.MONGO_URI,
            options: clientOptions
        });


    } catch (err) {
        if (err instanceof Error){
            throw err;
        }

        logger.warn("Error connecting to database", err);
    }
}

// disconnect from database
export const disconnectFromDatabase = async ():Promise<void> => {
    try {
        await mongoose.disconnect();
        logger.info("Disconnected from database successfully", {
            uri: config.MONGO_URI,
            options: clientOptions
        });
    } catch (err) {
        if (err instanceof Error){
            throw new Error(`Error disconnecting from database: ${err.message}`);
        }
        logger.warn("Error disconnecting from database", err);
    }
}