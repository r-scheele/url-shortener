// Import express object from the express module
import express, { Express } from "express";

import connect from "./database";
import router from "./url.route";
// instatiate the express app instance
const app: Express = express();
app.use(express.json());
connect();
router(app);

// Listen for incoming requests on port 4000
app.listen(4000, () => console.log("Listening on post 4000"));
