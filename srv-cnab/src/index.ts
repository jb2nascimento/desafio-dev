import express from "express";
import Logger from "./config/logger/Logger";
import Rota from "./config/router/Router";
import errorMiddleware from "./exception/ErrorMiddleware";

class App {
    public app: express.Application;
    private logger: Logger;

    constructor() {
        this.app = express();
        this.config();
        this.logger = new Logger();
    }

    private config(): void {

        this.app.set("case sensitive routing", true);
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use("/", Rota);
        this.app.use(errorMiddleware);

        const port = 8080;
        this.app.set("port", port);

        this.app.listen(port, () => {
            const startupMsg = `Express application running. Listening on port ${port}`;
            this.logger.log.info(startupMsg);
        }).on("error", (error: ServerException) => {
             if (error.errno === "EADDRINUSE") {
                this.logger.log.error(`Port ${error.port} is already being used by another process.`);
             } else {
                this.logger.log.error(error.message);
             }
        });
    }
}

export interface ServerException extends Error {
    errno?: string;
    code?: string;
    port?: number;
}

export default new App().app;
