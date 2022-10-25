import log from "./utils/logger";

require('dotenv').config()
import express from 'express'
import config from "config"
import connectToDb from "./utils/connectToDb";
import router from "./routes";

const app = express();

app.use(router);

const port = config.get("port");

app.listen(port, () => {
    log.info(`App started at http://localhost:${port}`);
    connectToDb();
})