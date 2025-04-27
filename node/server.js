import express, { json, urlencoded } from "express";
import fs from "fs";
import https from "https";
const app = express();
const port = process.env.PORT || 3443;
// Controllers
import { homeController } from "./controllers/homeController.js";

// This replaced using bodyParser which was added in express v4.16.0 and higher
// https://stackoverflow.com/questions/24330014/bodyparser-is-deprecated-express-4
app.use(json());
app.use(
    urlencoded({
        extended: true,
    })
);

app.use(homeController);

try {
    const options = {
        key: fs.readFileSync("./certs/example.com.key"),
        cert: fs.readFileSync("./certs/example.com.crt"),
    };

    https.createServer(options, app).listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });

} catch (error) {
    console.log(`An error has occurred: ${error}`);
}