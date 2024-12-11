package org.example;

import java.io.IOException;
import java.util.logging.*;

public class LoggerConfig {
    private static Logger logger;

    private LoggerConfig() {
        // Private constructor to prevent instantiation
    }

    public static synchronized Logger getLogger() {
        if (logger == null) {
            logger = Logger.getLogger("TicketSystemLogger");

            try {
                // Configure a single FileHandler
                FileHandler fileHandler = new FileHandler("ticket_system.log", true); // Append to the same log file
                fileHandler.setFormatter(new SimpleFormatter());
                logger.addHandler(fileHandler);

                // Set the log level to log all messages
                logger.setLevel(Level.ALL);
                fileHandler.setLevel(Level.ALL);

                // Disable parent handlers to prevent console logs
                logger.setUseParentHandlers(false);

            } catch (IOException e) {
                System.err.println("Failed to set up logger file: " + e.getMessage());
            }
        }
        return logger;
    }
}
