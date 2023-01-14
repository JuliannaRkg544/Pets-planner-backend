import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
var port = process.env.PORT || 4004;
app.listen(port, function () {
    console.log("server on air at port: ".concat(port));
});
