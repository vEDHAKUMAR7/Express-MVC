import express from "express";
import db from "./src/config/dbConnect.js";
import UserRouter from "./src/api/routers/UserRouter.js";

const app = express();
const port = 5000;

app.use(express.json());

app.use("/user", UserRouter);


app.listen(port, () => {
    console.log(`Server running on port ${port}...`);
});