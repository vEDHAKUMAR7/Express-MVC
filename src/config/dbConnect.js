import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/dbConnect");

const db = mongoose.connection;

db.on("connected", () => {
    console.log(`Connected to db...`);
});

db.on("error", (err) => {
    console.log(err);
});

export default db;