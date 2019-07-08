require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const app = express();
const {SERVER_PORT, CONNECTION_STRING} = process.env;

app.use(express.json());




massive(process.env.CONNECTION_STRING)
.then(db => {
    app.set('db', db);
    console.log('Database Connected :)')

    .catch(error => console.log(error));

    app.post("/api/wizard", makePost)
    app.get("/api/houses", getHouses)
    // app.get("/api)



app.listen(SERVER_PORT, () => console.log(`Listening on Port ${SERVER_PORT} `));